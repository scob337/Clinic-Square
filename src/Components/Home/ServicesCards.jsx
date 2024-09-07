    import { FaHeartPulse } from "react-icons/fa6";
    import { TbTestPipe } from "react-icons/tb";
    import { FaSnapchat } from "react-icons/fa";
    import { GiSyringe } from "react-icons/gi";

    export default function ServicesCards() {
    const CardData = [
        {
        id: 1,
        text: "Well equipped lab ",
        icon: <TbTestPipe size={49} color="#00aca8" />,
        },
        {
        id: 2,
        text: "Specialized doctors",
        icon: <FaHeartPulse size={49} />,
        active: true,
        },
        {
        id: 3,
        text: "Online Appointment",
        icon: <FaSnapchat size={49} color="#00aca8" />,
        },
        {
        id: 4,
        text: "Convenient Pharmacy",
        icon: <GiSyringe size={49} color="#00aca8" />,
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-5">
        {CardData.map((data) => (
            <div
            key={data.id}
            className={`${
                data.active && " bg-[#00ACA8] text-white"
            } flex flex-col items-center justify-center gap-5 shadow-lg shadow-[#ccc] ring-1 ring-[#f5eaea]  text-black 
                    w-[200px] h-[180px] rounded-[20px]`}
            >
            {data.icon}
            <p>{data.text}</p>
            </div>
        ))}
        </div>
    );
    }
