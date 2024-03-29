import React from "react";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const Prices = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(5);
  const maxLimit = 15;
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
        // Set your state if needed
        setCoins(data.data);
        // Assuming the data you need is in the 'data' property of the response
        if (limit >= maxLimit) {
          setShowMessage(true);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error:", error.message);
        } else {
          // Handle other types of errors here
          console.error("Unexpected error:", error);
        }
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
          Explore top&apos;s crypto&apos;s and get a general idea of which are
          the top coins!
        </h1>
        <div className="w-full max-w-[1180px] mx-auto ">
          <div className="flex flex-col justify-start items-center height-[80px] w-full">
            <div className="flex items-center lg:pr-[24px] lg:min-w-[1200px] w-4/5 mb-10">
              <p className="w-[150px] lg:p-4 p-0">rank</p>
              <p className="w-[150px] ml-2 lg:p-4 p-0">name</p>
              <p className="w-[150px] p-4 lg:block hidden">supply</p>
              <p className="w-2/3 text-right p-4">price</p>
            </div>
            <div className="lg:pr-[24px] lg:min-w-[1200px] w-4/5 bg-white/10 z-10 backdrop-filter backdrop-blur-5xl shadow-lg rounded-md">
              {coins.map(
                ({ id, name, rank, priceUsd, supply, changePercent24Hr }) => (
                  <tr
                    key={id}
                    className="  flex items-center lg:pr-[24px] lg:min-w-[1200px] w-full border-b"
                  >
                    <div className="w-[150px] lg:p-4 p-5">
                      <p className="">{rank}</p>
                    </div>
                    <div className="w-[150px] ml-2 lg:p-4 p-0">
                      <p className="">{name}</p>
                    </div>
                    <p className="w-[150px] p-4 lg:block hidden">
                      {parseFloat(supply).toFixed(2)}
                    </p>
                    {changePercent24Hr < 0 ? (
                      <p className="w-2/3 p-4 text-right text-red">
                        ${parseFloat(priceUsd).toFixed(2)}
                      </p>
                    ) : (
                      <p className="w-2/3 p-4 text-right text-green">
                        ${parseFloat(priceUsd).toFixed(2)}
                      </p>
                    )}
                  </tr>
                )
              )}
            </div>

            <div>
              {showMessage ? (
                <p className="text-3xl pt-10 pb-5 text-center font-semibold">
                  To see more details, connect your wallet.
                </p>
              ) : (
                <button
                  onClick={handleLoadMore}
                  className="bg-purple text-white cursor-pointer hover:bg-blue p-4 rounded hover:bg-purple duration-300 font-semibold mt-10 mb-6"
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
