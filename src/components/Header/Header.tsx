import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./styles.css";

function Header() {
  return (
    <>
      <div id="logo-box">
        <Link to="/">
          <img src={Logo} alt="Taksim" id="logo" />
        </Link>
      </div>
      <Nav />
    </>
  );
}

export default Header;
