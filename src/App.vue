<template>
  <div>
    <!-- <component :is="layout"></component> -->
    <user-profile></user-profile>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import OrderEnd from "./views/OrderEnd.vue";
import UserProfile from './views/UserProfile.vue';
export default {
  components: {
    AuthLayout,
    OrderEnd,
    UserProfile,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>
