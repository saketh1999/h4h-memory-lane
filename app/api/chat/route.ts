import { OpenAIStream, StreamingTextResponse } from "ai"
import { Configuration, OpenAIApi } from "openai-edge"

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export async function POST(req: Request) {
  const { messages } = await req.json()

  // TODO: Implement Pinecone query for relevant memories
  // For now, we'll use dummy data
  const relevantMemories = `
    1. Family Picnic: We had a wonderful picnic in Central Park last summer on July 15, 2022.
    2. Wedding Anniversary: Celebrated our 50th wedding anniversary with close friends and family on March 22, 2023.
    3. Grandchild's Birth: Welcoming our first grandchild, little Emma, into the world on January 10, 2023.
  `

  // Prepare the messages for OpenAI, including the relevant memories
  const aiMessages = [
    {
      role: "system",
      content:
        "You are a helpful assistant for Alzheimer's patients. Use the provided memories to help answer questions.",
    },
    {
      role: "user",
      content: `Relevant memories: ${relevantMemories}\n\nUser question: ${messages[messages.length - 1].content}`,
    },
  ]

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: aiMessages,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}

