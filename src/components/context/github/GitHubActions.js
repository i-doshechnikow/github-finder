const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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
