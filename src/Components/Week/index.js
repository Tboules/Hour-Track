import React from "react";
import "./Week.css";

const Week = ({ finishItems }) => {
  const weekCards = [
    { id: 1, day: "Sunday", finishedItems: [] },
    { id: 2, day: "Monday", finishedItems: [] },
    { id: 3, day: "Tuesday", finishedItems: [] },
    { id: 4, day: "Wednesday", finishedItems: [] },
    { id: 5, day: "Thursday", finishedItems: [] },
    { id: 6, day: "Friday", finishedItems: [] },
    { id: 7, day: "Saturday", finishedItems: [] },
  ];

  const selectDay = () => {
    const now = new Date();
    weekCards.forEach((day) => {
      if (now.getDay() === day.id - 1) {
        day.finishedItems = finishItems;
      }
    });
  };

  selectDay();

  return (
    <div className="weekBar">
      {weekCards.map((weekday) => {
        return (
          <div className="weekCard" key={weekday.id}>
            <label className={`days ${weekday.day}`}>{weekday.day}</label>
            <ul>
              {weekday.finishedItems.map((item) => {
                return <li key={item.id}>{item.todo}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Week;
