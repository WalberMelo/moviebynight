// import dotenv from "dotenv";
require("dotenv").config();

const api_key = process.env.TMDB_KEY;
console.log(api_key);

export { api_key };
