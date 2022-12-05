import { timestamp } from "../Timestamp";

export interface ICommentary {
	id: number;
	content: string;
	email: string;
	timestamp: timestamp;
}
