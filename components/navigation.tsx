"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-2xl font-display font-bold text-foreground">
            <Image src="/logo.svg" alt="Plaxo" height={32} width={30} />
            Plaxo
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#ferramentas" className="text-muted-foreground hover:text-foreground transition-colors">
              Ferramentas
            </Link>
            <Link href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#contato">
              <Button className="bg-primary hover:bg-primary/90 text-background font-semibold px-6 transition-all duration-300 hover:scale-105">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
