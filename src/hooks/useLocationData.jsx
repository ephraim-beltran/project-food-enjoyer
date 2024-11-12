import { fetchLocations } from "../api/location-data-fetcher";
import { useEffect, useState } from "react";

export function useLocationData() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setStatus("loading");
      const response = await fetchLocations();
      if (data == "error") {
        setStatus("error");
      } else {
        setStatus("completed");
        setData(response);
      }
    }
    fetchData();
  }, []);
  return { status, data };
}
