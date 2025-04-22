import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { confirmPayment } from "@/lib/services/payment-service"
import { confirmStripePayment } from "@/lib/services/stripe-service"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { paymentIntentId, paymentMethod, paymentMethodId } = data

    // Validar dados
    if (!paymentIntentId) {
      return NextResponse.json(
        { success: false, message: "ID da intenção de pagamento não fornecido." },
        { status: 400 },
      )
    }

    let paymentIntent

    // Confirmar pagamento de acordo com o método
    if (paymentMethod === "stripe" && paymentMethodId) {
      paymentIntent = await confirmStripePayment(paymentIntentId, paymentMethodId)
    } else {
      paymentIntent = await confirmPayment(paymentIntentId)
    }

    return NextResponse.json({
      success: true,
      paymentIntent,
    })
  } catch (error) {
    console.error("Erro ao confirmar pagamento:", error)
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao confirmar pagamento."
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 })
  }
}
