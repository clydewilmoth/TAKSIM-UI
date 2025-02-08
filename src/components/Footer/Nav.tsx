import { Link, useLocation } from "react-router-dom";

function Nav() {
  const path = useLocation().pathname;

  return (
    <nav id="nav-footer">
      <span>
        <Link
          to="/impressum"
          className={path === "/impressum" ? "nav-current" : "nav-element"}
        >
          Impressum
        </Link>
      </span>
      <span>
        <Link
          to="/datenschutz"
          className={path === "/datenschutz" ? "nav-current" : "nav-element"}
        >
          Datenschutz
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
