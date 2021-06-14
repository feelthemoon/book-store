import api from "./api";
import routes from "./routes";

export default {
  //get user info
  async getInfo(token) {
    return await api.request(routes.profile, null, "get", token);
  },
  async changeInfo(token, data) {
    return await api.request(routes.profile, data, "put", token);
  },
  async uploadAvatar(token, avatar) {
    return await api.request(routes.profileAvatar, avatar, "put", token);
  },
  async deleteAvatar(token) {
    return await api.request(routes.profileAvatar, null, "delete", token);
  },
};
