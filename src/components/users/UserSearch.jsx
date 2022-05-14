import { useState, useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";

export default (props) => {
  const [inputText, setInputText] = useState("");

  const { users, searchUser, clearSearchList } = useContext(GithubContext);

  const handleSearch = (event) => {
    event.preventDefault();

    if (inputText) {
      searchUser(inputText);
    }
    setInputText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mb-8 gap-8">
      <div>
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
        <button className="btn btn-ghost btn-lg" onClick={clearSearchList}>
          Clear
        </button>
      )}
    </div>
  );
};
