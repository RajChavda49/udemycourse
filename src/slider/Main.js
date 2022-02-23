import React, { useState } from "react";
import data from "./data";
import './main.css'
const Main = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>{" "}
      <div className="section-center"></div>
      {people.map((person, personIndex) => {
        const { id, image, title, name, quote } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
          </article>
        );
      })}
    </section>
  );
};

export default Main;
