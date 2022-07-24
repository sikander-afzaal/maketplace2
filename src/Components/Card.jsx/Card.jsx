import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ profileImg, cardBg, time, name, likes }) {
  const [liked, setLiked] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    let end = new Date(time);
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <Link to={"/NftDetail/2"} className={styles.card}>
      {/* <div className={styles.profileRow}>
        <img src={profileImg} alt="" />
        <div className={styles.timerDiv}>
          <div className={styles.timeBox}>
            <h2>{timerDays}d</h2>
          </div>
          <div className={styles.timeBox}>
            <h2>{timerHours}h</h2>
          </div>
          <div className={styles.timeBox}>
            <h2>{timerMinutes}m</h2>
          </div>
          <div className={styles.timeBox}>
            <h2>{timerSeconds}s</h2>
          </div>
        </div>
      </div> */}
      <img className={styles.cardBg} src={cardBg} alt="" />
      <div className={styles.absRow}>
        <h6>Open</h6>
        <FontAwesomeIcon
          className={`${liked && styles.redColor}`}
          onClick={() => setLiked((prev) => !prev)}
          icon={liked ? solidHeart : faHeart}
        />
      </div>
      <div className={styles.cardDesc}>
        <h4>{name}</h4>
        <h5>
          <span>0.08 ETH </span> 1/20
        </h5>
        <p>Place a bid</p>
      </div>
    </Link>
  );
}

export default Card;
