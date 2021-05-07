<template>
  <v-card
    @click="$router.push(`${$route.path}/${book.id}`)"
    class="mx-auto mb-2"
    height="100%"
    max-width="367"
    hover
  >
    <v-img
      class="align-end"
      height="200px"
      :src="`data:image/jpeg;base64,/${book.img}`"
    >
    </v-img>
    <v-card-title class="custom-card-title mb-2">{{ book.book }}</v-card-title>

    <v-card-subtitle class="pb-0"> {{ book.author }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="book-descr">
        <span> 8.5 </span>
        <img src="@/assets/img/star.svg" class="ml-1" alt="" />
      </div>

      <div class="book-descr">
        <span>{{ book.genre }}</span>
        <img src="@/assets/img/fantasy.svg" class="ml-1" alt="" />
      </div>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn color="#5DBAEE" text>
        <v-icon>mdi-cart-arrow-down</v-icon>
      </v-btn>

      <v-btn class="card__btn" color="#5DBAEE"> Купить в один клик </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    book: Object,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/_variables.scss";
.card__btn {
  span {
    color: $btnTextColor;
  }
}
.custom-card-title {
  font-size: 17px !important;
  word-break: break-word !important;
  line-height: 23px !important;
  font-weight: 600 !important;
}
</style>