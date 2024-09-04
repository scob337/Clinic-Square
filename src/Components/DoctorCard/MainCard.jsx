import DocData from './DoctorsData'
import { FaStar } from "react-icons/fa";

export default function MainCard() {
  
  return (
    <div className="w-full h-fit p-5 flex gap-4 justify-center items-center flex-wrap  m-auto">

      {DocData.map((item) => {
        return (
          <div className="max-sm:w-[100%] md:w-[300px]  lg:w-[250px] h-[300px] 
          rounded-lg
          flex flex-col justify-center items-center gap-2 ring-1 ring-[#00ACA8]" key={item.id}> 

            <div className="flex flex-col items-center relative gap-2
             before:content-[''] before:absolute before:top-9 before:left-0 before:w-[100%] before:h-[50%] before:bg-[#00ACA8] before:opacity-60  before:rounded-lg
            
            ">
            <img src={item.image} alt="Doctor" className="w-[70%] h-[150px] object-cover  z-[9999]
            
            " />
            <h2 className="text-center text-[14px] font-bold text-[#404040]">{item.name}</h2>
            <p className="text-center text-[12px] text-[#767676]">{item.speciality}</p>
            <p className="text-center text-[12px] flex items-center gap-2"><FaStar color='#F8A019'
            size={18}/> 
            <span className="text-[#000] font-semibold" > ({item.rank})</span></p>
            </div>
            <button className='ring-1 ring-[#00ACA8] p-2 w-[70%] rounded-2xl text-[13px]
            text-[#00ACA8] font-semibold
            transition duration-200 hover:bg-[#00ACA8] hover:text-white
            '>Book an Appointment</button>
          </div>
        )
      })}

    </div>
  )
}
