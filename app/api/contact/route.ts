import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Aqui você integraria com seu serviço de email (SendGrid, Mailchimp, etc.)
    console.log("Dados de contato recebidos:", data)

    // Simulando um processamento bem-sucedido
    return NextResponse.json({
      success: true,
      message: "Mensagem recebida com sucesso! Entraremos em contato em breve.",
    })
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}
