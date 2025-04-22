"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { trackEvent } from "@/lib/services/analytics-service"
import type { CustomerInfo, PaymentMethod, Product } from "@/lib/types/payment"
import PaymentMethodSelector from "@/components/payment/payment-method-selector"
import CreditCardForm from "@/components/payment/credit-card-form"
import PixPaymentForm from "@/components/payment/pix-payment-form"
import BoletoPaymentForm from "@/components/payment/boleto-payment-form"

interface PaymentFormProps {
  product: Product
}

export default function PaymentForm({ product }: PaymentFormProps) {
  const router = useRouter()
  const [step, setStep] = useState<"customer" | "payment" | "processing">("customer")
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit_card")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
  })

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validar dados do cliente
    if (!customer.name || !customer.email) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      })
      return
    }

    // Avançar para o método de pagamento
    setStep("payment")

    // Rastrear evento
    trackEvent({
      eventName: "checkout_step_completed",
      properties: { step: "customer_info" },
    })
  }

  const handlePaymentSubmit = async (paymentData: any) => {
    setIsSubmitting(true)
    setStep("processing")

    try {
      // Criar intenção de pagamento
      const response = await fetch("/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
          customer,
          paymentMethod,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Erro ao processar pagamento")
      }

      // Rastrear evento
      trackEvent({
        eventName: "payment_initiated",
        properties: {
          product_id: product.id,
          payment_method: paymentMethod,
          amount: product.price,
        },
      })

      // Redirecionar para Hotmart se necessário
      if (paymentMethod === "hotmart" && data.redirectUrl) {
        window.location.href = data.redirectUrl
        return
      }

      // Confirmar pagamento (para métodos que precisam de confirmação adicional)
      if (paymentMethod === "credit_card") {
        const confirmResponse = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentIntentId: data.paymentIntent.id,
            paymentMethod,
            paymentMethodId: paymentData?.paymentMethodId,
          }),
        })

        const confirmData = await confirmResponse.json()

        if (!confirmData.success) {
          throw new Error(confirmData.message || "Erro ao confirmar pagamento")
        }

        // Rastrear evento de sucesso
        trackEvent({
          eventName: "payment_completed",
          properties: {
            product_id: product.id,
            payment_method: paymentMethod,
            amount: product.price,
          },
        })
      }

      // Redirecionar para página de sucesso
      router.push(`/pagamento/sucesso?id=${data.paymentIntent.id}`)
    } catch (error) {
      console.error("Erro no processamento do pagamento:", error)

      // Rastrear evento de falha
      trackEvent({
        eventName: "payment_failed",
        properties: {
          product_id: product.id,
          payment_method: paymentMethod,
          error: error instanceof Error ? error.message : "Erro desconhecido",
        },
      })

      toast({
        title: "Erro no pagamento",
        description:
          error instanceof Error ? error.message : "Ocorreu um erro ao processar seu pagamento. Tente novamente.",
        variant: "destructive",
      })

      setStep("payment")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {step === "customer" && (
        <form onSubmit={handleCustomerSubmit} className="space-y-6">
          <h3 className="text-xl font-serif mb-4">Informações Pessoais</h3>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-elegant-black">
              Nome completo <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              placeholder="Seu nome completo"
              required
              className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-elegant-black">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={customer.email}
              onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
              placeholder="seu@email.com"
              required
              className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-elegant-black">
              Telefone
            </label>
            <Input
              id="phone"
              type="tel"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              placeholder="(00) 00000-0000"
              className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
            />
          </div>

          <Button type="submit" className="w-full bg-elegant-gold hover:bg-amber-700">
            Continuar para pagamento
          </Button>
        </form>
      )}

      {step === "payment" && (
        <div className="space-y-6">
          <h3 className="text-xl font-serif mb-4">Método de Pagamento</h3>

          <PaymentMethodSelector selectedMethod={paymentMethod} onSelect={setPaymentMethod} />

          <div className="mt-6">
            {paymentMethod === "credit_card" && <CreditCardForm onSubmit={handlePaymentSubmit} />}

            {paymentMethod === "pix" && <PixPaymentForm onSubmit={handlePaymentSubmit} />}

            {paymentMethod === "boleto" && <BoletoPaymentForm onSubmit={handlePaymentSubmit} customer={customer} />}

            {(paymentMethod === "hotmart" || paymentMethod === "stripe") && (
              <div className="text-center">
                <p className="mb-4 text-gray-700">Você será redirecionado para a plataforma de pagamento segura.</p>
                <Button onClick={() => handlePaymentSubmit({})} className="bg-elegant-gold hover:bg-amber-700">
                  Continuar para {paymentMethod === "hotmart" ? "Hotmart" : "Stripe"}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {step === "processing" && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-elegant-gold mx-auto mb-4"></div>
          <h3 className="text-xl font-serif mb-2">Processando seu pagamento</h3>
          <p className="text-gray-600">Por favor, aguarde enquanto processamos sua transação...</p>
        </div>
      )}
    </div>
  )
}
