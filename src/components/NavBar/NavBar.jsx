import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";
import logo from "../../images/Toy-Shop-Logo.png";

const NavBar = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.link_active}` : classes.link;

  return (
    <nav className={classes.nav} data-testid="navbar">
      <div>
        <img className={classes.logo} src={logo} alt="Al's Toy Barn Logo" />
      </div>
      <div>
        <NavLink className={linkStyles} to="/" data-testid="home-link">
          Home
        </NavLink>
        <NavLink
          className={linkStyles}
          to="/products"
          data-testid="products-link"
        >
          Products
        </NavLink>
        <NavLink className={linkStyles} to="/cart" data-testid="products-link">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
