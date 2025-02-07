import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/pages/Home/Home.tsx";
import About from "./components/pages/About/About.tsx";
import Order from "./components/pages/Order/Order.tsx";
import Contact from "./components/pages/Contact/Contact.tsx";
import LegalNotice from "./components/pages/LegalNotice/LegalNotice.tsx";
import NoPage from "./components/pages/NoPage/NoPage.tsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy.tsx";
import Admin from "./components/pages/Admin/Admin.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legalNotice" element={<LegalNotice />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
