import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Target, Users, MessageSquare, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PlaxoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full text-sm text-blue-700 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Tecnologia acessível e humana</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Um ecossistema de soluções que <span className="text-blue-600">simplifica o digital</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            A Plaxo conecta pessoas e tecnologia com ferramentas SaaS acessíveis e inteligentes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg group">
              Conheça nossas soluções
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Nossa Visão */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Nossa Visão</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              A Plaxo não é apenas um grupo de ferramentas, mas um{" "}
              <span className="text-foreground font-semibold">movimento para democratizar</span> a automação e o acesso
              a tecnologia útil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Soluções acessíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Tecnologia de qualidade ao alcance de todos, sem complexidade
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Foco em pessoas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cada solução é pensada para facilitar a vida real de pessoas reais
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Tecnologia com propósito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Inovação que resolve problemas reais e gera valor verdadeiro
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soluções Atuais */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Soluções Atuais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas inteligentes que automatizam tarefas e simplificam processos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">FaqAI</CardTitle>
                <CardDescription className="text-base">
                  Plataforma de FAQ automatizado que oferece respostas rápidas e personalizadas, 24/7, com integração
                  simples e voz customizada para a marca
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">IA</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">NestJS</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Tailwind</span>
                </div>
                <Button className="w-full group/btn">
                  Ver Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Quotifai</CardTitle>
                <CardDescription className="text-base">
                  Busca automaticamente os melhores preços de fornecedores, gerando uma ordem de compra em PDF pronta
                  para envio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Laravel</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">PHP</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Tailwind</span>
                </div>
                <Button className="w-full group/btn">
                  Ver Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-dashed hover:border-blue-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform opacity-60">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  Ata Fácil
                  <span className="text-sm font-normal px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    Em desenvolvimento
                  </span>
                </CardTitle>
                <CardDescription className="text-base">
                  Auxilia cartórios a criar atas notariais a partir de conversas no WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Em desenvolvimento
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-dashed hover:border-purple-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform opacity-60">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  Orçamento Fácil
                  <span className="text-sm font-normal px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    Em desenvolvimento
                  </span>
                </CardTitle>
                <CardDescription className="text-base">
                  Gera orçamentos em PDF personalizados via WhatsApp, por voz ou texto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Em desenvolvimento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nosso Propósito */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Nosso Propósito</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Cada aplicativo é parte de um{" "}
            <span className="text-foreground font-semibold">ecossistema que cresce junto com você</span>. Use apenas uma
            solução ou todas — você sempre fará parte da Plaxo.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Acreditamos que a tecnologia deve ser uma aliada, não um obstáculo. Por isso, criamos ferramentas que
            conversam com você, entendem suas necessidades e entregam resultados de forma simples e eficiente.
          </p>
        </div>
      </section>

      {/* Quem cria isso */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                CE
              </div>
              <CardTitle className="text-3xl mb-2">Quem cria isso</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Plaxo é idealizada e desenvolvida por{" "}
                <Link
                  href="https://carloseduardodiasbatista.com.br/"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                >
                  Carlos Eduardo Dias Batista
                </Link>
                , criador apaixonado por tecnologia acessível e soluções humanas.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Plaxo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ecossistema de soluções SaaS que simplifica o digital
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Soluções</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      FaqAI
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Quotifai
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Ata Fácil
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Orçamento Fácil
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Suporte
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground transition-colors">
                      Redes Sociais
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t text-center text-sm text-muted-foreground">
              <p>
                © 2025 Plaxo — parte do ecossistema criado por{" "}
                <Link
                  href="https://carloseduardodiasbatista.com.br/"
                  target="_blank"
                  className="text-foreground hover:text-blue-600 transition-colors font-medium"
                >
                  Carlos Eduardo Dias Batista
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
