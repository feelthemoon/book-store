<template>
  <div>
    <!-- <component :is="layout"></component> -->
    <payment></payment>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import Payment from './views/Payment.vue';
export default {
  components: {
    AuthLayout,
    Payment
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>

