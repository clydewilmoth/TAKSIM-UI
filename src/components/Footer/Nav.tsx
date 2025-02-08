import { Link, useLocation } from "react-router-dom";

function Nav() {
  const path = useLocation().pathname;

  return (
    <nav id="nav-footer">
      <span>
        <Link
          to="/Impressum"
          className={path === "/Impressum" ? "nav-current" : "nav-element"}
        >
          Impressum
        </Link>
      </span>
      <span>
        <Link
          to="/Datenschutz"
          className={path === "/Datenschutz" ? "nav-current" : "nav-element"}
        >
          Datenschutz
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
