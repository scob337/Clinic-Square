import MainCard from "../Components/DoctorCard/MainCard";

export default function Doctors() {
  return (
    <div className="w-[70%] gap-9  min-h-[40vh] h-fit m-auto flex flex-col items-center mb-3 justify-center">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#404040] text-[24px] lg:text-[36px] font-semibold">Meet Our Family</h1>
        <p className="w-[100%] text-center text-[#616161] text-[12px]">Well  qualified doctors are ready to serve you</p>
        </div>     
        <MainCard/>   
    </div>
  )
}
