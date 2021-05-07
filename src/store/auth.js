import { auth } from "@/api";
export default {
  actions: {
    async loginUser({ commit }, data) {
      try {
        const response = await auth.login(data);
        commit("SET_TOKEN", response.headers.authorization);
      } catch (error) {
        commit("SET_ERROR", error.response.data);
      }
    },
    async registerUser({ commit }, data) {
      try {
        const response = await auth.register(data);
        commit("SET_TOKEN", response.headers.authorization);
      } catch (error) {
        commit("SET_ERROR", error.response.data);
      }
    },
  },
};
