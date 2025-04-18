import Link from "next/link"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-6 text-center">Pagamento</h1>
          <div className="w-20 h-1 bg-[#cfa144] mx-auto mb-12"></div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="font-serif text-2xl text-[#5c5c5c] mb-6">Resumo do Pedido</h2>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-[#5c5c5c]">Plano Premium</span>
                <span className="font-medium text-[#5c5c5c]">R$ 297,00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[#5c5c5c]">E-book Decoração</span>
                <span className="font-medium text-[#5c5c5c]">R$ 47,00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[#5c5c5c]">Desconto</span>
                <span className="font-medium text-green-600">-R$ 50,00</span>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <span className="font-serif text-xl text-[#5c5c5c]">Total</span>
              <span className="font-serif text-xl text-[#cfa144]">R$ 294,00</span>
            </div>

            <div className="bg-[#f8f7f4] p-4 rounded-md mb-6">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#cfa144] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium text-[#5c5c5c]">Informações importantes</span>
              </div>
              <p className="text-sm text-[#8c8c8c]">
                Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à sua área de
                cliente.
              </p>
            </div>

            <div className="mb-8">
              <label htmlFor="coupon" className="block text-[#5c5c5c] mb-2 font-serif">
                Cupom de desconto
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="coupon"
                  className="flex-grow px-4 py-2 border border-[#e8e6e1] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="Digite seu cupom"
                />
                <button className="bg-[#cfa144] hover:bg-[#a08c4a] text-white px-4 py-2 rounded-r-md transition-colors">
                  Aplicar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-serif text-2xl text-[#5c5c5c] mb-6">Forma de Pagamento</h2>

            <div className="space-y-4 mb-8">
              <div className="border border-[#e8e6e1] rounded-md p-4 cursor-pointer hover:border-[#cfa144] transition-colors">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment-method"
                    className="h-4 w-4 text-[#cfa144] focus:ring-[#cfa144]"
                    defaultChecked
                  />
                  <label htmlFor="credit-card" className="ml-2 block text-[#5c5c5c] font-medium">
                    Cartão de Crédito
                  </label>
                  <div className="ml-auto flex space-x-2">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">VISA</span>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">MC</span>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">AMEX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#e8e6e1] rounded-md p-4 cursor-pointer hover:border-[#cfa144] transition-colors">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="pix"
                    name="payment-method"
                    className="h-4 w-4 text-[#cfa144] focus:ring-[#cfa144]"
                  />
                  <label htmlFor="pix" className="ml-2 block text-[#5c5c5c] font-medium">
                    PIX
                  </label>
                  <div className="ml-auto">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">PIX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#e8e6e1] rounded-md p-4 cursor-pointer hover:border-[#cfa144] transition-colors">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="boleto"
                    name="payment-method"
                    className="h-4 w-4 text-[#cfa144] focus:ring-[#cfa144]"
                  />
                  <label htmlFor="boleto" className="ml-2 block text-[#5c5c5c] font-medium">
                    Boleto Bancário
                  </label>
                  <div className="ml-auto">
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-xs">BOLETO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label htmlFor="card-number" className="block text-[#5c5c5c] mb-1 font-serif">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="0000 0000 0000 0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-[#5c5c5c] mb-1 font-serif">
                    Data de Validade
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-[#5c5c5c] mb-1 font-serif">
                    Código de Segurança (CVV)
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                    placeholder="123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="card-name" className="block text-[#5c5c5c] mb-1 font-serif">
                  Nome no Cartão
                </label>
                <input
                  type="text"
                  id="card-name"
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="Como está impresso no cartão"
                />
              </div>

              <div>
                <label htmlFor="installments" className="block text-[#5c5c5c] mb-1 font-serif">
                  Parcelamento
                </label>
                <select
                  id="installments"
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                >
                  <option value="1">À vista - R$ 294,00</option>
                  <option value="2">2x de R$ 147,00 sem juros</option>
                  <option value="3">3x de R$ 98,00 sem juros</option>
                  <option value="4">4x de R$ 73,50 sem juros</option>
                  <option value="5">5x de R$ 58,80 sem juros</option>
                  <option value="6">6x de R$ 49,00 sem juros</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
              <Link href="/planos" className="text-[#5c5c5c] hover:text-[#cfa144] transition-colors flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para planos
              </Link>
              <button className="bg-[#cfa144] hover:bg-[#a08c4a] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg">
                Finalizar Pagamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
