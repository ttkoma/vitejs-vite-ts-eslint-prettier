<script lang="ts">
  import Vue from "vue";
  // This starter template is using Vue 2 <script lang="ts"> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import HelloWorld from "@/components/HelloWorld.vue";

  import Gender from "@/components/Gender.vue";

  export default Vue.extend({
    components: {
      HelloWorld,
      Gender,
    },
  });
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Gender />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
