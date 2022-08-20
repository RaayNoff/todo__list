import { time, timeStamp } from "console";
import moment from "moment";
import "moment/locale/ru";

export default class DateApi {
  static initializeMoment = (timestamp: number) => {
    moment.locale("ru");

    return moment.unix(timestamp).local(true);
  };

  static getCommentTime = (timestamp: number): string => {
    const m = this.initializeMoment(timestamp);

    return moment(m).format("D MMM h:mm");
  };

  static getEndtime = (timestamp: number): string => {
    const m = this.initializeMoment(timestamp);

    return moment(m).format("D MMMM");
  };
}
