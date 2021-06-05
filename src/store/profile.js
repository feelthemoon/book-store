import { profile as profileApi } from "@/api";

export default {
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    async getUserInfo({ commit, rootState }) {
      try {
        const response = await profileApi.getInfo(rootState.token);
        console.log(response);
      } catch (error) {}
    },
  },
};
