import Doctors_Card from './Doctors_Card';
import DocData from './DoctorsData'

export default function MainCard() {
  
  return (
    <div className="w-full h-fit p-5 flex gap-4 justify-center items-center flex-wrap  m-auto">

      {DocData.map((item) => {
        return (
          <Doctors_Card key={item.id} Item={item} Button={      <button className='ring-1 ring-[#00ACA8] p-2 w-[70%] rounded-2xl text-[13px]
            text-[#00ACA8] font-semibold
            transition duration-200 hover:bg-[#00ACA8] hover:text-white
            '>Book an Appointment</button>}/>
          
        )
      })}
  
    </div>
  )
}
