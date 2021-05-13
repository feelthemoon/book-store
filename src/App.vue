<template>
  <div>
    <component :is="layout"></component>
    <!-- <product-page></product-page> -->
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import ProductPage from './views/ProductPage.vue';
export default {
  components: {
    AuthLayout,
    ProductPage
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
