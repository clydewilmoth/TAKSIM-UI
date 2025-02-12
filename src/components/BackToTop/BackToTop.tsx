import { useEffect, useState } from "react";
import ArrowUp from "../../assets/arrowup.svg";
import "./styles.css";

function BackToTop() {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    });

    return () =>
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setHidden(false);
        } else {
          setHidden(true);
        }
      });
  }, []);

  return (
    <img
      src={ArrowUp}
      alt="Pfeil nach oben"
      id="back-to-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={
        hidden === true
          ? { visibility: "hidden", opacity: 0.0 }
          : { visibility: "visible", opacity: 1.0 }
      }
    />
  );
}

export default BackToTop;
