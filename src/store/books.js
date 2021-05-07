import { books as booksApi } from "@/api";

export default {
  state: {
    books: [],
    paginationLength: null,
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_PAGINATION_LENGTH(state, paginationLength) {
      state.paginationLength = paginationLength;
    },
  },
  actions: {
    async getBooks({ rootState, commit }, page) {
      try {
        const response = await booksApi(rootState.token, page);
        commit("SET_BOOKS", response.data.books);
        commit("SET_PAGINATION_LENGTH", response.data.paginationLength);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
