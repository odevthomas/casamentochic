type EmailData = {
  to: string
  subject: string
  body: string
  from?: string
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // Aqui você integraria com seu serviço de email
    console.log("Enviando email:", data)

    // Simulando um envio bem-sucedido
    return true
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return false
  }
}
