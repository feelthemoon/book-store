import { books as booksApi } from "@/api";

export default {
  state: {
    books: [],
    product: {},
    paginationLength: null,
  },
  mutations: {
    //Mutations for changing state
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_PAGINATION_LENGTH(state, paginationLength) {
      state.paginationLength = paginationLength;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
  },
  actions: {
    //Actions for getting all books and book by id
    async getBooks({ rootState, commit }, page) {
      try {
        const response = await booksApi.getAll(rootState.token, page);
        commit("SET_BOOKS", response.data.books);
        commit("SET_PAGINATION_LENGTH", response.data.paginationLength);
      } catch (error) {
        console.log(error);
      }
    },
    async getProduct({ commit, rootState }, id) {
      try {
        const response = await booksApi.getOneById(rootState.token, id);
        commit("SET_PRODUCT", response.data);
      } catch (error) {}
    },
  },
};
