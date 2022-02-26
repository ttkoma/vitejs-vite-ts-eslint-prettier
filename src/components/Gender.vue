<script setup lang="ts">
  import { ref } from "vue";
  import { Genders } from "@api";

  const gender = ref(Genders.MAN);
</script>

<template>
  <p>Gender: {{ gender }}</p>
</template>
