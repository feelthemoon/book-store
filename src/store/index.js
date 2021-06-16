import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import books from "./books";
import profile from "./profile";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("auth") || null,
    responseErrors: {},
    validationErrors: {
      invalidEmail: "Некорректный email",
      required: "Это обязательное поле",
      invalidMinLength: "Минимальная длина пароля 8",
      invalidPasswordConfirmation: "Пароли не совпадают",
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem("auth", token);
    },
    SET_ERROR(state, error) {
      state.responseErrors = { ...state.responseErrors, ...error };
    },
    RESET_ERROR(state) {
      state.responseErrors = {};
    },
  },
  actions: {},
  modules: {
    auth,
    books,
    profile,
  },
});
