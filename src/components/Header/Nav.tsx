import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function Nav() {
  const path = useLocation().pathname;

  return (
    <nav id="nav-header">
      <span>
        <Link to="/" className={path === "/" ? "nav-current" : "nav-element"}>
          Start
        </Link>
      </span>
      <span>
        <Link
          to="/info"
          className={path === "/info" ? "nav-current" : "nav-element"}
        >
          Info
        </Link>
      </span>
      <span>
        <Link
          to="/bestellen"
          className={path === "/bestellen" ? "nav-current" : "nav-element"}
        >
          Bestellen
        </Link>
      </span>
      <span>
        <Link
          to="/kontakt"
          className={path === "/kontakt" ? "nav-current" : "nav-element"}
        >
          Kontakt
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
