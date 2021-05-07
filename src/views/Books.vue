<template>
  <v-container tag="main" class="mt-3">
    <v-row align-content="space-between">
      <v-col v-for="book in books" :key="book.id">
        <book-card :book="book"></book-card>
      </v-col>
    </v-row>
    <v-pagination
      class="mt-5"
      v-model="page"
      :length="paginationLength"
      total-visible="6"
      circle
      @input="updateBooks"
    ></v-pagination>
  </v-container>
</template>
<script>
import BookCard from "@/components/BookCard.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      page: 1,
    };
  },
  beforeRouteEnter(_, __, next) {
    next(async (vm) => {
      await vm.updateBooks();
    });
  },
  components: {
    BookCard,
  },
  computed: {
    ...mapState({
      books: (state) => state.books.books,
      paginationLength: (state) => state.books.paginationLength,
    }),
  },
  methods: {
    async updateBooks() {
      try {
        await this.getBooks(this.page);
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(["getBooks"]),
  },
};
</script>
<style lang="scss" scoped>
</style>