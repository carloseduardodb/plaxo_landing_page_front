import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, etc.
    // 2. Save to a database
    // 3. Send to a CRM or notification system

    // For now, we'll just log it (in production, implement proper email sending)
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate a small delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Erro ao processar mensagem" }, { status: 500 })
  }
}
