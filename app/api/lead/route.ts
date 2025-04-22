import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Aqui você integraria com seu CRM (HubSpot, Salesforce, etc.)
    console.log("Novo lead capturado:", data)

    // Simulando um processamento bem-sucedido
    return NextResponse.json({
      success: true,
      message: "Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.",
    })
  } catch (error) {
    console.error("Erro ao processar lead:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao enviar seus dados. Tente novamente." },
      { status: 500 },
    )
  }
}
