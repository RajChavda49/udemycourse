import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import spinner from "../images/Spinner-1s-200px.png";
import load from "../images/Walk.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { loading } = useContext(GithubContext);
  if (loading) {
    return (
      <main className="text-center">
        <Navbar />
        <Search />
        <img
          src={spinner}
          alt="loading..."
          loading="lazy"
          className="loading-img"
        />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
