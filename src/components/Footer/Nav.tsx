import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <p>
        <Link to="/Impressum">LegalNotice</Link>
      </p>
      <p>
        <Link to="/Datenschutzerklärung">PrivacyPolicy</Link>
      </p>
    </nav>
  );
}

export default Nav;
