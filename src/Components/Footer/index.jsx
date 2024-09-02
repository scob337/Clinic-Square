import { FaLinkedin, FaFacebook , FaTwitter , FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-[45vh] bg-[#00ACA8] text-white pl-10 flex flex-col items-start justify-center p-4">
        
    <ul className="h-full flex flex-col items-start justify-center gap-4">
        <h1 className="font-bold  mb-4">Important Links</h1>
        <li className="cursor-pointer font-semibold hover:text-[#00AC] transition-all duration-300">Are You a Doctor ? </li>
        <li className="cursor-pointer font-semibold hover:text-[#00AC] transition-all duration-300">Services</li>
        <li className="cursor-pointer font-semibold hover:text-[#00AC] transition-all duration-300">Have a Medical Question ?</li>
        <li className="cursor-pointer font-semibold hover:text-[#00AC] transition-all duration-300">Labs & Pharmacy</li>
    </ul>

    <div className="flex flex-col items-center justify-between w-[100%] gap-3 mt-[10px]
    lg:flex-row lg:w-[40%] lg:m-auto
    
    ">
        <span>Copyright @2024</span>
        
        <div className="flex items-center gap-4 ">

        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />

        </div>
    </div>

    </div>
  )
}
