import React, { useContext, useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import GithubContext from "../components/context/github/GithubContext";
import Spinner from "../components/layout/Spinner";

export default () => {
  const { userId } = useParams();
  const { getSingleUserInfo, getSingleUserRepo, clearSearchList, user, loading } =
    useContext(GithubContext);

  useEffect(() => {
    getSingleUserInfo(userId);
    // getSingleUserRepo(userId);

    clearSearchList()
  }, []);

  const {
    login,
    id,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
  } = user

  if (loading) return <Spinner />;


  return <div>user {user && user.login}</div>;
};
