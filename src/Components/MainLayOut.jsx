import Footer from "./Footer";
import Index from "./NavBar/Index";
import { Outlet } from "react-router-dom";

export default function MainLayOut() {
  return (
    <div>
        <Index />
            <Outlet/>
        <Footer/>
    </div>
  )
}
