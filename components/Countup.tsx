import { useState, useEffect } from "react";

type CountupProps = {
  startTime: Date;
};

const Countup: React.FC<CountupProps> = ({ startTime }) => {
  const [timeElapsed, setTimeElapsed] = useState<string>("");

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const elapsed = now - startTime.getTime();
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
        setTimeElapsed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  return <div>{timeElapsed}</div>;
};

export default Countup;
