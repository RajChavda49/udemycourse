import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockdata/mockUser";
import mockRepos from "./mockdata/mockRepos";
import mockFollower from "./mockdata/mockFollower";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  // global states
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [follower, setFollower] = useState(mockFollower);

  //request loading
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      await axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(
        (response) => {
          setRepos(response.data);
        }
      );
      await axios(`${followers_url}?per_page=100`).then((response) => {
        setFollower(response.data);
      }); 
      // await Promise.allSettled
    } else {
      toggleError(true, "there is no user with that username");
    }
    setLoading(false);
  };
  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exeeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }
  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        error,
        repos,
        follower,
        requests,
        searchGithubUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
