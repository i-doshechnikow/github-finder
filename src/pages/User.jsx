import React, { useContext, useEffect } from "react";
import { FaCode, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CLEAR_USER_LIST, getAllUserInfo, SET_ALL_USER_INFO, SET_LOADING } from "../components/context/github/GitHubActions";
import GithubContext from "../components/context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import ReposList from "../components/repos/ReposList";

export default () => {
  const { userId } = useParams();
  const {
    user,
    loading,
    repos,
    dispatch,
  } = useContext(GithubContext);

  const {
    login,
    avatar_url,
    html_url,
    type,
    name,
    blog,
    location,
    hireable,
    bio,
    public_repos,
    followers,
    following,
  } = user;

  useEffect(() => {
    dispatch(SET_LOADING);

    getAllUserInfo(userId).then((info) => {
      const [userData, repoData] = info;
      dispatch(SET_ALL_USER_INFO(userData.data, repoData.data))
    })

    dispatch(CLEAR_USER_LIST)
  }, [userId, dispatch]);

  if (loading) return <Spinner />;

  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost">
          Back to search
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="profile" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-0">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-info">Hireable</div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a
                className="btn btn-outline"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub
              </a>
            </div>
          </div>

          <div className="w-full rounded-lg shadow-md bg-base-100 stats">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="text-lg stat-value">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Blog</div>
                <div className="text-lg stat-value">
                  <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Followers</div>
          <div className="stat-value pr-5 text-3xl">{followers}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Following</div>
          <div className="stat-value pr-5 text-3xl">{following}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCode className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value pr-5 text-3xl">{public_repos}</div>
        </div>
      </div>

      <ReposList repos={repos} />
    </div>
  );
};
