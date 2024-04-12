import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://43.205.169.70:5000",
});

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json";

// TODO add interceptors

export default axios;
