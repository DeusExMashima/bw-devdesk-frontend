import axios from "axios";

export const axiosWithAuth = () => {

  const token: string | null = localStorage.getItem("token");
  
  return axios.create({
    baseURL: "https://salty-hacker-news.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
  
};

