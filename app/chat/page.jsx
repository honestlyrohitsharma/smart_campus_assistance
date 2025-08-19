"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SendHorizontal, Bot, User, Sparkles } from "lucide-react"
import Footer from "@/components/footer"

export default function ChatPage() {
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { id: Date.now(), role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])

    // Clear input and show loading
    setInput("")
    setIsLoading(true)
    setShowSuggestions(false)

    try {
      // Send message to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      // Get response text
      const data = await response.text()

      // Add assistant message to chat
      setMessages((prev) => [...prev, { id: Date.now(), role: "assistant", content: data }])
    } catch (error) {
      console.error("Error in chat:", error)
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickReply = (question) => {
    // Set the input value to the question
    setInput(question)

    // Submit the form with the question
    const syntheticEvent = { preventDefault: () => {} }
    handleSubmit(syntheticEvent)

    setShowSuggestions(false)
  }

  const quickReplies = [
    "When is the next event?",
    "Where is the main stage?",
    "What time does the fest start?",
    "How do I register for competitions?",
    "Where can I find food stalls?",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              Campus Fest Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[70vh] flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <p className="mb-2 font-medium text-lg">Hi there! How can I help you with the campus fest?</p>
                    <p className="text-sm">
                      Ask me about events, schedules, venues, or anything else related to the campus fest.
                    </p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                            : "bg-white border border-purple-100 shadow-sm"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className="mt-1">
                            {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          <div className="leading-relaxed">{message.content}</div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white border border-purple-100 shadow-sm">
                      <div className="flex items-start gap-2">
                        <div className="mt-1">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-purple-400 animate-bounce"></div>
                          <div className="h-2 w-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></div>
                          <div className="h-2 w-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {showSuggestions && messages.length === 0 && (
                <div className="px-4 pb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Quick questions about the fest:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs whitespace-normal h-auto py-1.5 border-purple-200 text-purple-600 hover:bg-purple-50"
                        onClick={() => handleQuickReply(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    name="message"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about the fest..."
                    className="flex-1 border-purple-200 focus-visible:ring-purple-500"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                  >
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
