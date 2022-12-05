import { timestamp } from "../Timestamp";

import { ICommentary } from "./ICommentary";

export interface ITask {
	id: number;
	taskName: string;
	endTime: timestamp;
	description: string;
	status: boolean;
	comments: ICommentary[];
}
