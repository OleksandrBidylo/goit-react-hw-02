import s from "./Feedback.module.css";

const Feedback = ({ rate }) => {
  const total = rate.Good + rate.Neutral + rate.Bad;
  const positivePercentage =
    total > 0 ? ((rate.Good / total) * 100).toFixed(2) : 0;

  return (
    <div>
      <ul className={s.list}>
        <li>Good: {rate.Good}</li>
        <li>Neutral: {rate.Neutral}</li>
        <li>Bad: {rate.Bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
