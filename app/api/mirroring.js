import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const mirroring = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>test</h1>
      <img src={data[0].image} alt="" />
    </main>
  );
};

export default mirroring;
