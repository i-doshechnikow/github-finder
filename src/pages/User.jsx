import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../components/context/github/GithubContext";

export default () => {
  const { userId } = useParams();
  const { getSingleUserInfo, getSingleUserRepo, user } =
    useContext(GithubContext);

  useEffect(() => {
    // getSingleUserInfo(userId);
    // getSingleUserRepo(userId);
  }, []);

  return <div>user {user && user.id}</div>;
};
