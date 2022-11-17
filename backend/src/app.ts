require("dotenv").config();
import express from "express";
import cors from "cors";
import connectToDB from "./utils/database";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";
import fs from "fs";
import https from "https";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors()); //cors added
app.use(deserializeUser);
app.use("/uploads", express.static("uploads"));

app.use(router);

const PORT = process.env.PORT || 5000;
const httpsOptions = {
	key: fs.readFileSync(path.resolve("src/key.pem")),
	cert: fs.readFileSync(path.resolve("src/cert.pem")),
};
const server = https.createServer(httpsOptions, app).listen(PORT, () => {
	console.log("server running at " + PORT);
});
// app.listen(PORT, () => {
// 	console.log(`Server up and running on port ${PORT}`);
// 	connectToDB();
// });
