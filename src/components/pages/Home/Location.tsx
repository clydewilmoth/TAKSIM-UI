import { useState } from "react";
import Map from "../../../assets/map.svg";

function Location() {
  const [hidden, setHidden] = useState(true);

  return (
    <div id="location">
      <div className="cover">
        <img
          src={Map}
          alt="Karte anzeigen"
          className="map"
          onClick={() => {
            hidden ? setHidden(false) : setHidden(true);
          }}
        />
        <br />
        <div
          className="address"
          style={!hidden ? { marginBottom: "50px" } : { marginBottom: "0" }}
        >
          H3 1
          <br /> 68159 Mannheim
          <br /> Deutschland
        </div>
      </div>
      <iframe
        src={
          !hidden
            ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.6746401594196!2d8.46391237678489!3d49.490652656004684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc24dc58cd8f%3A0x8477dbef2ed4c00c!2sTaksim%20Baklavaci!5e0!3m2!1sde!2sde!4v1739409142917!5m2!1sde!2sde"
            : undefined
        }
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="gmaps"
        hidden={hidden}
      ></iframe>
    </div>
  );
}

export default Location;
