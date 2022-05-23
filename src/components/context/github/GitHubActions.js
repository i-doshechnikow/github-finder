const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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
  const res = await fetch(`${GITHUB_URL}/users/${name}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (res.status === 404) {
    window.location = "/notfound";
    return;
  }

  return await res.json();
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

  const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  return await res.json();
};

export const searchUser = async (name) => {
  const URL_PARAMS = new URLSearchParams({
    q: name,
  });

  const res = await fetch(`${GITHUB_URL}/search/users?${URL_PARAMS}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await res.json();

  return items;
};
