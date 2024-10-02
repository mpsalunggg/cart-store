import { ref } from 'vue'
import type { Product } from '~/types'

export function useProduct() {
  const product = ref<Product[]>([])
  const loading = ref<boolean>(false)

  const fetchProduct = async (offset: number, limit: number) => {
    loading.value = true

    try {
      const response = await $fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      )
      product.value = response as Product[]
    } catch (err: any) {
      console.error(err.response ? err.response.data.message : err.message)
    } finally {
      loading.value = false
    }
  }

  return { product, loading, fetchProduct }
}

export function useDetailProduct() {
  const product = ref<Product | null>(null)
  const loading = ref<boolean>(false)

  const fetchDetailProduct = async (id: number) => {
    loading.value = true

    try {
      const response = await $fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      )
      product.value = response as Product
    } catch (err: any) {
      console.error(err.response ? err.response.data.message : err.message)
    } finally {
      loading.value = false
    }
  }

  return { product, loading, fetchDetailProduct }
}
