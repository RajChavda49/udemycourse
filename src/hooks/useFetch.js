import { useEffect, useState } from "react";

const url = "";
const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

export default useFetch;
