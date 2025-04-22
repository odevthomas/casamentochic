"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import type { CustomerInfo } from "@/lib/types/payment"

interface BoletoPaymentFormProps {
  onSubmit: (data: any) => void
  customer: CustomerInfo
}

export default function BoletoPaymentForm({ onSubmit, customer }: BoletoPaymentFormProps) {
  const handleSubmit = () => {
    onSubmit({})
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <FileText className="h-16 w-16 text-elegant-black mx-auto mb-4" />
        <h4 className="font-medium mb-2">Boleto Bancário</h4>
        <p className="text-sm text-gray-700">
          O boleto será gerado em nome de {customer.name || "Cliente"} e enviado para o email{" "}
          {customer.email || "informado"}.
        </p>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <p>• O boleto terá vencimento em 3 dias úteis.</p>
        <p>• Após o pagamento, a compensação pode levar até 3 dias úteis.</p>
        <p>• Você receberá o acesso assim que o pagamento for confirmado.</p>
      </div>

      <Button onClick={handleSubmit} className="w-full bg-elegant-gold hover:bg-amber-700">
        Gerar Boleto
      </Button>
    </div>
  )
}
