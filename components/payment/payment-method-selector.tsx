"use client"

import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { PaymentMethod } from "@/lib/types/payment"

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod
  onSelect: (method: PaymentMethod) => void
}

export default function PaymentMethodSelector({ selectedMethod, onSelect }: PaymentMethodSelectorProps) {
  const paymentMethods = [
    {
      id: "credit_card" as PaymentMethod,
      name: "Cartão de Crédito",
      description: "Pagamento seguro com cartão de crédito",
      icon: "/images/payment-credit-card.png",
    },
    {
      id: "pix" as PaymentMethod,
      name: "PIX",
      description: "Pagamento instantâneo",
      icon: "/images/payment-pix.png",
    },
    {
      id: "boleto" as PaymentMethod,
      name: "Boleto Bancário",
      description: "Vencimento em 3 dias úteis",
      icon: "/images/payment-boleto.png",
    },
    {
      id: "stripe" as PaymentMethod,
      name: "Stripe",
      description: "Pagamento internacional",
      icon: "/images/stripe.png",
    },
    {
      id: "hotmart" as PaymentMethod,
      name: "Hotmart",
      description: "Plataforma de produtos digitais",
      icon: "/images/hotmart.png",
    },
  ]

  return (
    <RadioGroup
      value={selectedMethod}
      onValueChange={(value) => onSelect(value as PaymentMethod)}
      className="space-y-4"
    >
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className={`payment-option ${selectedMethod === method.id ? "payment-option-selected" : "border-gray-200"}`}
          onClick={() => onSelect(method.id)}
        >
          <RadioGroupItem value={method.id} id={method.id} className="payment-option-radio sr-only" />
          <div className="flex items-center">
            <div className="relative h-10 w-16 mr-4">
              <Image src={method.icon || "/placeholder.svg"} alt={method.name} fill className="object-contain" />
            </div>
            <div>
              <h4 className="font-medium">{method.name}</h4>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}
