require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");

const port = process.env.PORT || 5000;
// const userModel = require("./db/schema");

app.use(cors());
app.use(express.json());
app.use("/", require("./router/router"));

app.listen(port, () => {
  console.log(`i am listening at port ${port}`);
});
