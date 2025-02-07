import Phone from "../../assets/phone.svg";
import Email from "../../assets/email.svg";
import Instagram from "../../assets/instagram.svg";

function Icons() {
  return (
    <div className="icons">
      <a href="tel:+4962127939">
        <img src={Phone} alt="Phone" />
      </a>
      <a href="mailto:info@taksim-backwaren.de">
        <img src={Email} alt="Email" />
      </a>
      <a href="https://www.instagram.com/taksimbaklavalari/" target="_blank">
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
  );
}

export default Icons;
