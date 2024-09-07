import { CgCalendarDates } from "react-icons/cg";
import { GiHighGrass } from "react-icons/gi";
import { MdCalculate } from "react-icons/md";
import { GiSyringe } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function CalcServices() {
  const CardData = [
    {
      id: 1,
      head: "Calorie Calculatior",
      text: "  A calorie calculator helps estimate your daily caloric needs. It’s a useful tool for managing weight and achieving dietary objectives. ",
      icon: <GiHighGrass size={49} />,
    },
    {
      id: 2,
      head: "Period Calculator",
      text: "A period calculator helps predict the timing of your menstrual cycle, It’s a valuable tool for managing menstrual health and planning. ",
      icon: <CgCalendarDates size={49} />,
    },
    {
      id: 3,
      head: "BMI Calculator",
      text: "A BMI calculator measures your Body Mass Index by using your height and weight. It helps in providing valuable insights into  your overall health status ",
      icon: <MdCalculate size={49} />,
    },
    {
      id: 4,
      head: "Pregnancy Calculator",
      text: "A pregnancy calculator estimates your due date and tracks your pregnancy milestones based on your last menstrual period or conception date.",
      icon: <GiSyringe size={49} />,
    },
  ];
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-5 mb-[50px] h-fit">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[24px] font-semibold text-[#404040]">
          Calculators
        </h1>
        <p className="text-[14px] text-[#B4B4B4]">
          Achieve better health through tailored calculations and insights.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5">
        {CardData.map((data) => (
          <NavLink key={data.id} to={"/services"}>
            <div
              className={` flex p-2  items-start justify-start gap-5 shadow-lg shadow-[#ccc] ring-1 ring-[#f5eaea]  text-black 
                w-[280px] h-[180px] rounded-[20px]
                hover:bg-[#00aca8] transition-all hover:text-white group
                `}
            >
              <div
                className="p-3  group-hover:text-white  transition-all rounded-full
                text-[#00aca8]"
              >
                {data.icon}
              </div>
              <div className="flex flex-col items-center justify-center w-[100%] gap-3 pt-2">
                <h1
                  className="text-[15px] font-bold w-full
                    group-hover:text-white   transition-all
                    text-[#131313]"
                >
                  {data.head}
                </h1>
                <p className="text-[10px]   w-full">{data.text}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
