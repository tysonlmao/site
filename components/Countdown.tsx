import { useState, useEffect } from "react";
import styles from "../styles/About.module.css"

type CountdownProps = {
  date: Date;
};

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = date.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeRemaining(`${days}D`);
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return <div className={styles.countdown}>{timeRemaining}</div>;
};

export default Countdown;
