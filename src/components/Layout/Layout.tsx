import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";
import "./styles.css";

function Layout() {
  return (
    <div id="layout">
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default Layout;
