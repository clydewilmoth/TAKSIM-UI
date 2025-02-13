import Phone from "../../assets/phone.svg";
import Email from "../../assets/email.svg";
import Instagram from "../../assets/instagram.svg";
import "./styles.css";

function Icons() {
  return (
    <div id="icons">
      <a href="tel:+4962127939">
        <img src={Phone} alt="Phone" className="icon" />
      </a>
      <a href="mailto:info@taksim-backwaren.de">
        <img src={Email} alt="Email" className="icon" />
      </a>
      <a href="https://www.instagram.com/taksimbaklavalari/" target="_blank">
        <img src={Instagram} alt="Instagram" className="icon" />
      </a>
    </div>
  );
}

export default Icons;
