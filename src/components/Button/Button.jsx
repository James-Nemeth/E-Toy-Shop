import styles from "./Button.module.scss";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      // if the button has the disabled class on it, add the disabled styling to it
      className={`${styles.btn} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
