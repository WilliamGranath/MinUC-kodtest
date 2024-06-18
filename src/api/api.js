import axios from "axios";

const apiClient = axios.create({
  baseURL: "/frontendapi",
  headers: {
    Accept: "application/json",
  },
});

export const getMenu = () => {
  return apiClient.get("/getmenu");
};

export const getContent = () => {
  return apiClient.get("/forlustanmalan?expand=*");
};
