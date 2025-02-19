import styles from "./Button.module.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
