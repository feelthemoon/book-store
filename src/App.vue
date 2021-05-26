<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import OrderEnd from "./views/OrderEnd.vue";
export default {
  components: {
    AuthLayout,
    OrderEnd,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>
