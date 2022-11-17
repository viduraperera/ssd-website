import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectToDB() {
	const dbUri = process.env.MONGO_URI as string;

	try {
		await mongoose.connect(dbUri);
		console.log("Connected to DB");
	} catch (error) {
		process.exit(1);
	}
}

export default connectToDB;
