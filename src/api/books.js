import api from "./api";
import routes from "./routes";
export default function(token, page) {
  return api.request(routes.books, { page }, "get", token);
}
