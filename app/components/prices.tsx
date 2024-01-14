import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Prices = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(5);
  const maxLimit = 10;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets", {
          params: {
            limit: limit,
          },
        });

        const data = response.data;
        console.log(data);

        // Set your state if needed
        setCoins(data.data);
        // Assuming the data you need is in the 'data' property of the response
        if (limit >= maxLimit) {
          setShowMessage(true);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchCoins();
  }, [limit]);

  const handleLoadMore = () => {
    if (limit < maxLimit) {
      setLimit((prevLimit) => prevLimit + 5);
    }
  };

  return (
    <main className="relative mt-20 lg:w-full mb-20">
      <div className="second-banner">
        <h1 className="lg:text-4xl text-2xl font-semibold text-center pt-20 text-balance pb-10">
          Explore top&apos;s crypto&apos;s and get a concret idea for top icons!
        </h1>
        <div className="w-full max-w-[1180px] mx-auto ">
          <div className="flex flex-col justify-start items-center height-[80px] w-full">
            <div className="flex items-center lg:pr-[24px] lg:min-w-[1200px] w-4/5 mb-10">
              <p className="w-[150px] lg:p-4 p-0">rank</p>
              <p className="w-[150px] ml-2 lg:p-4 p-0">name</p>
              <p className="w-[150px] p-4 lg:block hidden">supply</p>
              <p className="w-2/3 text-right p-4">price</p>
            </div>
            {coins.map(({ id, name, rank, priceUsd, supply }) => (
              <tr
                key={id}
                className="flex items-center lg:pr-[24px] lg:min-w-[1200px] w-4/5 border-b"
              >
                <div className="w-[150px] lg:p-4 p-0">
                  <p className="">{rank}</p>
                </div>
                <div className="w-[150px] ml-2 lg:p-4 p-0">
                  <p className="">{name}</p>
                </div>
                <p className="w-[150px] p-4 lg:block hidden">
                  {parseFloat(supply).toFixed(2)}
                </p>
                <p className="w-2/3 p-4 text-right">
                  ${parseFloat(priceUsd).toFixed(2)}
                </p>
              </tr>
            ))}

            <div>
              {showMessage ? (
                <p className="text-3xl pt-10 pb-5 text-center font-semibold">
                  To see more details, download our app.
                </p>
              ) : (
                <button
                  onClick={handleLoadMore}
                  className="bg-purple text-white hover:bg-blue p-4 rounded hover:bg-purple duration-300 font-semibold mt-10 mb-6"
                >
                  Load 5 More Coins
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Prices;
