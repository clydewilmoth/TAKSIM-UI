import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/legalNotice">LegalNotice</Link>
        </li>
        <li>
          <Link to="/privacyPolicy">PrivacyPolicy</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
