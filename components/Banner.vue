<template>
  <v-container>
    <v-container class="py-8">
      <v-row class="lg:h-[450px] h-auto">
        <v-col cols="12" sm="7" class="flex justify-center items-center min-h-full">
          <div
            class="bg-gray-100 w-full h-full flex items-center justify-center rounded-lg shadow-lg p-4"
          >
            <p v-if="loading">Loading...</p>
            <div v-else class="space-y-4 flex flex-col items-center">
              <p class="lg:text-2xl text-xl text-center font-bold">
                REKOMENDASI PRODUCT TERBARU
              </p>
              <div class="flex lg:flex-row flex-col items-center gap-4">
                <img
                  :src="product[0]?.images[0]"
                  alt="Product Image"
                  class="w-60 h-auto rounded-lg"
                />
                <div class="space-y-2">
                  <p class="text-2xl font-bold">{{ product[0]?.title }}</p>
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
                      ${{ product[0]?.price }}
                    </p>
                    <p class="text-md line-through">${{ product[0]?.price + 20 }}</p>
                  </div>
                  <div class="flex items-center">
                    <StarIcon
                      v-for="index in 5"
                      :key="index"
                      class="h-4 w-4 text-yellow-500"
                    />
                    <p class="text-gray-500 text-sm">(213)</p>
                  </div>
                  <button class="bg-green-500 text-white py-2 px-12 rounded-md">
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
import { StarIcon } from "@heroicons/vue/24/solid";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    StarIcon,
  },
  setup() {
    const { product, loading, fetchProduct } = useProduct();
    const fetchProducts = async () => {
      const offset = 0;
      await fetchProduct(offset, 1);
    };

    fetchProducts();
    return { product, loading };
  },
});
</script>
