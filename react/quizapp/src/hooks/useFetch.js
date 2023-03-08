import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const resJson = await res.json();

      setData(resJson);
      setIsLoading(false);
    } catch (err) {
      setError("An error happened");
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data: data, error: error, isLoading: isLoading };
}
