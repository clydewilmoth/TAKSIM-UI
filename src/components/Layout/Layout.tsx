import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

function Layout() {
  return (
    <div id="layout">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
