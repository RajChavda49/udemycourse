import React from "react";

const List = ({ peoples }) => {
  return (
    <>
      {peoples.map((people) => {
        const { name, age, id, image } = people;
        return (
          <article
            key={id}
            className="p-3 d-flex justify-content-center align-items-center"
          >
            <img
              className="rounded-circle float-start my-auto"
              width="100"
              height="100"
              src={image}
              alt={name}
            />
            <div className="px-3">
              <h4 className="text-white">{name}</h4>
              <span
                className="text-info"
              >
                {age} Years
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
