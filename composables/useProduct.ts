import axios from 'axios'
import { ref } from 'vue'
import type { Product } from '~/types'

export function useProduct() {
  const product = ref<Product[]>([])
  const loading = ref<boolean>(false)

  const fetchProduct = async (offset: number, limit: number) => {
    loading.value = true

    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      )
      product.value = response.data
    } catch (err: any) {
      console.log(err.response ? err.response.data.message : err.message)
    } finally {
      loading.value = false
    }
  }

  return { product, loading, fetchProduct }
}
