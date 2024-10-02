<template>
  <v-container>
    <v-progress-circular v-if="loading" color="green" indeterminate></v-progress-circular>
    <div v-else>
      <v-breadcrumbs :items="breadcrumbs" divider="/" color="green"></v-breadcrumbs>
      <div class="mt-4 flex gap-6">
        <div>
          <v-img :src="product?.images[0]" class="w-96 rounded-lg"></v-img>
        </div>
        <div class="space-y-6">
          <h1 class="text-2xl font-bold">{{ product?.title }}</h1>
          <div class="flex items-center">
            <StarIcon v-for="index in 5" :key="index" class="h-6 w-6 text-yellow-500" />
            <p class="text-gray-500 text-md">(213)</p>
          </div>
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
            <h1 class="text-md text-gray-400">Harga</h1>
            <p class="text-2xl text-green-500 font-bold">${{ product?.price }}</p>
            <p class="text-md line-through">${{ Number(product?.price) + 20 }}</p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { watch, ref, defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    StarIcon,
  },
  setup() {
    const route = useRoute();
    const { loading, product, fetchDetailProduct } = useDetailProduct();
    const productId = ref(route.params.id);

    watch(
      () => route.params.id,
      async (newId) => {
        productId.value = newId;
        await fetchDetailProduct(Number(newId));
      },
      { immediate: true }
    );

    const breadcrumbs = computed(() => [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: product.value?.title || "Detail",
        disabled: true,
      },
    ]);

    console.log("product", product.value);
    return {
      productId,
      loading,
      product,
      breadcrumbs,
    };
  },
});
</script>

<style>
.v-breadcrumbs {
  padding: 0 !important;
}
</style>
