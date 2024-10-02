<template>
  <v-container>
    <v-text-field
      variant="plain"
      density="compact"
      append-inner-icon="mdi-magnify"
      hide-details
      placeholder="Search .."
      :class="class"
    ></v-text-field>
  </v-container>
</template>

<script lang="ts">
import { defineProps } from "vue";

defineProps<{
  class: string;
}>();
</script>
