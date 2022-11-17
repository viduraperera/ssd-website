import { Request, Response } from "express";

export const uploadFile = async (req, res) => {
	try {
		if (req.file.path) {
			return res.status(201).send(req.file.path);
		} else {
			return res.status(400).send("File Upload Error");
		}
	} catch (error) {
		return res.status(500).send("File Upload Error");
	}
};
