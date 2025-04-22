export type PaymentMethod = "credit_card" | "pix" | "boleto" | "hotmart" | "stripe"

export type PaymentStatus = "pending" | "processing" | "completed" | "failed" | "refunded"

export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: PaymentStatus
  paymentMethod: PaymentMethod
  createdAt: Date
  updatedAt: Date
  metadata?: Record<string, any>
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  features: string[]
  image?: string
  popular?: boolean
}

export interface PaymentError {
  code: string
  message: string
  details?: Record<string, any>
}

export interface CustomerInfo {
  name: string
  email: string
  phone?: string
  address?: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}
