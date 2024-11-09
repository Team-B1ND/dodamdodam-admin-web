import dayjs from "dayjs";

class DateTransform {
  public hyphen(date?: string): string {
    return dayjs(date).format("YYYY-MM-DD");
  }
}
const dateTransform = new DateTransform();
export default dateTransform;
