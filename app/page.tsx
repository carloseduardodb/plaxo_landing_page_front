'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Target, Users, MessageSquare, FileText, TrendingUp, Zap, Heart, Code, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PlaxoLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Animated Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Tecnologia que faz sentido</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block text-white">Não somos</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              mais uma startup
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Somos um <span className="text-white font-semibold">movimento honesto</span> que cria ferramentas SaaS
            <br className="hidden md:block" />
            que realmente <span className="text-blue-400">resolvem problemas reais</span> de pessoas reais.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group border-0">
              Ver o que construímos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 text-lg bg-transparent">
              Nossa história
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Truth Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-red-400">A verdade</span> que ninguém conta
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              95% das startups criam soluções para problemas que não existem.
              Nós fazemos o contrário: <span className="text-white font-semibold">encontramos problemas reais e criamos soluções simples</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-red-400" />
                </div>
                <CardTitle className="text-2xl text-white">Sem bullshit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  Não prometemos revolucionar o mundo. Prometemos resolver seu problema específico, hoje.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">Feito por quem usa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  Cada ferramenta nasce de uma necessidade real nossa. Se não usamos, não lançamos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white">Preço justo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  Cobramos pelo valor que entregamos, não pelo hype. Transparência total, sempre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              O que <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">construímos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada ferramenta resolve um problema específico. Sem firulas, sem complexidade desnecessária.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FaqAI */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    Funcionando
                  </span>
                </div>
                <CardTitle className="text-3xl text-white mb-2">FaqAI</CardTitle>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Seu cliente pergunta, a IA responde. 24/7, com a voz da sua marca.
                  <span className="text-blue-400 font-semibold"> Simples assim.</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">IA Conversacional</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">Integração Simples</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">24/7</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 group/btn">
                  Ver demonstração
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Quotifai */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    Funcionando
                  </span>
                </div>
                <CardTitle className="text-3xl text-white mb-2">Quotifai</CardTitle>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Busca preços automaticamente e gera PDF pronto para envio.
                  <span className="text-purple-400 font-semibold"> Economia de tempo real.</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">Busca Automática</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">PDF Instantâneo</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">Multi-fornecedor</span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0 group/btn">
                  Ver demonstração
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Em desenvolvimento */}
            <Card className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 border-gray-700/40 backdrop-blur-sm hover:border-gray-600/60 transition-all group overflow-hidden relative md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-white mb-1">Próximas ferramentas</CardTitle>
                      <p className="text-gray-400">Ata Fácil • Orçamento Fácil</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                    Em desenvolvimento
                  </span>
                </div>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-orange-400 font-semibold">Ata Fácil:</span> Cartórios criam atas via WhatsApp •
                  <span className="text-yellow-400 font-semibold"> Orçamento Fácil:</span> PDFs personalizados por voz
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-800/50 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full w-3/4" />
                  </div>
                  <span className="text-gray-400 text-sm">75% concluído</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-5xl font-black shadow-2xl">
              CE
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Quem está por trás <span className="text-blue-400">disso tudo</span>
            </h2>
          </div>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm text-left max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Sou <Link href="https://carloseduardodiasbatista.com.br/" target="_blank" className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-blue-400/30 hover:decoration-blue-300">Carlos Eduardo</Link>,
                desenvolvedor há mais de 5 anos. Cansei de ver tecnologia complicada para problemas simples.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <span className="text-white font-semibold">Plaxo não é uma empresa tradicional.</span> É minha forma de criar ferramentas
                que eu mesmo usaria, com preços justos e sem enrolação.
              </p>
              <p className="text-blue-400 text-lg font-semibold">
                Cada linha de código tem propósito. Cada ferramenta resolve um problema real.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black text-white mb-4">Plaxo</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Movimento para democratizar tecnologia útil. Sem hype, sem bullshit.
                Apenas soluções que funcionam.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Ferramentas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">FaqAI</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Quotifai</Link></li>
                <li><span className="text-gray-600">Ata Fácil (em breve)</span></li>
                <li><span className="text-gray-600">Orçamento Fácil (em breve)</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Suporte direto</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Feedback</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Parcerias</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2025 Plaxo — Criado com propósito por{" "}
              <Link
                href="https://carloseduardodiasbatista.com.br/"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Carlos Eduardo Dias Batista
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}