<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
export default {
  components: {
    AuthLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>

