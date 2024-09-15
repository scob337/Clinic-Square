import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

export default function Doctors_Card({ Item, Button, Type, TimeArray = [] }) {
	const { t } = useTranslation();
	const { name, speciality, image, rank } = Item;

	return (
		<div
			className={`w-full md:w-[300px] lg:w-[250px] h-[300px] rounded-lg flex flex-col justify-center items-center gap-2 ring-1 ring-[#00ACA8]

		${Type === "Order" && " h-[350px] ring-0 shadow-lg rounded-lg w-[350px] shadow-[#ccc] drop-shadow-md"} 
		`}
		>
			<div
				className={`relative flex flex-col items-center gap-2 before:content-[''] before:absolute before:top-9 before:left-0 before:w-full before:h-1/2 before:bg-[#00ACA8] before:opacity-60 before:rounded-lg
				${Type === "Order" && " justify-between gap-1  before:top-5"} 
			`}
			>
				<img
					loading="lazy"
					src={image}
					alt={t("Doctor image")}
					className="w-3/4 h-[150px] object-cover z-10"
				/>
				<h2
					className={`text-center text-[14px] font-bold text-[#404040]
				${Type === "Order" && " mt-11 text-[18px]"}
				`}
				>
					{t(name)}
				</h2>
				<p
					className={`
					${Type === "Order" && " font-bold text-[18px]"}
					text-center text-[12px] text-[#767676]`}
				>
					{t(speciality)}
				</p>
				{Type === "Doctor" && (
					<p className="text-center text-[12px] flex items-center gap-2">
						<FaStar color="#F8A019" size={18} />
						<span className="text-[#000] font-semibold">({rank})</span>
					</p>
				)}
				{Type === "Order" && (
					<div>
						{TimeArray.map((timeEntry, index) => (
							<div
								key={index}
								className="text-center text-[#00ACA8] w-3/3 flex flex-wrap justify-between p-2 items-center font-bold gap-4"
							>
								<p> {timeEntry.time}</p>
								<p> {timeEntry.date}</p>
								<p className="text-center w-full font-[500] ">
									{" "}
									{timeEntry.City}
								</p>
							</div>
						))}
					</div>
				)}
			</div>

			{Button}
		</div>
	);
}
