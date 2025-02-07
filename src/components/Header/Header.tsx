import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <div id="header">
      <Link to="/">
        <img
          src={Logo}
          alt="Taksim"
          id="logo"
          style={{ width: 100, height: "auto" }}
        />
      </Link>
      <Nav />
    </div>
  );
}

export default Header;
