import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://13.201.71.135:5000",
});

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json";

// TODO add interceptors

export default axios;
