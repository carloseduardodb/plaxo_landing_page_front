"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Loader2, Rocket } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function UpcomingSection() {
  const reveal = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={reveal.ref}
            className={`bg-card border border-border rounded-2xl p-12 relative overflow-hidden hover:border-primary/30 transition-all duration-500 ${
              reveal.isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse"
              style={{ animationDuration: "3s" }}
            />

            <div className="absolute top-10 right-10 w-2 h-2 bg-primary rounded-full animate-ping" />
            <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping animation-delay-300" />

            <div className="relative space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="space-y-2">
                  <Badge className="bg-warning/10 text-warning border-warning/20 animate-pulse">
                    <Clock className="w-3 h-3 mr-1" />
                    Em desenvolvimento
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    Próximas <span className="text-primary">ferramentas</span>
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold text-primary">75%</div>
                    <div className="text-sm text-muted-foreground">concluído</div>
                  </div>
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
              </div>

              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-primary to-success rounded-full relative animate-pulse"
                  style={{ width: "75%", animationDuration: "2s" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide-right_2s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Upcoming tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                    <h4 className="text-xl font-display font-bold text-foreground">Ata Fácil</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">Cartórios criam atas via WhatsApp</p>
                </div>
                <div className="space-y-3 p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group animation-delay-100">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                    <h4 className="text-xl font-display font-bold text-foreground">Orçamento Fácil</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">PDFs personalizados por voz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
