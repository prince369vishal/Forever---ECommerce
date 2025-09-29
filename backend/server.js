import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
const port = process.env.PORT || 4000;

//CONNECT DB
connectDB();
connectCloudinary();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//API ENDPOINTS
app.get("/", (req, res) => {
  res.send("Boom Boom Bumrah");
});

app.listen(port, () => console.log("Server Started at PORT : " + port));
