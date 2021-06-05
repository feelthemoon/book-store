import api from "./api";
import routes from "./routes";
export default {
  //methods for getting all books and get some book by id
  getAll(token, page) {
    return api.request(routes.books, { page }, "get", token);
  },
  getOneById(token, id) {
    return api.request(routes.bookById(id), { id }, "get", token);
  },
};
