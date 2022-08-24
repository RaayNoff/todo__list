import { timestamp } from "../Timestamp";

export interface ICommentary {
  id: number;
  userEmail: string;
  content: string;
  timestamp: timestamp;
}
