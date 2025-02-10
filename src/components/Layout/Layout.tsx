import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles.css";
import ArrowUp from "../../assets/arrowup.svg";

function Layout() {
  return (
    <div id="layout">
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <a href="#">
        <img src={ArrowUp} alt="Pfeil nach oben" id="back-to-top" />
      </a>
      <Footer />
    </div>
  );
}

export default Layout;
