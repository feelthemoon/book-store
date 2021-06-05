//Routes and prefixes for requests
const mainPrefix = "api/v1/";
const adminPrefix = "api/v1/admin";
export default {
  login: "login",
  register: "register",
  books: `${mainPrefix}books`,
  bookById(id) {
    return `${this.books}/${id}`;
  },
  profile: `${mainPrefix}profile`,
};
