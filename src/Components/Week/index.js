/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Week.css";
import { getThisWeek } from "./dates";
import moment from "moment";

// use framer motion to animate the carousel

const Week = ({ finishItems }) => {
  const [currentWeek, setCurrentWeek] = React.useState(new Date());
  const [weekCards, setWeekCards] = React.useState([
    { id: 1, day: "Sunday", finishedItems: [] },
    { id: 2, day: "Monday", finishedItems: [] },
    { id: 3, day: "Tuesday", finishedItems: [] },
    { id: 4, day: "Wednesday", finishedItems: [] },
    { id: 5, day: "Thursday", finishedItems: [] },
    { id: 6, day: "Friday", finishedItems: [] },
    { id: 7, day: "Saturday", finishedItems: [] },
  ]);

  // use state to check the week of the year (1-52) and filter through finish items and push accordingly
  // framer motion for carousel (hard mode)

  React.useEffect(() => {
    const freshWeek = [
      { id: 1, day: "Sunday", finishedItems: [] },
      { id: 2, day: "Monday", finishedItems: [] },
      { id: 3, day: "Tuesday", finishedItems: [] },
      { id: 4, day: "Wednesday", finishedItems: [] },
      { id: 5, day: "Thursday", finishedItems: [] },
      { id: 6, day: "Friday", finishedItems: [] },
      { id: 7, day: "Saturday", finishedItems: [] },
    ];
    // building out fresh week cards so we do not get duplicates

    finishItems.forEach((item) => {
      if (item.time) {
        const itemDate = moment(item.time.toDate());
        if (
          itemDate.isBetween(
            moment(currentWeek).startOf("week").toDate(),
            moment(currentWeek).endOf("week").toDate()
          )
        ) {
          let day = itemDate.day();
          freshWeek[day].finishedItems.push(item);
        }
      }
    });
    setWeekCards(freshWeek);
  }, [currentWeek, finishItems]);

  const goToPreviousWeek = () => {
    setCurrentWeek(moment(currentWeek).subtract(1, "weeks").toDate());
  };

  const goToNextWeek = () => {
    setCurrentWeek(moment(currentWeek).add(1, "weeks").toDate());
  };

  const totalHours = (arr) => {
    return arr.reduce((acc, itemTime) => {
      return (acc += Number(itemTime.completionTime));
    }, 0);
  };

  return (
    <div className="weekContainer">
      <div className="weekOptions">
        <button className="dateBack" onClick={goToPreviousWeek}>
          back
        </button>
        <h3 className="displayDate">{getThisWeek(currentWeek)}</h3>
        <button className="dateNext" onClick={goToNextWeek}>
          next
        </button>
      </div>
      <div className="weekBar">
        {weekCards.map((weekday) => {
          return (
            <div className="weekCard" key={weekday.id}>
              <label className={`days ${weekday.day}`}>{weekday.day}</label>
              <ul>
                {weekday.finishedItems.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.todo} {item.completionTime}
                    </li>
                  );
                })}
              </ul>
              <div className="totalHours">
                Total Hours: {totalHours(weekday.finishedItems)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Week;
