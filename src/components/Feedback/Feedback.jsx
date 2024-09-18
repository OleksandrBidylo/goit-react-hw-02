import s from "./Feedback.module.css";

const Feedback = ({ rate, total, positivePercentage }) => {
  return (
    <div>
      <ul className={s.list}>
        <li>Good: {rate.good}</li>
        <li>Neutral: {rate.neutral}</li>
        <li>Bad: {rate.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
