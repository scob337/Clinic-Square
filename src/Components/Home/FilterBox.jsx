import { useState } from "react";
import DoctorSearch from "./DoctorSearch";
import SelectFilter from "./SelectFilter";
import { useTranslation } from "react-i18next";

export default function FilterBox() {
  const [filter, setFilter] = useState("doctor");
  const { t } = useTranslation();

  return (
		<div
			className={` {
            p-3
          ${filter === "doctor" ? "  lg:min-h-[140px]" : "lg:h-fit"} 
                w-[70%]  mb-3  m-auto shadow-lg  rounded-xl overflow-hidden shadow-[#4400ff27] 
        `}
		>
			<div
				className="w-[100%] h-fit bg-white  flex items-center justify-between gap-2 ring-1 ring-[#00ACA8] rounded-t-xl>
            shadow - lg 
            flex-wrap max-md:justify-center"
			>
				<button
					className={`max-md:text-[13px]
            font-bold  p-3 w-[49%] h-full 
            max-md:w-full ${
							filter === "doctor"
								? "  bg-[#00ACA8] text-white"
								: "bg-transparent text-[#00ACA8]"
						} `}
					onClick={() => setFilter("doctor")}
				>
					{t("Find a doctor")}
				</button>
				<button
					className={`
                        max-md:text-[13px] font-bold  p-3 w-[49%] h-full 
                        max-md:w-full ${
													filter === "Symptoms"
														? "  bg-[#00ACA8] text-white"
														: "bg-transparent text-[#00ACA8]"
												} `}
					onClick={() => setFilter("Symptoms")}
				>
					{t("Find by Symptoms")}
				</button>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className="">
				{filter === "doctor" ? <DoctorSearch /> : <SelectFilter />}
			</div>
		</div>
	);
}
