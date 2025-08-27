import { useState } from "react";

export default function useFetch(apiFunc) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    setLoading(true);
    const result = await apiFunc(param);
    setData(result);
    setLoading(false);
  };

  return { data, loading, fetchData };
}
