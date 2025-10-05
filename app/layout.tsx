import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Plaxo - Tecnologia que faz sentido",
  description: "Não somos mais uma startup. Somos um movimento honesto que cria ferramentas SaaS que realmente resolvem problemas reais de pessoas reais.",
  keywords: ["SaaS", "automação", "IA", "tecnologia acessível", "FaqAI", "Quotifai", "Carlos Eduardo"],
  authors: [{ name: "Carlos Eduardo Dias Batista", url: "https://carloseduardodiasbatista.com.br" }],
  creator: "Carlos Eduardo Dias Batista",
  openGraph: {
    title: "Plaxo - Tecnologia que faz sentido",
    description: "Movimento honesto que cria ferramentas SaaS para problemas reais",
    url: "https://plaxo.com.br",
    siteName: "Plaxo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plaxo - Tecnologia que faz sentido",
    description: "Movimento honesto que cria ferramentas SaaS para problemas reais",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}