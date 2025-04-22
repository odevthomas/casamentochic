import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getPaymentStatus } from "@/lib/services/payment-service"

export async function GET(request: NextRequest) {
  try {
    const paymentIntentId = request.nextUrl.searchParams.get("id")

    // Validar dados
    if (!paymentIntentId) {
      return NextResponse.json(
        { success: false, message: "ID da intenção de pagamento não fornecido." },
        { status: 400 },
      )
    }

    const paymentIntent = await getPaymentStatus(paymentIntentId)

    return NextResponse.json({
      success: true,
      paymentIntent,
    })
  } catch (error) {
    console.error("Erro ao verificar status do pagamento:", error)
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao verificar status do pagamento."
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 })
  }
}
