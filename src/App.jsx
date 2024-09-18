import { useState, useEffect } from "react";
import Description from "./components/Descripnion/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const initialRate = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [rate, setRate] = useState(() => {
    const savedRate = localStorage.getItem("rate");
    return savedRate ? JSON.parse(savedRate) : initialRate;
  });

  useEffect(() => {
    localStorage.setItem("rate", JSON.stringify(rate));
  }, [rate]);

  const handleChangeRating = (variant) => {
    setRate((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  };

  const resetResults = () => {
    setRate(initialRate);
  };

  const total = rate.good + rate.neutral + rate.bad;
  const positivePercentage =
    total > 0 ? ((rate.good / total) * 100).toFixed(2) : 0;

  return (
    <div>
      <Description />
      <Options
        rate={rate}
        handleChangeRating={handleChangeRating}
        resetResults={resetResults}
        showReset={total > 0}
      />

      {total === 0 && <Notification />}

      {total > 0 && (
        <Feedback
          rate={rate}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

export default App;
