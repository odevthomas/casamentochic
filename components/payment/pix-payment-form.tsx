"use client"

import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"

interface PixPaymentFormProps {
  onSubmit: (data: any) => void
}

export default function PixPaymentForm({ onSubmit }: PixPaymentFormProps) {
  const handleSubmit = () => {
    onSubmit({})
  }

  return (
    <div className="text-center space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg inline-block mx-auto">
        <QrCode className="h-32 w-32 text-elegant-black mx-auto" />
      </div>

      <div>
        <p className="text-sm text-gray-700 mb-2">
          Após clicar em "Gerar QR Code", você receberá um código PIX para pagamento.
        </p>
        <p className="text-sm text-gray-700">
          O pagamento será confirmado automaticamente em até 5 minutos após a transferência.
        </p>
      </div>

      <Button onClick={handleSubmit} className="bg-elegant-gold hover:bg-amber-700">
        Gerar QR Code PIX
      </Button>
    </div>
  )
}
