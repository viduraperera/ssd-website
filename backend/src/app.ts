require("dotenv").config();
import express from "express";
import cors from "cors";
import connectToDB from "./utils/database";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";
// import fs from "fs";
import https from "https";
// import path from "path";
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors()); //cors added
app.use(deserializeUser);
app.use("/uploads", express.static("uploads"));

app.use(router);

const PORT = process.env.PORT || 5000;
const httpsOptions = {
	key: fs.readFileSync(path.join(__dirname, "./certs/key.pem~")),
	cert: fs.readFileSync(path.join(__dirname, "./certs/cert.pem")),
};
const server = https.createServer(httpsOptions, app);
server.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
	connectToDB();
});
