"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface Memory {
  id: string
  title: string
  description: string
  date: string
}

export default function Memories() {
  const [memories, setMemories] = useState<Memory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Implement API call to fetch memories
    // For now, we'll use dummy data
    const dummyMemories: Memory[] = [
      {
        id: "1",
        title: "Family Picnic",
        description: "We had a wonderful picnic in Central Park last summer.",
        date: "2022-07-15",
      },
      {
        id: "2",
        title: "Wedding Anniversary",
        description: "Celebrated our 50th wedding anniversary with close friends and family.",
        date: "2023-03-22",
      },
      {
        id: "3",
        title: "Grandchild's Birth",
        description: "Welcoming our first grandchild, little Emma, into the world.",
        date: "2023-01-10",
      },
    ]

    setTimeout(() => {
      setMemories(dummyMemories)
      setLoading(false)
    }, 1000) // Simulating API delay
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {memories.map((memory) => (
        <Card key={memory.id}>
          <CardHeader>
            <CardTitle>{memory.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{memory.description}</p>
            <p className="text-sm text-muted-foreground mt-2">{new Date(memory.date).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
      <Button className="w-full">Load More Memories</Button>
    </div>
  )
}

