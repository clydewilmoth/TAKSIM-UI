import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <p>
        <Link to="/legalNotice">LegalNotice</Link>
      </p>
      <p>
        <Link to="/privacyPolicy">PrivacyPolicy</Link>
      </p>
    </nav>
  );
}

export default Nav;
