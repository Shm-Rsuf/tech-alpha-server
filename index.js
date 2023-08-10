require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

/* variables */
const port = process.env.PORT || 4000;

/* create app */
const app = express();

/* middlewares */
app.use(express.json());
app.use(cors({ credentials: true }));

/* test api */
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to our tech alpha server" });
});

/* connect to database */
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`our app is runnign on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
