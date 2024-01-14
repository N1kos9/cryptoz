const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define a route to proxy the Coingecko API request
app.get("/api/coingecko", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 6,
          page: 1,
          sparkline: false,
          locale: "en",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Coingecko:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
