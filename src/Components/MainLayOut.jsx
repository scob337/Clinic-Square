import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Index from "./NavBar/Index";
import Home from "./Home/home";

export default function MainLayOut() {
  return (
    <div>
        <Index />
          {Outlet}
            <Home/>
        <Footer/>
    </div>
  )
}
