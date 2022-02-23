import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title text-info text-center">
        <h2>Ours Tours</h2>
        <hr />
        <div className="underline">
          <u />
        </div>
      </div>
      <div className="m-5 d-flex justify-content-center flex-column">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
