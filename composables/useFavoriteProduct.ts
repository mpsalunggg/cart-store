import axios from 'axios'
import { ref } from 'vue'
import type { Product } from '~/types'

export function useFavoriteProduct() {
  const product = ref<Product[]>([])
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)

  const fetchProduct = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/`
      )
      product.value = response.data
    } catch (err: any) {
      error.value = err.response ? err.response.data.message : err.message
    } finally {
      loading.value = false
    }
  }
  fetchProduct()
  return { product, error, loading }
}
