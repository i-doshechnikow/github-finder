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


  return <div className="w-full mx-auto lg:w-10/12">
    <div className="mb-4">
      <Link to='/' className="btn btn-ghost">
        Back to search
      </Link>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
      <div className="custom-card-image mb-6 md:mb-0">
        <div className="rounded-lg shadow-xl card image-full">
          <figure>
            <img src={avatar_url} alt='profile photo' />
          </figure>
          <div className="card-body justify-end">
            <h2 className="card-title mb-0">
              {name}
            </h2>
            <p>{login}</p>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <div className="mb-6">
          <h1 className="text-3xl card-title">
            {name}
            <div className="ml-2 mr-1 badge badge-success">
              {type}
            </div>
            {hireable && (<div className="mx-1 badge badge-info">
              Hireable
            </div>)}
          </h1>
          <p>{bio}</p>
          <div className="mt-4 card-actions">
            <a className="btn btn-outline" href={html_url} target='_blank' rel="noreferrer">
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
