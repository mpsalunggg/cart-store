<template>
  <v-container>
    <div v-for="(item, index) in data" :key="index">
      <h1 class="text-2xl">{{ item.key }}</h1>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(sub, subindex) in item.data"
            :key="subindex"
            density="compact"
          >
            <v-list-item-content class="flex justify-between items-center w-full">
              <v-checkbox
                v-model="selected"
                color="success"
                :label="sub.title"
                :value="sub.title"
                hide-details
                class="m-0"
              ></v-checkbox>
              <p>{{ sub.amount }}</p>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { FILTER_DATA } from "~/data";

export default defineComponent({
  setup() {
    const selected = ref<string[]>(["SMP"]);
    return { data: FILTER_DATA, selected };
  },
});
</script>

<style>
.v-list-item {
  padding: 0 !important;
}

[id^="checkbox-"] {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
