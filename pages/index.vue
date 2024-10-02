<template>
  <v-container>
    <v-container class="py-8">
      <v-row class="h-[450px]">
        <v-col cols="12" sm="7" class="flex justify-center items-center h-full">
          <div
            class="bg-gray-100 w-full h-full flex items-center justify-center rounded-lg shadow-lg"
          >
            <p v-if="loading">Loading...</p>
            <div v-else class="space-y-4 flex flex-col items-center">
              <p class="text-2xl font-bold">REKOMENDASI PRODUCT TERBARU</p>
              <div class="flex gap-4">
                <img
                  :src="product[5].images[0]"
                  alt="Product Image"
                  class="w-60 h-auto rounded-lg"
                />
                <div class="space-y-4">
                  <p class="text-2xl font-bold">{{ product[5].title }}</p>
                  <div class="flex gap-4">
                    <div>
                      <p class="text-gray-400">Author</p>
                      <p>Buku Bagus</p>
                    </div>
                    <div>
                      <p class="text-gray-400">Program</p>
                      <p>TPA</p>
                    </div>
                  </div>
                  <div>
                    <p class="text-2xl text-green-500 font-bold">
                      ${{ product[5].price }}
                    </p>
                    <p class="text-md line-through">${{ product[5].price + 20 }}</p>
                  </div>
                  <button class="bg-green-500 text-white py-4 px-8 rounded-md">
                    BELI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="11" sm="5" class="h-full">
          <v-row class="h-[450px]">
            <v-col cols="12" class="flex justify-center items-center h-1/2">
              <v-container
                class="relative bg-green-400 w-full h-full text-white rounded-lg p-4 shadow-lg flex flex-col justify-center gap-2"
              >
                <h1 class="text-lg font-bold">LOREM IPSUM BANNER</h1>
                <p class="text-sm z-50 w-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius urna,
                  viverra porttitor odio tellus gravida adipiscing massa sagittis.
                </p>
                <div>
                  <ReadmoreBtn />
                </div>
                <v-img
                  src="@/public/image/1.png"
                  alt="Logo"
                  class="position-absolute bottom-0 right-0 w-32 m-4"
                ></v-img>
              </v-container>
            </v-col>
            <v-col cols="12" class="flex justify-center items-center h-1/2">
              <v-container
                class="position-relative bg-slate-700 w-full h-full text-white rounded-lg p-4 shadow-lg flex flex-col justify-center gap-2"
              >
                <h1 class="text-lg font-bold">LOREM IPSUM BANNER</h1>
                <p class="text-sm z-50 w-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius urna,
                  viverra porttitor odio tellus gravida adipiscing massa sagittis.
                </p>
                <div>
                  <ReadmoreBtn />
                </div>
                <v-img
                  src="@/public/image/1.png"
                  alt="Logo"
                  class="position-absolute bottom-0 right-0 w-32 m-4"
                ></v-img>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { product, error, loading } = useFavoriteProduct();
    return { product, error, loading };
  },
});
</script>
