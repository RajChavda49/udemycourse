import React, { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article
      className="single-tour mt-4  p-auto  shadow-sm p-3 mb-5 bg-light rounded "
      key={id}
    >
      <div className="text-center p-4 ">
        <img
          src={image}
          width="400"
          className="rounded"
          height="200"
          alt={name}
        />
      </div>
      <footer>
        <div className="tour-info d-flex  justify-content-between mb-4 ">
          <h4>{name}</h4>
          <h4 className="  tour-price text-info ">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button
            className="mx-1 btn btn-block btn-sm btn-info"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className="text-center">
          <button
            className="btn btn-block btn-outline-danger"
            onClick={() => removeTour(id)}
          >
            Not Intrested!
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
