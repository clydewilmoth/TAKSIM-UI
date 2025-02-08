import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles.css";

function Layout() {
  return (
    <div id="layout">
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
