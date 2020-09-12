/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Week.css";
import { thisWeek, lastWeek, firstWeekDay } from "./dates";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import moment from "moment";

const Week = ({ finishItems }) => {
  // const [currentWeek, setCurrentWeek] = React.useState([]);

  const weekCards = [
    { id: 1, day: "Sunday", finishedItems: [] },
    { id: 2, day: "Monday", finishedItems: [] },
    { id: 3, day: "Tuesday", finishedItems: [] },
    { id: 4, day: "Wednesday", finishedItems: [] },
    { id: 5, day: "Thursday", finishedItems: [] },
    { id: 6, day: "Friday", finishedItems: [] },
    { id: 7, day: "Saturday", finishedItems: [] },
  ];

  const prevWeekCards = [
    { id: 1, day: "Sunday", finishedItems: [] },
    { id: 2, day: "Monday", finishedItems: [] },
    { id: 3, day: "Tuesday", finishedItems: [] },
    { id: 4, day: "Wednesday", finishedItems: [] },
    { id: 5, day: "Thursday", finishedItems: [] },
    { id: 6, day: "Friday", finishedItems: [] },
    { id: 7, day: "Saturday", finishedItems: [] },
  ];

  finishItems.forEach((item) => {
    if (item.time) {
      let weekCheck = moment(item.time.seconds * 1000).isBefore(firstWeekDay);
      let day = moment(item.time.seconds * 1000).day();
      if (!weekCheck) {
        weekCards[day].finishedItems.push(item);
      } else if (weekCheck) {
        prevWeekCards[day].finishedItems.push(item);
      }
    } else {
      return null;
    }
  });

  return (
    <CarouselProvider
      naturalSlideHeight={200}
      naturalSlideWidth={1200}
      totalSlides={2}
      currentSlide={1}
      isIntrinsicHeight={true}
    >
      <Slider>
        <Slide index={0}>
          <div className="weekBar">
            <ButtonBack className="carButton">👈</ButtonBack>
            <div className="weekOptions">
              <h3>{lastWeek}</h3>
              <button>Save to google Calendar</button>
            </div>
            {prevWeekCards.map((weekday) => {
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
            <ButtonNext className="carButton">👉</ButtonNext>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="weekBar">
            <ButtonBack className="carButton">👈</ButtonBack>
            <div className="weekOptions">
              <h3>{thisWeek}</h3>
              <button>Save to google Calendar</button>
            </div>
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
            <ButtonNext className="carButton">👉</ButtonNext>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Week;
