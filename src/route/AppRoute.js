import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import NavMenuDsk from "../components/common/NavMenuDsk";
import NavMenuMob from "../components/common/NavMenuMob";
import FooterDsk from "../components/common/FooterDsk";
import FooterMob from "../components/common/FooterMob";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicy from "../pages/PrivacyPolicyPage";
import RefundPage from "../pages/RefundPage";
import PurchasePage from "../pages/PurchasePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
export const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <div className="hidden sm:block">
          <NavMenuDsk />
        </div>
        <div className="block sm:hidden">
          <NavMenuMob />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund_policy" element={<RefundPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/productdetails" element={<ProductDetailsPage />} />
        </Routes>
        <div className="hidden sm:block">
          <FooterDsk />
        </div>
        <div className="block sm:hidden">
          <FooterMob />
        </div>
      </BrowserRouter>
    </>
  );
};
