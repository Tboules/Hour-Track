import React from "react";
import "./Week.css";

const Week = ({ finishItems }) => {
  //const [itemTimes, setItemTimes] = React.useState([])


  const weekCards = [
    { id: 1, day: "Sunday", finishedItems: [] },
    { id: 2, day: "Monday", finishedItems: [] },
    { id: 3, day: "Tuesday", finishedItems: [] },
    { id: 4, day: "Wednesday", finishedItems: [] },
    { id: 5, day: "Thursday", finishedItems: [] },
    { id: 6, day: "Friday", finishedItems: [] },
    { id: 7, day: "Saturday", finishedItems: [] },
  ];
  

  finishItems.forEach(item => {
    if (item.time) {
      let dates = new Date(item.time.seconds * 1000)
      weekCards[dates.getDay()].finishedItems.push(item)
    } else {
      return null;
    }  
  })

  // console.log(
  //   finishItems.map(date => {
  //     let dates = new Date(date.time.seconds * 1000)
  //     return dates.getDay()  
  //   })
  // )

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
