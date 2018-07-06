import moment from "moment";
import "moment-precise-range-plugin";
const timeFormatter = time => time.slice(0, 2) + ":" + time.slice(2);
const addYearDateToHours = hours =>
  moment(moment().format(`YYYY-MM-DD ${hours}:00`));

const currentYearDateTime = () => moment().format("YYYY-MM-DD HH:mm:ss");

export const getTodayHours = ({
  notAvailable,
  immortal,
  isOpenToday,
  isOpenNow,
  todayHours,
  nextDayHours
}) => {
  if (notAvailable) return "Not available";
  if (immortal) return "Open 24 hours";
  const currentTime = moment().format("HHmm");
  const { open, close } = todayHours;
  const { open: nextOpen } = nextDayHours;
  let closeTime, openTime;

  if (isOpenToday) {
    if (isOpenNow) {
      const closeHours = timeFormatter(close.time);
      const diff = Math.abs(close.day - open.day);
      const yearDateHours = addYearDateToHours(closeHours);
      diff
        ? (closeTime = moment(yearDateHours).add(diff, "d"))
        : (closeTime = yearDateHours);
    } else {
      if (open.time >= currentTime) {
        // Will open later today
        const openhours = timeFormatter(open.time);
        openTime = addYearDateToHours(openhours);
      } else {
        // Already closed today
        const nextOpenHours = timeFormatter(nextOpen.time);
        const diff = Math.abs(nextOpen.day - close.day);
        const yearDateHours = addYearDateToHours(nextOpenHours);
        diff
          ? (closeTime = moment(yearDateHours).add(diff, "d"))
          : (closeTime = yearDateHours);
      }
    }
  } else {
    const openhours = timeFormatter(nextOpen.time);
    openTime = addYearDateToHours(openhours);
  }
  return { openTime, closeTime };
};

export const calcRemainingTime = ({ openTime = false, closeTime }) => {
  return openTime
    ? moment(currentYearDateTime()).preciseDiff(openTime)
    : moment(currentYearDateTime()).preciseDiff(closeTime);
};
