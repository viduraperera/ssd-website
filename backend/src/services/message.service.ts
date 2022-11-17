import MessageModel, { Message } from "../models/message.model";

export function createMessage(input: Partial<Message>) {
	return MessageModel.create(input);
}
