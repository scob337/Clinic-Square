import ServicesCards from "./ServicesCards";

export default function CardsSec() {
  return (
    <div className="w-[70%] gap-9  min-h-[40vh] h-fit m-auto flex flex-col items-center mb-3 justify-center">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#404040] text-[24px] lg:text-[36px] font-semibold"> Our Medical Services</h1>
        <p className="w-[60%] text-center text-[#B4B4B4] text-[12px]">We are dedicated to serve you
        best medical services</p>
        </div>     


        <ServicesCards/>   
    </div>
  )
}
