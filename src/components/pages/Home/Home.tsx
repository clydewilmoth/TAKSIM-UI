import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div id="home" className="pages">
      <div className="block">
        <h1>Im Herzen von Mannheim</h1>
        <hr />
        <p>
          Bei Uns trifft Handwerkskunst auf Tradition, um dir das Beste aus der
          <br />
          Welt der Backwaren zu bieten. Unsere Produkte entstehen mit viel Liebe
          <br />
          zum Detail und sorgfältig ausgewählten Zutaten.
        </p>
        <p>
          Entdecke unsere große Auswahl an Baklava, Kuchen und anderen
          <br />
          türkischen Köstlichkeiten, die wir täglich frisch für dich herstellen.
          <br />
          Besuche uns vor Ort und genieße ein Stück Tradition mit
          <br />
          unverwechselbarem Geschmack.
        </p>
        <br />
        <h2>Hier finden Sie uns</h2>
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.95812674011904!2d8.465556493028995!3d49.49083447554156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc24dc58cd8f%3A0x8477dbef2ed4c00c!2sTaksim%20Baklavaci!5e0!3m2!1sde!2sde!4v1739028295387!5m2!1sde!2sde"
          width="90%"
          height="400"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="dishes">
        ----------------------------------------Speisekarte
      </div>
      <div className="block">
        <h2>Hervorragende türkische Backwaren</h2>
        <hr />
        <p>
          Wählen Sie aus zahlreichen Gerichten der türkischen Küche und lassen
          <br />
          Sie sich begeistern. Kosten Sie die hausgemachte Küche sowie die
          <br />
          hervorragenden lokalen Speisen, kreiert mit Leidenschaft von unseren
          Bäckern.
          <br />
          Bei unserer weitreichenden Getränkeauswahl ist für Jederman was dabei.
        </p>
      </div>
      <div id="opening-times">
        ----------------------------------------Öffnungszeiten
      </div>
      <div className="block">
        <h2>Mitnahme-Service</h2>
        <hr />
        <p>
          Unsere Gerichte sind besonders gut zum Mitnehmen geeignet. <br />
          Bitte beachten Sie die Öffnungszeiten und schauen Sie einfach mal
          vorbei. <br />
          Sie können dann vor Ort bar bezahlen.
        </p>
        <h2>Online Bestellung</h2>
        <hr />
        <p>
          Auf unserer Webseite können Sie über&nbsp;
          <Link to="/bestellen">Bestellen</Link>
          <br />
          &nbsp;eine Bestellung aus ausgewählten Backwaren aufgeben.
        </p>
        <p>
          Sie werden per Email oder Anruf benachrichtigt, wenn ihre Bestellung
          <br />
          fertig und abholbereit ist. Anschließened können Sie ganz entspannt
          <br />
          beim Abholen bar bezahlen.
        </p>
      </div>
    </div>
  );
}

export default Home;
