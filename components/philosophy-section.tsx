"use client"

import { Heart, DollarSign, Zap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const philosophyItems = [
  {
    icon: Zap,
    title: "Sem bullshit",
    description: "Não prometemos revolucionar o mundo. Prometemos resolver seu problema específico, hoje.",
  },
  {
    icon: Heart,
    title: "Feito por quem usa",
    description: "Cada ferramenta nasce de uma necessidade real nossa. Se não usamos, não lançamos.",
  },
  {
    icon: DollarSign,
    title: "Preço justo",
    description: "Cobramos pelo valor que entregamos, não pelo hype. Transparência total, sempre.",
  },
]

export function PhilosophySection() {
  const headerReveal = useScrollReveal<HTMLDivElement>()
  const card1Reveal = useScrollReveal<HTMLDivElement>()
  const card2Reveal = useScrollReveal<HTMLDivElement>()
  const card3Reveal = useScrollReveal<HTMLDivElement>()

  const cardReveals = [card1Reveal, card2Reveal, card3Reveal]

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div
            ref={headerReveal.ref}
            className={`text-center space-y-4 ${headerReveal.isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Nossa história</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-balance">
              A verdade que <span className="text-primary">ninguém conta</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="text-foreground font-semibold">95% das startups</span> criam soluções para problemas que
              não existem. Nós fazemos o contrário: encontramos{" "}
              <span className="text-primary font-semibold">problemas reais</span> e criamos soluções simples.
            </p>
          </div>

          {/* Philosophy cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyItems.map((item, index) => {
              const reveal = cardReveals[index]
              return (
                <div
                  key={index}
                  ref={reveal.ref}
                  className={`group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:-translate-y-2 ${
                    reveal.isVisible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
