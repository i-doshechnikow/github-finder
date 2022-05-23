import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const instance = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const SET_LOADING = () => {
  return {
    type: "SET_LOADING_TRUE",
  };
};

export const SET_USERS = (users) => {
  return {
    type: "SET_USERS",
    payload: users,
  };
};

export const CLEAR_USER_LIST = {
  type: "CLEAR_USER_LIST",
};

export const SET_USER = (info) => {
  return {
    type: "SET_USER",
    payload: info,
  }
}

export const getSingleUserInfo = async (name) => {
  const { status, data } = await instance(`/users/${name}`,);

  if (status === 404) {
    window.location = "/notfound";
    return;
  }

  return data;
};

export const SET_REPOS = (answer) => {
  return {
    type: "SET_REPOS",
    payload: answer,
  }
}

export const fetchRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const { data } = await instance(`/users/${login}/repos?${params}`);

  return data;
};

export const searchUser = async (name) => {
  const URL_PARAMS = new URLSearchParams({
    q: name,
  });

  const result = await instance(`/search/users?${URL_PARAMS}`)

  const { data: { items } } = result;

  return items;
};
