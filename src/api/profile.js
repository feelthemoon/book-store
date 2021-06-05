import api from "./api";
import routes from "./routes";

export default {
  //get user info
  getInfo(token) {
    return api.request(routes.profile, null, "get", token);
  },
};
