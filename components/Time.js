import css from '../styles/DateTime.module.css'
import React, { useState, useEffect } from 'react'
import moment from 'moment';  

function Header () {

  const [time, setTime] = useState("0:0:0");
  const [date, setDate] = useState("Tuesday 21 February");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setDate(moment().format('dddd DD MMMM'));
    }, 3600000);
    return () => clearInterval(id);
  }, []);
  
  return (
    <div className={css.timecontainer}>
        <h1 id='time' className={css.time}>{time}</h1>
        <h2 id='date' className={css.date}>{date}</h2>
    </div>
  )
}

export default Header