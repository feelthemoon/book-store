<template>
  <div>
    <!-- <component :is="layout"></component> -->
    <enter-order-info></enter-order-info>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import EnterOrderInfo from './views/EnterOrderInfo.vue';
export default {
  components: {
    AuthLayout,
    EnterOrderInfo
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>
