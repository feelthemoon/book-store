import axios from "axios";

const host = process.env.VUE_APP_API_URL;
export default {
  async request(url, data = {}, method = "post", token = null) {
    const requestHeaders = {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Cache-Control": "no-cache",
    };
    if (token) {
      requestHeaders["Authorization"] = token;
    }
    const req = {
      method,
      url: host + url,
      headers: requestHeaders,
    };
    if (method === "get") {
      req.params = data;
    } else {
      req.data = data;
    }
    try {
      return await axios(req);
    } catch (error) {
      throw error;
    }
  },
};
