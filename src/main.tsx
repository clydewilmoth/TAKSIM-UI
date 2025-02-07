import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/pages/Home/Home.tsx";
import About from "./components/pages/About/About.tsx";
import Contact from "./components/pages/Contact/Contact.tsx";
import LegalNotice from "./components/pages/LegalNotice/LegalNotice.tsx";
import NoPage from "./components/pages/NoPage/NoPage.tsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="LegalNotice" element={<LegalNotice />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
