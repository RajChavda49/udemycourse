import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
const Question = ({ id, title, info }) => {
  const [information, setInformation] = useState(false);
  return (
    <article key={id} className="shadow-sm bg-light text-dark my-3">
      <header className="d-flex justify-content-between">
        <h3>{title}</h3>
        <button
          className="btn rounded-circle btn-light btn-sm"
          onClick={() => setInformation(!information)}
        >
          {information ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
        <p>{information ? info : null}</p>
    </article>
  );
};

export default Question;
