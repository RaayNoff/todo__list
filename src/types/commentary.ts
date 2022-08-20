import { timestamp } from "./timestamp";

export interface ICommentary {
  id: number;
  userEmail: string;
  content: string;
  timestamp: timestamp;
}
