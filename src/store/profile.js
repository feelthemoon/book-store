import { profile as profileApi } from "@/api";

export default {
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SET_USER_AVATAR(state, avatar) {
      state.userInfo.avatar = avatar;
    },
  },
  actions: {
    async getUserInfo({ commit, rootState }) {
      try {
        const response = await profileApi.getInfo(rootState.token);
        commit("SET_USER_INFO", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async changeProfile({ commit, rootState }, userData) {
      try {
        const response = await profileApi.changeInfo(rootState.token, userData);
        commit("SET_USER_INFO", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async uploadAvatar({ commit, rootState }, avatar) {
      try {
        const response = await profileApi.uploadAvatar(rootState.token, avatar);
        commit("SET_USER_AVATAR", response.data.avatar);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProfileAvatar({ commit, rootState }) {
      try {
        const response = await profileApi.deleteAvatar(rootState.token);
        commit("SET_USER_AVATAR", response.data.avatar);
      } catch (error) {}
    },
  },
};
