import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div id="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
