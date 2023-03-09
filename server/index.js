import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";


const app = express();
app
  .use(bodyParser.json({ limit: "30mb", extended: true }))
  .use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
  .use(cors())
  .use("/posts", postRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started");
    });
  })
  .catch((e) => {
    console.log(e);
  });
