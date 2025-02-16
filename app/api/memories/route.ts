import { NextResponse } from "next/server"
import { Pinecone } from "@pinecone-database/pinecone"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
})

export async function POST(req: Request) {
  const { title, description } = await req.json()

  // Select Pinecone index
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!)

  // Generate embedding for the memory
  const embedding = await getEmbedding(`${title} ${description}`)

  // Store the memory in Pinecone
  await index.upsert([
    {
      id: Date.now().toString(),
      values: embedding,
      metadata: {
        title,
        description,
        text: `${title}: ${description}`,
      },
    },
  ])

  return NextResponse.json({ success: true })
}

async function getEmbedding(text: string) {
  const model = genAI.getGenerativeModel({ model: "embedding-001" })
  const result = await model.embedContent(text)
  const embedding = result.embedding.values
  return embedding
}

