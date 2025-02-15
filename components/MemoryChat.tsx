"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function MemoryChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <Card className="h-[600px] flex flex-col">
      <CardContent className="flex-grow p-4">
        <ScrollArea className="h-full pr-4">
          {messages.map((message, i) => (
            <div key={i} className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex ${message.role === "user" ? "flex-row-reverse" : "flex-row"} items-end`}>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                </Avatar>
                <div
                  className={`max-w-md mx-2 px-4 py-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about your memories..."
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Thinking..." : "Send"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

