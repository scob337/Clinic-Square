    import { useState } from "react";

    export default function FilterBox() {
    const [filter, setFilter] = useState("doctor");

    return (
        <div className=" w-[50%] h-[300px] mb-3  m-auto shadow-lg  rounded-xl overflow-hidden shadow-[#4400ff27] ">
        <div
            className="w-[100%] h-[60px] bg-white  flex items-center justify-between gap-2 ring-1 ring-[#00ACA8] rounded-t-xl>
            shadow-lg 
        "
        >
            <button
            className={`
            font-bold  p-3 w-[49%] h-full ${
                filter === "doctor"
                ? "  bg-[#00ACA8] text-white"
                : "bg-transparent text-[#00ACA8]"
            } `}
            onClick={() => setFilter("doctor")}
            >
            Find a doctor
            </button>
            <button
                       className={`
                        font-bold  p-3 w-[49%] h-full ${
                            filter === "Symptoms"
                            ? "  bg-[#00ACA8] text-white"
                            : "bg-transparent text-[#00ACA8]"
                        } `}
            onClick={() => setFilter("Symptoms")}
            >
            Find by Symptoms
            </button>
        </div>
        </div>
    );
    }
