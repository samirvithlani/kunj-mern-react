//hook --> use start...

import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchApi = (url) => {
    
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const getApiCall = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(url);
      setdata(res.data);
      setisLoading(false);
    } catch (err) {
      seterror(err);
    }
  };

  useEffect(() => {
    getApiCall();
  }, []);

  return { data, isLoading, error };
};
