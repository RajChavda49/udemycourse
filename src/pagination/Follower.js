import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article>
      <div className="card">
        <div className=" text-center">
          <img src={avatar_url} alt={login} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a
            href={html_url}
            target="_blank"
            className="btn btn-primary btn-lg-block"
          >
            view profile
          </a>
        </div>
      </div>
    </article>
  );
};

export default Follower;
