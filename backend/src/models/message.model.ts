import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";

export class Message {
	@prop({ ref: () => User })
	user: Ref<User>;

	@prop()
	message: string;

	@prop()
	filePath: string;
}

const MessageModel = getModelForClass(Message, {
	schemaOptions: {
		timestamps: true,
	},
});

export default MessageModel;
