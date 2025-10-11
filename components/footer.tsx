import Link from "next/link"

const footerLinks = {
  ferramentas: [
    { name: "FaqAI", href: "#" },
    { name: "Quotifai", href: "#" },
    { name: "Ata Fácil (em breve)", href: "#" },
    { name: "Orçamento Fácil (em breve)", href: "#" },
  ],
  contato: [
    { name: "Suporte direto", href: "#" },
    { name: "Feedback", href: "#" },
    { name: "Parcerias", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-foreground">Plaxo</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Movimento para democratizar tecnologia útil. Sem hype, sem bullshit. Apenas soluções que funcionam.
            </p>
          </div>

          {/* Ferramentas */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Ferramentas</h4>
            <ul className="space-y-2">
              {footerLinks.ferramentas.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <ul className="space-y-2">
              {footerLinks.contato.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Plaxo — Criado com propósito por{" "}
            <span className="text-primary font-semibold">Carlos Eduardo Dias Batista</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
