import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/todos";

export const fetchData = async () => {
  const res = await axios.get("/");
  return res.data.data;
};

export const addTodo = async (variables) => {
  const res = await axios.post("/", {
    name: variables.name,
    description: variables.description,
    status: variables.status,
  });
  return res.data;
};

export const changeTodo = async (variables, currentTodo) => {
  const res = await axios.put(`/${currentTodo._id}`, {
    name: variables.name,
    description: variables.description,
    status: variables.status,
  });
  return res.data;
};

export const removeTodo = async (currentTodo) => {
  const res = await axios.delete(`/${currentTodo._id}`);
  return res.data;
};
