import { Request, Response } from "express";
import { createMessage } from "../services/message.service";

export async function createMessageHandler(req: Request, res: Response) {
	const message = req.body;
	try {
		await createMessage(message);
	} catch (error) {
		return res.status(500).send(error);
	}
}
