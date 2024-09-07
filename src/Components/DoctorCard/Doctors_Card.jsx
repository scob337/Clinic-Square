import { FaStar } from "react-icons/fa";

export default function Doctors_Card({Item , Button}) {

    const {name, speciality, image, rank } = Item;
  return (
    <div className="max-sm:w-[100%] md:w-[300px]  lg:w-[250px] h-[300px] 
    rounded-lg
    flex flex-col justify-center items-center gap-2 ring-1 ring-[#00ACA8]" > 

      <div className="flex flex-col items-center relative gap-2
       before:content-[''] before:absolute before:top-9 before:left-0 before:w-[100%] before:h-[50%] before:bg-[#00ACA8] before:opacity-60  before:rounded-lg
      
      ">
      <img loading="lazy" src={image} alt="Doctor" className="w-[70%] h-[150px] object-cover  z-[999]
      
      " />
      <h2 className="text-center text-[14px] font-bold text-[#404040]">{name}</h2>
      <p className="text-center text-[12px] text-[#767676]">{speciality}</p>
      <p className="text-center text-[12px] flex items-center gap-2"> <FaStar color='#F8A019'
      size={18}/> 
      <span className="text-[#000] font-semibold" > ({rank})</span></p>
      </div>

      {Button}
    </div>
  )
}
