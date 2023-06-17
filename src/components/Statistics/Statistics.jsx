import css from "./Statistics.module.css";
import PropTypes from "prop-types";

// Renderuje blok statystyk dopiero po otrzymaniu jednego feedbacku
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <h4>There is no feedback</h4>;
  } else {
    return (
      <ul className={css.statList}>
        <li className={css.statName}>Good: {good}</li>
        <li className={css.statName}>Neutral: {neutral}</li>
        <li className={css.statName}>Bad: {bad}</li>
        <li className={css.statName}>Total: {total}</li>
        <li className={css.statName}>
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    );
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
