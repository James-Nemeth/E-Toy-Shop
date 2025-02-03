import styles from "./Button.module.scss";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      className={`${styles.btn} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
