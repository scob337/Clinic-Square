import { NavLink } from 'react-router-dom';
import Logo  from '../../assets/Clinic3-removebg-preview.png'
import { CiSearch } from "react-icons/ci";

export default function Index() {

    const Data = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Services",
            link: "/services",
        },
        {
            id: 3,
            name: "Doctors",
            link: "/doctors",
        },
        {
            id: 4,
            name: "About us",
            link: "/about",
        },
        {
            id: 5,
            name: "Labs & Pharmacy",
            link: "/pharmacy",
        },
    ]


  return (
    <nav className="flex justify-evenly w-[100%] p-3 h-[145px] bg-white  items-center">
        <div className=" logo w-[200px]">
            <img src={Logo} alt="Logo" className='w-[200px] h-[110px] object-cover'/>
        </div>
        <ul className='flex items-center justify-center gap-5 1/3 w'>

            {Data.map((item) => (
                <li key={item.id} className='font-[600]
                group
                '>
                    <NavLink to={item.link}
                    className={`
                        group-hover:text-[#00ACA8] 
                        
                            
                        `}
                    >{item.name}</NavLink>
                </li>
            ))}

        </ul>
            <div className='
            bg-[#F1F4FC]
            flex items-center justify-center p-1 w-[200px] gap-2 rounded-lg ring-1 ring-slate-600'>


            <CiSearch size={24} color='#00ACA8 ' cursor={"pointer"}/>
            <input type="text" placeholder="Search" className="border-none outline-none w-[80%]"/>

            </div>
    </nav>
  )
}
