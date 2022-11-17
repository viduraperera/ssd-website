require("dotenv").config();
import express from "express";
import cors from "cors";
import connectToDB from "./utils/database";
import router from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors()); //cors added
app.use(deserializeUser);

app.use(router);

const PORT = process.env.PORT || 5000;

//starting app
app.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
	connectToDB();
});
