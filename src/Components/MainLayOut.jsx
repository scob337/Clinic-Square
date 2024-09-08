import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Index from "./NavBar/Index";
import { Outlet } from "react-router-dom";

export default function MainLayOut() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('ar')}>عربي</button>
        <Index />
            <Outlet/>
        <Footer/>

    </div>
  )
}
