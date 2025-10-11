"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, FileText, CheckCircle2, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const products = [
  {
    name: "FaqAI",
    description: "Seu cliente pergunta, a IA responde. 24/7, com a voz da sua marca. Simples assim.",
    tagline: "Atendimento que nunca dorme",
    features: ["IA Conversacional", "Integração Simples", "24/7"],
    icon: MessageSquare,
  },
  {
    name: "Quotifai",
    description: "Busca preços automaticamente e gera PDF pronto para envio. Economia de tempo real.",
    tagline: "Orçamentos em segundos",
    features: ["Busca Automática", "PDF Instantâneo", "Multi-fornecedor"],
    icon: FileText,
  },
]

export function ProductsSection() {
  const headerReveal = useScrollReveal<HTMLDivElement>()
  const product1Reveal = useScrollReveal<HTMLDivElement>()
  const product2Reveal = useScrollReveal<HTMLDivElement>()

  const productReveals = [product1Reveal, product2Reveal]

  return (
    <section id="ferramentas" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div
            ref={headerReveal.ref}
            className={`text-center space-y-4 ${headerReveal.isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">O que construímos</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-balance">
              Cada ferramenta resolve um <span className="text-primary">problema específico</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sem firulas, sem complexidade desnecessária.{" "}
              <span className="text-foreground font-semibold">Só o que você precisa.</span>
            </p>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const reveal = productReveals[index]
              return (
                <div
                  key={index}
                  ref={reveal.ref}
                  className={`group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(163,230,53,0.15)] overflow-hidden hover:-translate-y-2 ${
                    reveal.isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl -z-10" />

                  <div className="relative space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <product.icon className="w-7 h-7 text-primary" />
                      </div>
                      <Badge className="bg-success/10 text-success border-success/20 hover:bg-success/20">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Funcionando
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h4 className="text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-primary font-semibold">{product.tagline}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground border border-border group-hover:border-primary/30 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground group/btn bg-transparent relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                      <span className="relative">Ver demonstração</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative" />
                    </Button>
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
