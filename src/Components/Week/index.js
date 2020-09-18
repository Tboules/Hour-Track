/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Week.css";
import { getThisWeek } from "./dates";
import moment from "moment";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// use framer motion to animate the carousel

const variants = {
  enter: (direction) => {
    return {
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction === "left" ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Week = ({ finishItems }) => {
  const [[currentWeek, direction], setCurrentWeek] = React.useState([
    new Date(),
    null,
  ]);
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
    setCurrentWeek([moment(currentWeek).subtract(1, "weeks").toDate(), "left"]);
  };

  const goToNextWeek = () => {
    setCurrentWeek([moment(currentWeek).add(1, "weeks").toDate(), "right"]);
  };

  const totalHours = (arr) => {
    return arr.reduce((acc, itemTime) => {
      return (acc += Number(itemTime.completionTime));
    }, 0);
  };

  console.log(currentWeek);
  console.log(moment(currentWeek).week());

  return (
    <div className="weekContainer">
      <div className="weekOptions">
        <button className="dateBack" onClick={goToPreviousWeek}>
          <FaAngleLeft className="arrow" />
        </button>
        <h3 className="displayDate">{getThisWeek(currentWeek)}</h3>
        <button className="dateNext" onClick={goToNextWeek}>
          <FaAngleRight className="arrow" />
        </button>
      </div>
      <div className="weekBarTrack">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="weekBar"
            key={moment(currentWeek).week()}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 100 },
              opacity: { duration: 0.2 },
            }}
          >
            {weekCards.map((weekday) => {
              return (
                <div className="weekCard" key={weekday.id}>
                  <label className={`days ${weekday.day}`}>{weekday.day}</label>
                  <ul className="weekList">
                    {weekday.finishedItems.map((item) => {
                      return (
                        <li className="weekListItem" key={item.id}>
                          {item.todo}
                          <div className="numHours">{item.completionTime}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="totalHours">
                    Total Hours:
                    <div className="totalNum">
                      {totalHours(weekday.finishedItems)}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Week;
