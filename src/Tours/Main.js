import React, { useEffect, useState } from "react";
import "./main.css";
import Tours from "./Tours";
const Main = () => {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    // const response = await fetch(url)
    // .then(res => res.json())
    // .then((json) => console.log(json))
    // .catch(err => console.log(err))
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn btn-lg-block btn-primary" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
};

export default Main;
