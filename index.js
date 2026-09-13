import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./Utils/mongodb.js";
import URLRoutes from "./Routes/urls.js";
import dns from "dns/promises";
dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
ConnectMongoDB();
app.use("/", URLRoutes);

app.listen(5050, () => {
  console.log("server is running on port 5050");
});