"use client"
import React, { useState, useEffect } from "react";
// import moment from 'moment';
import "./Timer.css";

const CountDown = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    time_up: ""
  });

  useEffect(() => {
    const deadline = new Date("June 08, 2024 21:00:00").getTime();

    const count = () => {
      const now = new Date().getTime();
      const t = deadline - now;

      if (t < 0) {
        clearInterval(x);
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          time_up: "TIME IS UP"
        });
        return;
      }

      const dd = Math.floor(t / (1000 * 60 * 60 * 24));
      const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const ss = Math.floor((t % (1000 * 60)) / 1000);

      const days = dd < 10 ? "0" + dd : dd;
      const hours = hh < 10 ? "0" + hh : hh;
      const minutes = mm < 10 ? "0" + mm : mm;
      const seconds = ss < 10 ? "0" + ss : ss;

      setTime({ days, hours, minutes, seconds, time_up: "" });
    };

    const x = setInterval(count, 1000);
    return () => clearInterval(x); // Cleanup interval on component unmount
  }, []);

  const { days, hours, minutes, seconds } = time;

  return (
    <div id="countdown">
      <div className="col-4">
        <div className="box">
          <p id="day">{days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
