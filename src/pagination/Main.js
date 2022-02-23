import React, { useEffect, useState } from "react";
import Follower from "./Follower";
import useFetch from "./useFetch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./main.css";
const Main = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  console.log(followers);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextpage = oldPage + 1;
      if (nextpage > data.length - 1) {
        nextpage = 0;
      }
      return nextpage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevpage = oldPage - 1;
      if (prevpage < 0) {
        prevpage = data.length - 1;
      }
      return prevpage;
    });
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {/* {loading ? null : <div className="btn-container">hello</div>} */}
        {!loading && (
          <div className="btn-container">
            <button className="btn btn-lg-block btn-primary" onClick={prevPage}>
              <FaArrowLeft />
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className=" btn btn-block  btn-primary " onClick={nextPage}>
              <FaArrowRight />
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
