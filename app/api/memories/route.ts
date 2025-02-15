import { NextResponse } from "next/server"
import { PineconeClient } from "@pinecone-database/pinecone"
import { Configuration, OpenAIApi } from "openai-edge"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

const pinecone = new PineconeClient()

export async function POST(req: Request) {
  const { title, description } = await req.json()

  // Initialize Pinecone client
  await pinecone.init({
    environment: process.env.PINECONE_ENVIRONMENT!,
    apiKey: process.env.PINECONE_API_KEY!,
  })

  // Select Pinecone index
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!)

  // Generate embedding for the memory
  const embedding = await getEmbedding(`${title} ${description}`)

  // Store the memory in Pinecone
  await index.upsert({
    upsertRequest: {
      vectors: [
        {
          id: Date.now().toString(),
          values: embedding,
          metadata: {
            title,
            description,
            text: `${title}: ${description}`,
          },
        },
      ],
    },
  })

  return NextResponse.json({ success: true })
}

async function getEmbedding(text: string) {
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: text,
  })

  const result = await response.json()
  return result.data[0].embedding
}

