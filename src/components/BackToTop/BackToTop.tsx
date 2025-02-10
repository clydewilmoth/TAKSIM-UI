import ArrowUp from "../../assets/arrowup.svg";
import "./styles.css";

function BackToTop() {
  return (
    <img
      src={ArrowUp}
      alt="Pfeil nach oben"
      id="back-to-top"
      onClick={() => clickHandler()}
    />
  );
}

function clickHandler(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export default BackToTop;
