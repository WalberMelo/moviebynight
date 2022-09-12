const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
// const axios = require("axios");
// require("dotenv").config();

const app = express();
app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(8080, () => console.log(`server is running on port 8080`));
