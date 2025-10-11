"use client"

import type React from "react"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Erro ao enviar mensagem. Tente novamente.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vamos <span className="text-primary">conversar</span>?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Tem uma ideia, dúvida ou feedback? Mande uma mensagem e vamos construir algo incrível juntos.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Seu nome"
                  disabled={status === "loading"}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="seu@email.com"
                  disabled={status === "loading"}
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Conte-nos sobre sua ideia ou dúvida..."
                  disabled={status === "loading"}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Mensagem enviada com sucesso! Responderemos em breve.</p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-background font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Enviar mensagem
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-muted mb-4">Ou entre em contato diretamente:</p>
            <a
              href="mailto:contato@plaxo.com.br"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              contato@plaxo.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
