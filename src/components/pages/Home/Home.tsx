import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div id="home" className="pages">
      <div className="block">
        <div className="dishes">
          <h1>Speisekarte</h1>
          <hr />
        </div>
      </div>
      <div className="block">
        <div id="opening-times">
          <h1>Öffnungszeiten</h1>
          <hr />
        </div>
      </div>
      <div className="block">
        <h1>Standort</h1>
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.95812674011904!2d8.465556493028995!3d49.49083447554156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc24dc58cd8f%3A0x8477dbef2ed4c00c!2sTaksim%20Baklavaci!5e0!3m2!1sde!2sde!4v1739028295387!5m2!1sde!2sde"
          width="100%"
          height="500"
          style={{ border: "none" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
