import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Index from "./NavBar/Index";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
export default function MainLayOut() {
  const { i18n } = useTranslation();
  const [Direction , setDirection] =useState(localStorage.getItem('i18nextLng')==='ar' ? "rtl" : "ltr")
  const [Active , setActive] = useState("ar")
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('i18nextLng') || 'en');
  }, [i18n]);
  const handleLanguageChange = (lng) => {
    localStorage.setItem('i18nextLng', lng);
    i18n.changeLanguage(lng);
    setDirection(localStorage.getItem('i18nextLng')==='ar' ? "rtl" : "ltr")
    setActive(lng)
  };

  return (
    <div dir={Direction} >
          <Helmet>
      <title>Clinic-Square </title>
      <meta name="description" content="وصف مخصص لصفحة معينة" />
      <meta name="keywords" content="كلمات, مفتاحية, هنا" />
    </Helmet>
      <div className="p-3 flex gap-2" dir="ltr">
      <button onClick={() => handleLanguageChange('en')} className={`font-semibold hover:text-[#00ACA8] transition ${Active === 'en' ? 'text-[#00ACA8]' : ''}  `}> Eng   </button>
      |
      <button onClick={() => handleLanguageChange('ar')} className={`font-semibold hover:text-[#00ACA8] transition ${Active === 'ar' ? 'text-[#00ACA8]' : ''}`}> AR </button>
      </div>
        <Index />
            <Outlet/>
        <Footer/>

    </div>
  )
}
