import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { query, messages } = await req.json();
    const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);

    // Get embedding for the query
    const model = genAI.getGenerativeModel({ model: "embedding-001" });
    const embeddingResult = await model.embedContent(query);
    const queryEmbedding = embeddingResult.embedding.values;

    // Query Pinecone
    const queryResponse = await index.query({
      vector: queryEmbedding,
      topK: 5, // Increased to get more context
      includeMetadata: true,
    });

    // Extract and format relevant contexts
    const contexts = queryResponse.matches
      ?.map((match) => match.metadata?.text as string)
      .filter(Boolean);

    // Format the conversation history for Gemini
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    // Create chat model and start conversation
    const chatModel = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = chatModel.startChat({
      history: formattedMessages,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Construct a clear prompt with context
    const prompt = `You are a helpful AI assistant with access to the user's memories. 
    
Relevant memories for context:
${contexts.map((context, i) => `${i + 1}. ${context}`).join('\n')}

User question: ${query}

Please provide a natural, conversational response. If the memories don't contain relevant information for the question, please acknowledge that and try to provide a helpful general response.`;

    const result = await chat.sendMessage(prompt);
    const response = await result.response.text();

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error('Error in chat endpoint:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process chat request' },
      { status: 500 }
    );
  }
}

