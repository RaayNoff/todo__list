export class ShortApi {
  static getListName(str: string) {
    if (str.length > 38) return str.substring(0, 36).concat("...");

    return str;
  }
}
