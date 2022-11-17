import express from "express";
import cors from "cors";
import connectToDB from "./utils/database";

const app = express();

app.use("/uploads", express.static("uploads"));
app.use(cors()); //cors added
app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

//starting app
app.listen(PORT, () => {
	console.log(`Server up and running on port ${PORT}`);
	connectToDB();
});
