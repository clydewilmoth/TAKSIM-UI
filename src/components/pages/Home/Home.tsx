import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home" className="pages">
      <div className="block">
        <h1>Willkommen bei der Bäckerei Taksim im Herzen von Mannheim</h1>
        <p>
          Hier trifft Handwerkskunst auf Tradition, um dir das Beste aus der
          Welt der Süßspeisen zu bieten. Unsere Produkte entstehen mit viel
          Liebe zum Detail und sorgfältig ausgewählten Zutaten – ganz so, wie es
          die Tradition verlangt.
        </p>
        <p>
          Entdecke unsere große Auswahl an Baklava, Kuchen und anderen
          türkischen Köstlichkeiten, die wir täglich frisch für dich herstellen.
          Besuche uns vor Ort und genieße ein Stück Tradition mit
          unverwechselbarem Geschmack.
        </p>
        <h2>Hier finden Sie uns:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.95812674011904!2d8.465556493028995!3d49.49083447554156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc24dc58cd8f%3A0x8477dbef2ed4c00c!2sTaksim%20Baklavaci!5e0!3m2!1sde!2sde!4v1739028295387!5m2!1sde!2sde"
          width="700"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="block">
        <h2>Hervorragende türkische Backwaren</h2>
        <p>
          Wählen Sie aus zahlreichen Gerichten der türkischen Küche und lassen
          Sie sich begeistern. Kosten Sie die hausgemachte Küche sowie die
          hervorragenden lokalen Speisen, kreiert mit Leidenschaft von unseren
          Bäckern.
        </p>
        <p>
          Ebenfalls ist unser Haus bekannt für das sagenumwobene Pide oder auch
          Fladenbrot genannt. Bei unserer weitreichenden Getränkeauswahl ist für
          jederman etwas dabei.
        </p>
        <div id="dishes">...</div>
      </div>
      <div className="block">
        <h2>Profitieren Sie von unserem Mitnahme-Service</h2>
        <p>
          Unsere Gerichte sind auch besonders gut zum Mitnehmen geeignet. Bitte
          beachten Sie die Öffnungszeiten und schauen Sie doch einfach mal
          vorbei.
        </p>
        <p>Bezahlen können Sie dann direkt vor Ort bar.</p>
        <h2>Online Kuchenbestellung</h2>
        <p>
          Auf unserer Webseite können Sie direkt über den Reiter{" "}
          <Link to="/bestellen">Bestellen</Link>&nbsp;eine Kuchenbestellung mit
          Motiv in Form einer Bilddatei aufgeben.
        </p>
        <p>
          Sie werden dann per Email oder Anruf benachrichtigt, wenn ihr Kuchen
          fertig und abholbereit ist. Anschließened können Sie ganz entspannt
          beim Abholen bar bezahlen.
        </p>
      </div>
    </div>
  );
}

export default Home;
