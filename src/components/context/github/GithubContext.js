import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GUTHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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
        Authorization: `token ${GUTHUB_TOKEN}`,
      },
    });

    const answer = await res.json();

    dispatch({
      type: "SET_USERS",
      payload: answer,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
