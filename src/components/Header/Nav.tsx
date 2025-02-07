import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/location">Location</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </nav>
  );
}

export default Nav;
