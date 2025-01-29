import { useState, useEffect } from "react";
import "../../../pages/Home/Home/HotDeal.css";

const HotDeal = () => {
  const [time, setTime] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hotDeal-item text-white p-4 md:p-10 mb-10 md:mb-20 bg-yellow-500 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">🔥 Limited Time Hot Deal! 🔥</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-center">
        <div className="flex flex-col p-4 bg-yellow-500 text-white rounded-lg">
          <span className="countdown font-mono text-3xl sm:text-5xl">{time.days}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col p-4 bg-yellow-500 text-white rounded-lg">
          <span className="countdown font-mono text-3xl sm:text-5xl">{time.hours}</span>
          <span>Hours</span>
        </div>
        <div className="flex flex-col p-4 bg-yellow-500 text-white rounded-lg">
          <span className="countdown font-mono text-3xl sm:text-5xl">{time.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col p-4 bg-yellow-500 text-white rounded-lg">
          <span className="countdown font-mono text-3xl sm:text-5xl">{time.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      <button className="mt-5 px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg">
        Read More
      </button>
    </div>
  );
};

export default HotDeal;
