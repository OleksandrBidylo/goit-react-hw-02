import s from "./Options.module.css";

const Options = ({ rate, handleChangeRating, resetResults }) => {
  return (
    <div>
      <ul className={s.list}>
        <li onClick={() => handleChangeRating("Good")}>Good</li>
        <li onClick={() => handleChangeRating("Neutral")}>Neutral</li>
        <li onClick={() => handleChangeRating("Bad")}>Bad</li>
        <li onClick={() => resetResults("Reset")}>Reset</li>
      </ul>
    </div>
  );
};

export default Options;
