import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    dispatch({
      type: "SET_LOADING_TRUE",
    });

    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const answer = await res.json();

    dispatch({
      type: "SET_USERS",
      payload: answer,
    });
  };

  const searchUser = async (name) => {
    dispatch({
      type: "SET_LOADING_TRUE",
    });

    const URL_PARAMS = new URLSearchParams({
      q: name,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${URL_PARAMS}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();

    dispatch({
      type: "SET_USERS",
      payload: items,
    });
  };

  const clearSearchList = () => {
    dispatch({
      type: "CLEAR_USER_LIST",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUser,
        clearSearchList,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
