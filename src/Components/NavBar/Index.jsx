import { NavLink } from "react-router-dom";
import Logo from "../../assets/Clinic3-removebg-preview.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function Index() {


    const [Toggle, setToggle] = useState(true);
    const [activeItem, setActiveItem] = useState("#");

    const Target = Item => {
        setActiveItem(Item)
    }



    const Data = [
        {
            id: 1,
            name: "Home",
            link: "#",
        },
        {
            id: 2,
            name: "Services",
            link: "#1",
        },
        {
            id: 3,
            name: "Doctors",
            link: "#2",
        },
        {
            id: 4,
            name: "About us",
            link: "#3",
        },
        {
            id: 5,
            name: "Labs & Pharmacy",
            link: "#4",
        },
    ];

    return (
        <nav className="flex justify-evenly w-[100%] p-3 h-[145px] bg-white  items-center max-md:relative">
            <div className=" logo w-[200px]">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-[200px] h-[110px] object-cover"
                />
            </div>
            <ul
                className={`max-md:absolute 
            flex  lg:relative items-center justify-center gap-4 1/3 
            max-md:flex-col max-md:items-start max-md:pl-2 
            max-md:top-[130px] max-md:left-0 
            overflow-hidden transition-all
            ${Toggle ? "max-h-[600px]" : "max-h-[0px]"}
            
            `}
            >
                {Data.map((item) => (
                    <NavLink
                        onClick={() => Target(item.link)}
                        to={item.link}
                        key={item.id}
                        className={`
                            group-hover:text-[#00ACA8] 
                            font-[600]
                    group
                    max-md:p-1  max-md:w-[150px]
                    ${activeItem === item.link ? "text-[#00ACA8]" : "text-gray-600 "} 
                
                            `}
                    >
                        <li>{item.name}</li>
                    </NavLink>
                ))}
            </ul>
            <div
                className="
                bg-[#F1F4FC]
                flex items-center justify-center p-1 w-[200px] gap-2 rounded-lg ring-1 ring-slate-600"
            >
                <CiSearch size={24} color="#00ACA8 " cursor={"pointer"} />
                <input
                    type="text"
                    placeholder="Search"
                    className="border-none outline-none w-[80%]"
                />
            </div>
        </nav>
    );
}
