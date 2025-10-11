"use client"

import { Code2, Heart, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function FounderSection() {
  const imageReveal = useScrollReveal<HTMLDivElement>()
  const contentReveal = useScrollReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div
              ref={imageReveal.ref}
              className={`relative ${imageReveal.isVisible ? "animate-slide-right" : "opacity-0"}`}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card border border-border overflow-hidden relative group hover:border-primary/50 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center animate-float group-hover:scale-110 transition-transform duration-500">
                    <div className="text-6xl font-display font-bold text-primary">CE</div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-primary/10 animate-pulse" />
                <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-primary/5 animate-pulse animation-delay-200" />
                <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-pulse animation-delay-400" />
              </div>
            </div>

            {/* Content side */}
            <div
              ref={contentReveal.ref}
              className={`space-y-6 ${contentReveal.isVisible ? "animate-slide-left" : "opacity-0"}`}
            >
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">Quem está por trás</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  Quem está por trás <span className="text-primary">disso tudo</span>
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou <span className="text-foreground font-semibold">Carlos Eduardo</span>, desenvolvedor há mais de 5
                  anos. Cansei de ver <span className="text-primary font-semibold">tecnologia complicada</span> para
                  problemas simples.
                </p>
                <p>
                  Plaxo não é uma empresa tradicional. É minha forma de criar ferramentas que eu mesmo usaria, com
                  preços justos e <span className="text-foreground font-semibold">sem enrolação</span>.
                </p>
                <p className="text-foreground font-medium text-lg">
                  Cada linha de código tem propósito. Cada ferramenta resolve um problema real.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2 group cursor-default">
                  <div className="flex items-center gap-2 text-primary">
                    <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="text-2xl font-display font-bold group-hover:scale-110 transition-transform inline-block">
                      5+
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="space-y-2 group cursor-default">
                  <div className="flex items-center gap-2 text-primary">
                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-display font-bold group-hover:scale-110 transition-transform inline-block">
                      100%
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">Feito com propósito</div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all bg-transparent"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all bg-transparent"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
