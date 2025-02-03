import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onclick, type }) {
  return (
    <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default Button;
