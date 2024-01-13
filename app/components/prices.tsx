import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Prices = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  const corss = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    axios
      .get(corss + url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Content-Type, X-Auth-Token, Origin, Authorization",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <main className="relative mt-20 lg:w-full">
      <div className="secondBanner">
        <h1 className="text-4xl font-semibold text-center pt-20 text-balance">
          Explore top's crypto's and get a concret idea for top icons!
        </h1>
        <div className="w-full max-w-[1180px] mx-auto">
          <div className="mt-20">
            <div className="flex justify-center">
              <div className="flex justify-start h-[80px] border-b w-[900px] items-center">
                <div className="flex items-center pr-[24px] min-w-[300px]">
                  <img
                    src={data[0].image}
                    className="w-[30px] h-[30px] mr-[10px]"
                    alt=""
                  />

                  <h1 className=" text-base w-[150px]">{data[0].name}</h1>
                  <p className=" uppercase">{data[0].symbol}</p>
                </div>
                <div className="flex items-center text-center justify-between w-full">
                  <p className="w-[110px]">
                    ${data[0].current_price.toLocaleString()}
                  </p>
                  <p className="lg:block hidden">
                    ${data[0].market_cap.toLocaleString()}
                  </p>
                  {data[0].price_change_percentage_24h < 0 ? (
                    <span className="text-red flex flex-row">
                      <FiArrowDown />
                      {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-green flex flex-row">
                      <FiArrowUp />
                      {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-center">
              <div className="flex justify-start h-[80px] border-b w-[900px] items-center">
                <div className="flex items-center pr-[24px] min-w-[300px]">
                  <img
                    src={data[1].image}
                    className="w-[30px] h-[30px] mr-[10px]"
                    alt=""
                  />

                  <h1 className=" text-base w-[150px]">{data[1].name}</h1>
                  <p className=" uppercase">{data[1].symbol}</p>
                </div>
                <div className="flex items-center text-center justify-between w-full">
                  <p className="w-[110px]">
                    ${data[1].current_price.toLocaleString()}
                  </p>
                  <p className="lg:block hidden">
                    ${data[1].market_cap.toLocaleString()}
                  </p>
                  {data[1].price_change_percentage_24h < 0 ? (
                    <span className="text-red flex flex-row">
                      <FiArrowDown />
                      {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-green flex flex-row">
                      <FiArrowUp />
                      {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-center">
              <div className="flex justify-start h-[80px] border-b w-[900px] items-center">
                <div className="flex items-center pr-[24px] min-w-[300px]">
                  <img
                    src={data[2].image}
                    className="w-[30px] h-[30px] mr-[10px]"
                    alt=""
                  />

                  <h1 className=" text-base w-[150px]">{data[2].name}</h1>
                  <p className=" uppercase">{data[2].symbol}</p>
                </div>
                <div className="flex items-center text-center justify-between w-full">
                  <p className="w-[110px]">
                    ${data[2].current_price.toLocaleString()}
                  </p>
                  <p className="lg:block hidden">
                    ${data[2].market_cap.toLocaleString()}
                  </p>
                  {data[2].price_change_percentage_24h < 0 ? (
                    <span className="text-red flex flex-row">
                      <FiArrowDown />
                      {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-green flex flex-row">
                      <FiArrowUp />
                      {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-center">
              <div className="flex justify-start h-[80px] border-b w-[900px] items-center">
                <div className="flex items-center pr-[24px] min-w-[300px]">
                  <img
                    src={data[3].image}
                    className="w-[30px] h-[30px] mr-[10px]"
                    alt=""
                  />

                  <h1 className=" text-base w-[150px]">{data[3].name}</h1>
                  <p className=" uppercase">{data[3].symbol}</p>
                </div>
                <div className="flex items-center text-center justify-between w-full">
                  <p className="w-[110px]">
                    ${data[3].current_price.toLocaleString()}
                  </p>
                  <p className="lg:block hidden">
                    ${data[3].market_cap.toLocaleString()}
                  </p>
                  {data[3].price_change_percentage_24h < 0 ? (
                    <span className="text-red flex flex-row">
                      <FiArrowDown />
                      {data[3].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-green flex flex-row">
                      <FiArrowUp />
                      {data[3].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-center">
              <div className="flex justify-start h-[80px] border-b w-[900px] items-center">
                <div className="flex items-center pr-[24px] min-w-[300px]">
                  <img
                    src={data[4].image}
                    className="w-[30px] h-[30px] mr-[10px]"
                    alt=""
                  />

                  <h1 className=" text-base w-[150px]">{data[4].name}</h1>
                  <p className=" uppercase">{data[4].symbol}</p>
                </div>
                <div className="flex items-center text-center justify-between w-full">
                  <p className="w-[110px]">
                    ${data[4].current_price.toLocaleString()}
                  </p>
                  <p className="lg:block hidden">
                    ${data[4].market_cap.toLocaleString()}
                  </p>
                  {data[4].price_change_percentage_24h < 0 ? (
                    <span className="text-red flex flex-row">
                      <FiArrowDown />
                      {data[4].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-green flex flex-row">
                      <FiArrowUp />
                      {data[4].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pb-6">
            <div className="flex justify-center">
              <div className="flex justify-start h-[80px] w-[900px] items-center">
                <div className="flex items-center pr-[24px] min-w-[300px]">
                  <img
                    src={data[5].image}
                    className="w-[30px] h-[30px] mr-[10px]"
                    alt=""
                  />

                  <h1 className=" text-base w-[150px]">{data[5].name}</h1>
                  <p className=" uppercase">{data[5].symbol}</p>
                </div>
                <div className="flex items-center text-center justify-between w-full">
                  <p className="w-[110px]">
                    ${data[5].current_price.toLocaleString()}
                  </p>
                  <p className="lg:block hidden">
                    ${data[4].market_cap.toLocaleString()}
                  </p>
                  {data[5].price_change_percentage_24h < 0 ? (
                    <span className="text-red flex flex-row">
                      <FiArrowDown />
                      {data[5].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-green flex flex-row">
                      <FiArrowUp />
                      {data[5].price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Prices;
