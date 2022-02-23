import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review cotnainer-fluid p-4 bg-light text-dark">
      <div className="img-container text-center">
        <img
          src={image}
          alt={name}
          width="200"
          heigh="auto"
          loading="lazy"
          className="rounded-circle"
        />
      </div>
      <h4 className="author text-center">{name}</h4>
      <p className="job text-center">{job}</p>
      <p className="info text-center">{text}</p>
      <div className="button-container text-center">
        <button
          className="prev-btn btn btn-sm btn-outline-info "
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className="prev-btn btn btn-sm btn-outline-info mx-2"
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="text-center">
        <button
          className="random-btn m-2 btn btn-sm btn-outline-primary"
          onClick={randomPerson}
        >
          Surprise ME!
        </button>
      </div>
    </article>
  );
};

export default Review;
