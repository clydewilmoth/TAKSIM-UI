import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function Nav() {
  const path = useLocation().pathname;

  return (
    <nav id="nav-header">
      <span>
        <Link to="/" className={path === "/" ? "nav-current" : "nav-element"}>
          Startseite
        </Link>
      </span>
      <span>
        <Link
          to="/about"
          className={path === "/about" ? "nav-current" : "nav-element"}
        >
          Über Uns
        </Link>
      </span>
      <span>
        <Link
          to="/order"
          className={path === "/order" ? "nav-current" : "nav-element"}
        >
          Bestellen
        </Link>
      </span>
      <span>
        <Link
          to="/contact"
          className={path === "/contact" ? "nav-current" : "nav-element"}
        >
          Kontakt
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
