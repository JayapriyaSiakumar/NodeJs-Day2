import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ProductRoute from "./Routers/productRoute.js";

//dotenv config
dotenv.config();

//initialization of express
const app = express();

//default middleware
app.use(express.json());
//third party package middleware
app.use(cors());

const port = process.env.PORT || 5000;

//Default route to avoid cannot get
app.get("/", (req, res) => {
  res
    .status(200)
    .send(`<h1 style="text-align:center;">Welcome to Backend Head</h1>`);
});

// custom route
app.use("/api/products", ProductRoute);

app.listen(port, () => {
  console.log("server started on port:", port);
});
