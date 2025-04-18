export default function PaymentMethods() {
  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "MasterCard", icon: "💳" },
    { name: "American Express", icon: "💳" },
    { name: "PayPal", icon: "💰" },
    { name: "Mercado Pago", icon: "💰" },
    { name: "Pix", icon: "✨" },
    { name: "Hotmart", icon: "🔥" },
  ]
a
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {paymentMethods.map((method, index) => (
        <div key={index} className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
          <span className="mr-2 text-xl">{method.icon}</span>
          <span className="font-serif text-[#5c5c5c]">{method.name}</span>
        </div>
      ))}
    </div>
  )
}
