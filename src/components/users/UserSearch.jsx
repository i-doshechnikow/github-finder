import { useState, useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import {
  CLEAR_USER_LIST,
  searchUser,
  SET_LOADING,
  SET_USERS,
} from "../context/github/GitHubActions";
import GithubContext from "../context/github/GithubContext";

export default () => {
  const [inputText, setInputText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { isAlert, message, type, setAlert } = useContext(AlertContext);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (inputText) {
      dispatch(SET_LOADING);

      const usersData = await searchUser(inputText);

      dispatch(SET_USERS(usersData));
    } else {
      setAlert("Input is empty, enter something", "Error");
    }
    setInputText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mb-8 gap-8">
      <div>
        {isAlert && (
          <div className="mb-1">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              {type}
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{message}</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSearch}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="search..."
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 h-full btn btn-large"
              >
                go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <button className="btn btn-ghost btn-lg" onClick={() => {
          dispatch(CLEAR_USER_LIST)
        }
        }>
          Clear
        </button>
      )}
    </div>
  );
};
