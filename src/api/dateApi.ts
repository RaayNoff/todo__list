import { daysInWeek } from "date-fns";
import moment from "moment";
import "moment/locale/ru";
import { timestamp } from "../types/Timestamp";

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

    return moment(m).format("D MMMM YYYY | h:mm");
  };

  static isToday = (timestamp: timestamp) => {
    const targetDate = this.initializeMoment(timestamp);
    targetDate.hours(0).minutes(0).seconds(0).milliseconds(0);

    const currentDate = new Date().setHours(0, 0, 0, 0);
    console.log(
      moment(targetDate).format("D MMMM YYYY"),
      moment(currentDate).format("D MMMM YYYY")
    );

    return (
      moment(targetDate).format("D MMMM YYYY") ===
      moment(currentDate).format("D MMMM YYYY")
    );
  };
}
