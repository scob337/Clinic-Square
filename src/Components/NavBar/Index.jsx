        import { NavLink } from "react-router-dom";
        import Logo from "../../assets/Clinic3-removebg-preview.png";
        import { CiSearch } from "react-icons/ci";
        import { useEffect, useState } from "react";
        import { FaBarsStaggered } from "react-icons/fa6";

        export default function Index() {
        const [Toggle, setToggle] = useState(false);
        const [activeItem, setActiveItem] = useState("#");

        const Target = (Item) => {
            setActiveItem(Item);
        };

        const HandleToggle = ()=>{
            setToggle(!Toggle)
            console.log(Toggle)
        }
            useEffect(() => {
                window.onresize = () => {
                    setToggle(false);
                };
            },[])
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
                      lg:relative items-center justify-center gap-4 1/3 
                      md:flex
                    max-md:flex-col max-md:items-start max-md:pl-2 
                    max-md:p-2
                    max-md:top-[130px] max-md:left-0 
                    overflow-hidden transition-all duration-300
                    max-md:${Toggle  ? "max-h-[600px] " : "max-h-[0px] hidden"} 
                    max-md:z-50 max-md:bg-white hover:text-[#00ACA8]
                    lg:flex
                    `}
            >

                {Data.map((item) => (
                <NavLink
                    onClick={() => Target(item.link)}
                    to={item.link}
                    key={item.id}
                    className={`
                                    cursor-pointer hover:text-[#00ACA8] transition-all duration-200
                                    font-[600]
                            group
                            max-md:p-1  max-md:w-[150px]
                            ${
                            activeItem === item.link
                                ? "text-[#00ACA8]"
                                : "text-gray-600 "
                            } 
                        
                        `}
                >
                    <li>{item.name}</li>
                </NavLink>
                ))}
            </ul>
            <div
                className="
                        bg-[#F1F4FC]
                        flex items-center justify-center p-1 w-[150px] gap-2 rounded-lg 
                        max-md:hidden
                        shadow-md shadow-[#00000026]
                        "

            >
                <CiSearch size={24} color="#00ACA8 " cursor={"pointer"} />
                <input
                type="text"
                placeholder="Search"
                className="border-none outline-none bg-transparent w-[80%]"
                />
            </div>
                <div className="md:hidden cursor-pointer ">
            <FaBarsStaggered size={36} onClick={() => HandleToggle()}/>

                </div>
            </nav>
        );
        }
