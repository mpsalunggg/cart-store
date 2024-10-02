<template>
  <v-container class="flex flex-col gap-2">
    <h1 class="text-md">Cari Produk</h1>
    <Search class="border border-gray-200 px-2 pt-0 pb-2 rounded-md italic" />
    <div v-if="loading" class="flex justify-center h-24">
      <v-progress-circular color="green" indeterminate></v-progress-circular>
    </div>
    <v-row v-else class="mt-4">
      <v-col v-for="(data, index) in product" :key="index" cols="12" sm="4">
        <v-card>
          <v-img :src="data?.images[0]" v-if="data?.images.length > 0"></v-img>
          <v-card-title>{{ data?.title }}</v-card-title>
          <v-card-subtitle class="pb-2">
            <div>
              <p class="text-2xl text-green-500 font-bold">${{ data?.price }}</p>
              <p class="text-md line-through">${{ data?.price + 20 }}</p>
            </div>
          </v-card-subtitle>
          <div class="flex items-center px-4">
            <StarIcon v-for="star in 5" :key="star" class="h-4 w-4 text-yellow-500" />
            <p class="text-gray-500 text-sm">(213)</p>
          </div>
          <v-card-actions>
            <button
              class="bg-green-500 text-white w-full rounded-md py-2"
              @click="redirect(data?.id)"
            >
              BELI
            </button>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-pagination v-model="page" :length="5" class="mt-4" :disabled="loading" />
  </v-container>
</template>

<script lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useProduct } from "../../composables/useProduct";

export default defineComponent({
  components: {
    StarIcon,
  },
  setup() {
    const router = useRouter();
    const { product, loading, fetchProduct } = useProduct();
    const page = ref(1);
    const itemsPerPage = 6;
    const totalPages = 5;

    watch(page, async () => {
      await fetchProducts();
    });

    const fetchProducts = async () => {
      const offset = (page.value - 1) * itemsPerPage;
      await fetchProduct(offset, itemsPerPage);
    };

    const redirect = (id: number) => {
      router.push({ name: "detail-id", params: { id } });
    };

    fetchProducts();
    return { product, loading, page, fetchProducts, totalPages, redirect };
  },
});
</script>
