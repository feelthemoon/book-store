import api from "./api";
import routes from "./routes";

export default {
  async login(data) {
    return await api.request(routes.login, data);
  },
  async register(data) {
    return await api.request(routes.register, data);
  },
};
