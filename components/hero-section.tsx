"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 animate-fade-in backdrop-blur-sm hover:border-primary/50 transition-colors">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Tecnologia que faz sentido</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight animate-fade-in-up text-balance">
            Não somos{" "}
            <span className="text-primary relative inline-block">
              mais uma startup
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 animate-pulse" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
            Somos um <span className="text-foreground font-semibold">movimento honesto</span> que cria ferramentas SaaS
            que <span className="text-primary font-semibold">realmente resolvem problemas reais</span> de pessoas reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative">Ver o que construímos</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card hover:border-primary/50 px-8 py-6 text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              Nossa história
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-fade-in-up animation-delay-600">
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-display font-bold text-primary group-hover:scale-110 transition-transform">
                20+
              </div>
              <div className="text-muted-foreground">Ferramentas ativas</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-display font-bold text-primary group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-muted-foreground">Sem bullshit</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-display font-bold text-primary group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-muted-foreground">Suporte direto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
