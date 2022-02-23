import React from "react";
import Review from "./Review";
// import './main.css'
const Main = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div>
            <hr />
          </div>
        </div>
        <Review />
      </section>{" "}
    </main>
  );
};

export default Main;
