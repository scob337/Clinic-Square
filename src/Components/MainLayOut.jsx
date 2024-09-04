import Footer from "./Footer";
import Index from "./NavBar/Index";
import Home from "./Home/home";

export default function MainLayOut() {
  return (
    <div>
        <Index />
            <Home/>
        <Footer/>
    </div>
  )
}
