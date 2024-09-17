import { useState, useEffect } from "react";
import Description from "./components/Descripnion/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const App = () => {
  const initialRate = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
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

  return (
    <div>
      <Description />
      <Options
        rate={rate}
        handleChangeRating={handleChangeRating}
        resetResults={resetResults}
      />
      <Feedback rate={rate} />
    </div>
  );
};

export default App;
