import { timeStamp } from "console";
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

    return moment(m).format("D MMMM YYYY | HH:mm");
  };

  static isToday = (timestamp: timestamp) => {
    const targetDate = this.initializeMoment(timestamp);
    targetDate.hours(0).minutes(0).seconds(0).milliseconds(0);

    const currentDate = new Date().setHours(0, 0, 0, 0);

    return (
      moment(targetDate).format("D MMMM YYYY") ===
      moment(currentDate).format("D MMMM YYYY")
    );
  };

  static isFuture = (timestamp: timestamp) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);

    return timestamp > currentTimestamp;
  };

  static getToday = () => {
    return moment(new Date()).locale("ru").local(true).format("ddd D MMM");
  };

  static isExpired = (timestamp: timestamp) => {
    const requestTime = this.initializeMoment(timestamp).unix();
    const nowTime = this.initializeMoment(Math.floor(Date.now() / 1000)).unix();

    return nowTime > requestTime;
  };
}
