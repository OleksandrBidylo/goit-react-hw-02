import s from "./Options.module.css";

const Options = ({ rate, handleChangeRating, resetResults, showReset }) => {
  return (
    <div>
      <ul className={s.list}>
        <li onClick={() => handleChangeRating("good")}>Good</li>
        <li onClick={() => handleChangeRating("neutral")}>Neutral</li>
        <li onClick={() => handleChangeRating("bad")}>Bad</li>

        {showReset && <li onClick={resetResults}>Reset</li>}
      </ul>
    </div>
  );
};

export default Options;
