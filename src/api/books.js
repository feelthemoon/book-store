import api from "./api";
import routes from "./routes";
export default {
  getAll(token, page) {
    return api.request(routes.books, { page }, "get", token);
  },
  getOneById(token, id) {
    return api.request(routes.bookById(id), { id }, "get", token);
  },
};
