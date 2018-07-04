import React from "react";
import { compose, withState, lifecycle } from "recompose";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Photos from "./Photos";
import moment from "moment";
import "moment-precise-range-plugin";

const anchorTagStyle = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap"
};
const wrapperClass = "d-flex justify-content-start align-items-center mb-3 ";
const currentTime = moment().format("HHmm");
const timeFormatter = time => time.slice(0, 2) + ":" + time.slice(2);
const addYearDateToHours = hours =>
  moment(moment().format(`YYYY-MM-DD ${hours}:00`));

const getTodayHours = ({
  notAvailable,
  immortal,
  isOpenToday,
  isOpenNow,
  todayHours,
  nextDayHours
}) => {
  if (notAvailable) return "Not available";
  if (immortal) return "Open 24 hours";
  const { open, close } = todayHours;
  const { open: nextOpen } = nextDayHours;
  let closeTime, openTime;

  if (isOpenToday) {
    if (isOpenNow) {
      const closeHours = timeFormatter(close.time);
      const diff = Math.abs(close.day - open.day);
      diff
        ? (closeTime = moment(addYearDateToHours(closeHours)).add(diff, "d"))
        : (closeTime = addYearDateToHours(closeHours));
    } else {
      if (open.time >= currentTime) {
        const openhours = timeFormatter(open.time);
        openTime = addYearDateToHours(openhours);
      } else {
        const closedHours = timeFormatter(open.time);
        closeTime = moment().format(`YYYY-MM-DD ${closedHours}:00`);
      }
    }
  } else {
    const openhours = timeFormatter(nextOpen.time);
    openTime = addYearDateToHours(openhours);
  }
  return { openTime, closeTime };
};

const currentYearDateTime = () => moment().format("YYYY-MM-DD HH:mm:ss");

const calcRemainTime = ({ openTime = false, closeTime }) => {
  return openTime
    ? moment(currentYearDateTime()).preciseDiff(openTime)
    : moment(currentYearDateTime()).preciseDiff(closeTime);
};

let timerID;
const enhence = compose(
  withState("remainingTime", "setRemainingTime", ""),
  lifecycle({
    componentDidMount() {
      const { schedule, setRemainingTime } = this.props;
      const businessHours = getTodayHours(schedule);
      if (["Not available", "Open 24 hours"].includes(businessHours)) {
        return setRemainingTime(businessHours);
      } else {
        setRemainingTime(calcRemainTime(businessHours));
        timerID = setInterval(
          () => setRemainingTime(calcRemainTime(businessHours)),
          1000
        );
      }
    },
    componentWillUnmount() {
      clearInterval(timerID);
    }
  })
);
const RestaurantInfoBox = enhence(
  ({
    placeId,
    lat,
    lng,
    name,
    schedule,
    remainingTime,
    popover,
    photoUrls,
    detail,
    vicinity = "Not available"
  }) => {
    const { chosenId, isOpen } = popover;
    const { isOpenNow } = schedule;
    const defaultMessage = "Not available";
    const {
      formatted_phone_number: phone = defaultMessage,
      international_phone_number: intPhone = defaultMessage,
      price_level: price = defaultMessage,
      website = defaultMessage
    } = detail;
    console.log(schedule);
    if (chosenId === placeId && isOpen) {
      return (
        <div className="RestaurantInfoBox border border-info ">
          {
            <Popover
              placement="auto"
              isOpen={isOpen}
              target={`Popover-${placeId}`}
            >
              <div className="arrow">
                <PopoverHeader>{name}</PopoverHeader>

                <PopoverBody>
                  {isOpenNow ? (
                    <div className={wrapperClass}>
                      <i
                        className="material-icons mr-2"
                        style={{ color: "#39e4a9" }}
                      >
                        battery_full
                      </i>
                      <span style={{ borderBottom: "solid #39e4a9 2px" }}>
                        {remainingTime}
                      </span>
                    </div>
                  ) : (
                    <div className={wrapperClass}>
                      <i className="material-icons mr-2">
                        battery_charging_full
                      </i>
                      <span style={{ borderBottom: "solid #424242 2px" }}>
                        {remainingTime}
                      </span>
                    </div>
                  )}
                  <div className={wrapperClass}>
                    <i className="material-icons mr-2">attach_money</i>
                    {price === defaultMessage ? (
                      <span>{price}</span>
                    ) : (
                      Array(price)
                        .fill()
                        .map((p, i) => (
                          <span
                            role="image"
                            alt="money"
                            key={`price-level-${i}`}
                            style={{ fontSize: "3vh" }}
                          >
                            💰
                          </span>
                        ))
                    )}
                  </div>

                  <div className={wrapperClass}>
                    <i className="material-icons mr-2">phone</i>
                    {phone === defaultMessage ? (
                      <span>{phone}</span>
                    ) : (
                      <a href={intPhone}>
                        <span>{phone}</span>
                      </a>
                    )}
                  </div>
                  <div className={wrapperClass}>
                    <i className="material-icons mr-2">location_on</i>
                    {vicinity === defaultMessage ? (
                      <span>{vicinity}</span>
                    ) : (
                      <a
                        href={`https://maps.google.com/maps/place/${lat},${lng}`}
                        style={anchorTagStyle}
                      >
                        <span>{vicinity}</span>
                      </a>
                    )}
                  </div>
                  <div className={wrapperClass}>
                    <i className="material-icons mr-2">web</i>
                    {website === defaultMessage ? (
                      <span>{website}</span>
                    ) : (
                      <a href={website} style={anchorTagStyle}>
                        <span>{website}</span>
                      </a>
                    )}
                  </div>
                  <Photos photoUrls={photoUrls} placeId={placeId} />
                </PopoverBody>
              </div>
            </Popover>
          }
        </div>
      );
    } else {
      return <div className="RestaurantInfoBox" />;
    }
  }
);

export default RestaurantInfoBox;
