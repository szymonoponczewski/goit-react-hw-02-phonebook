import css from "./ContactForm.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((name, index) => {
      return (
        <button
          type="button"
          onClick={onLeaveFeedback}
          name={name}
          key={index}
          className={css.button}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
