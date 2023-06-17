import css from "./Section.module.css";
import PropTypes from "prop-types";

//  Renderuje sekcję z nagłówkiem i dziećmi (children).
export const Section = ({ title, children }) => (
  <div className={css.section}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};