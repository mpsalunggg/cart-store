<template>
  <div class="border-b border-gray-200">
    <v-container class="flex justify-between items-center py-2">
      <v-container>
        <v-img src="@/public/image/logo.png" alt="Logo" class="w-12"></v-img>
      </v-container>
      <Search class="border border-gray-200 px-2 pt-0 pb-2 rounded-md italic w-[500px]" />
      <v-container class="text-right">
        <p class="text-gray-500 text-sm font-bold">
          <span class="text-green-500">SIGN IN</span> |
          <span class="text-gray-800">SIGN UP</span>
        </p>
      </v-container>
    </v-container>
  </div>
  <div class="border-b border-gray-200 shadow-lg">
    <v-container class="py-0">
      <v-list>
        <v-list-item-group class="flex justify-between">
          <v-list-item v-for="(menuItem, index) in menuItems" :key="index">
            <v-list-item-content>
              <v-list-item-title :class="{ 'text-green-500': menuItem === 'HOME' }"
                ><p class="font-bold">{{ menuItem }}</p></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      menuItems: [
        "HOME",
        "TENTANG KAMI",
        "PRODUK KAMI",
        "E-STORE",
        "JADWAL BIMBEL OFFLINE",
        "BLOG",
        "FAQ",
        "CONTACTS US",
      ],
    };
  },
});
</script>
