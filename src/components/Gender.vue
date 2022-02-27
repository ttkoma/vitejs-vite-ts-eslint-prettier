<script lang="ts">
  import Vue from "vue";
  import { Genders } from "@api";

  export default Vue.extend({
    data: () => ({
      gender: Genders.MAN as string,
    }),
  });
</script>

<template>
  <p>Gender: {{ gender }}</p>
</template>
