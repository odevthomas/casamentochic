"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

interface CreditCardFormProps {
  onSubmit: (data: any) => void
}

export default function CreditCardForm({ onSubmit }: CreditCardFormProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validar dados do cartão
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os campos do cartão.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulando criação de token de pagamento
    setTimeout(() => {
      const paymentMethodId = `pm_${Math.random().toString(36).substring(2, 15)}`
      onSubmit({ paymentMethodId })
      setIsSubmitting(false)
    }, 1000)
  }

  // Formatar número do cartão
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // Formatar data de expiração
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return v
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="cardNumber" className="text-sm font-medium text-elegant-black">
          Número do Cartão
        </label>
        <Input
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="cardName" className="text-sm font-medium text-elegant-black">
          Nome no Cartão
        </label>
        <Input
          id="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value.toUpperCase())}
          placeholder="NOME COMO ESTÁ NO CARTÃO"
          className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="expiryDate" className="text-sm font-medium text-elegant-black">
            Validade
          </label>
          <Input
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
            placeholder="MM/AA"
            maxLength={5}
            className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cvv" className="text-sm font-medium text-elegant-black">
            CVV
          </label>
          <Input
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="123"
            maxLength={4}
            className="border-gray-300 focus:border-elegant-gold focus:ring-elegant-gold"
          />
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full bg-elegant-gold hover:bg-amber-700" disabled={isSubmitting}>
          {isSubmitting ? "Processando..." : "Finalizar Pagamento"}
        </Button>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Pagamento 100% seguro. Seus dados são criptografados.</p>
      </div>
    </form>
  )
}
