const PORT = 3000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/movies", (req, res) => {
  const api_key = process.env.TMDB_KEY;
  res.json(api_key);

  async function getMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${api_key}`
    );
    console.log(response.data.results);
  }
  getMovies();
});
app.listen(3000, () => console.log(`server is running on port ${PORT}`));
