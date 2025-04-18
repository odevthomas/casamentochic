import { MessageCircle } from "lucide-react"

export default function WhatsappButton() {
  // Use a valid WhatsApp URL
  const whatsappUrl = "https://wa.me/5511999999999"

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
