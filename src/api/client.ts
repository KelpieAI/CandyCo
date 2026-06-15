import type { Product } from '@shared/products'
import { DROP_META } from '@shared/products'

const API_BASE = '/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  })

  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error(body.error ?? `Request failed (${response.status})`)
  }

  return response.json() as Promise<T>
}

export interface DropResponse {
  drop: typeof DROP_META
  products: Product[]
}

export interface ProductsResponse {
  products: Product[]
}

export interface ProductResponse {
  product: Product
}

export interface WholesalePayload {
  businessName: string
  contactName: string
  email: string
  phone?: string
  message: string
}

export interface WholesaleResponse {
  success: boolean
  inquiry: { id: string; createdAt: string }
}

export const api = {
  getDrop: () => request<DropResponse>('/drop'),
  getProducts: () => request<ProductsResponse>('/products'),
  getProduct: (slug: string) => request<ProductResponse>(`/products/${slug}`),
  submitWholesale: (payload: WholesalePayload) =>
    request<WholesaleResponse>('/wholesale', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
