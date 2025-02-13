import "./styles.css";
import OpeningTimes from "./OpeningTimes";
import Box from "../../Box/Box";
import Dishes from "./Dishes";
import Location from "./Location";

function Home() {
  return (
    <div id="home" className="pages">
      <Box heading="Speisekarte" content={<Dishes />} />
      <Box heading="Öffnungszeiten" content={<OpeningTimes />} />
      <Box heading="Standort" content={<Location />} />
    </div>
  );
}

export default Home;
