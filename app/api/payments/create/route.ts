import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createPaymentIntent } from "@/lib/services/payment-service"
import { createStripePaymentIntent } from "@/lib/services/stripe-service"
import { createHotmartPaymentIntent, getHotmartCheckoutUrl } from "@/lib/services/hotmart-service"
import type { CustomerInfo, PaymentMethod, Product } from "@/lib/types/payment"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { product, customer, paymentMethod } = data as {
      product: Product
      customer: CustomerInfo
      paymentMethod: PaymentMethod
    }

    // Validar dados
    if (!product || !customer || !paymentMethod) {
      return NextResponse.json(
        { success: false, message: "Dados incompletos para processamento do pagamento." },
        { status: 400 },
      )
    }

    let paymentIntent
    let redirectUrl

    // Processar pagamento de acordo com o método escolhido
    switch (paymentMethod) {
      case "stripe":
        paymentIntent = await createStripePaymentIntent(product, customer)
        break
      case "hotmart":
        paymentIntent = await createHotmartPaymentIntent(product, customer)
        redirectUrl = getHotmartCheckoutUrl(paymentIntent.id)
        break
      default:
        paymentIntent = await createPaymentIntent(product, customer, paymentMethod)
    }

    return NextResponse.json({
      success: true,
      paymentIntent,
      redirectUrl,
    })
  } catch (error) {
    console.error("Erro ao processar pagamento:", error)
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao processar pagamento."
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 })
  }
}
