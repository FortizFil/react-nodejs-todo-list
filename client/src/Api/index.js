import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/todos";

export const fetchData = async () => {
  const res = await axios.get("/");
  return res.data.data;
};
