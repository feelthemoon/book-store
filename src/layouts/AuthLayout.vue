<template>
  <v-app>
    <nav class="navbar">
      <router-link to="/" class="logo">
        <img src="@/assets/img/logo.svg" alt="BookStore" />
        <span class="logo__text">BookStore</span>
      </router-link>
    </nav>
    <router-view></router-view>
  </v-app>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/_variables";
.navbar {
  background-color: $lightBlue;
  padding: 10px 12px;
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  &__text {
    margin-left: 10px;
    display: inline-block;
    font-size: 30px;
    line-height: 43px;
    color: $btnTextColor;
  }
}
</style>