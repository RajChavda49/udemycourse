import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./main.css";
const Main = () => {
  const [peoples, setPeoples] = useState(data);
  return (
    <main>
      <section className="bg-dark  main  mx-auto">
        <h3 className="p-3 text-danger">{peoples.length} Birthday Todays</h3>
        <List peoples={peoples} />
        <button
          className="btn btn-primary btn-block btn-md button m-2"
          onClick={() => setPeoples([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};

export default Main;
