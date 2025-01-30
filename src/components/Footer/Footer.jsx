import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <h3 className={classes.footer}>
      Copyright {new Date().getFullYear()} | James Nemeth
    </h3>
  );
};

export default Footer;
