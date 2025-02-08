import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function Nav() {
  let location = useLocation();
  let classNames = ["nav-current", "nav-element", "nav-element", "nav-element"];
  switch (location.pathname) {
    case "/":
      classNames[1] = "nav-element";
      classNames[2] = "nav-element";
      classNames[3] = "nav-element";
      classNames[0] = "nav-current";
      break;
    case "/about":
      classNames[0] = "nav-element";
      classNames[2] = "nav-element";
      classNames[3] = "nav-element";
      classNames[1] = "nav-current";
      break;
    case "/order":
      classNames[0] = "nav-element";
      classNames[1] = "nav-element";
      classNames[3] = "nav-element";
      classNames[2] = "nav-current";
      break;
    case "/contact":
      classNames[0] = "nav-element";
      classNames[1] = "nav-element";
      classNames[2] = "nav-element";
      classNames[3] = "nav-current";
      break;
  }

  return (
    <nav id="nav-header">
      <span>
        <Link to="/" className={classNames[0]}>
          Home
        </Link>
      </span>
      <span>
        <Link to="/about" className={classNames[1]}>
          About
        </Link>
      </span>
      <span>
        <Link to="/order" className={classNames[2]}>
          Order
        </Link>
      </span>
      <span>
        <Link to="/contact" className={classNames[3]}>
          Contact
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
