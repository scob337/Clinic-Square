import { useTranslation } from "react-i18next";

// BMIResult.jsx
export default function BMIResult({ BMI, Message, Weight, Height }) {
	const maxWeight = 100; // الوزن الأقصى الذي نعتبره 100%
	const percentage = (BMI / maxWeight) * 100;

	const strokeDashoffset = ((50 - percentage) / 100) * 565.48; // 565.48 هي محيط الدائرة
	const { t } = useTranslation();

	return (
		<div className="relative flex  flex-col gap-4 justify-center   items-center w-[400px] h-fit p-3">
			<div className="w-[200px] h-[200px] shadow-lg rounded-full shadow-gray-400">
				<svg
					width="200"
					height="200"
					viewBox="-25 -25 250 250"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						r="90"
						cx="100"
						cy="100"
						fill="transparent"
						stroke="#e0e0e0"
						strokeWidth="31"
						strokeDasharray="565.48px"
						strokeDashoffset="0"
					></circle>
					<circle
						r="90"
						cx="100"
						cy="100"
						stroke="#4cbbbd"
						strokeWidth="28"
						strokeLinecap="round"
						strokeDasharray="565.48px"
						strokeDashoffset={strokeDashoffset}
						fill="transparent"
					></circle>
					<text
						x="40%"
						y="40%"
						fill="#000000"
						fontSize="52px"
						fontWeight="bold"
						textAnchor="middle"
						dominantBaseline="middle"
					>
						{BMI}
					</text>
				</svg>
			</div>
			<h3 className="font-bold text-[22px] w-full text-center">
				{localStorage.getItem("i18nextLng") === "ar" ? (
					<>
						{t("You have")} {t("body")}{" "}
						<span className="text-[#00ACA8]">{Message}</span>!
					</>
				) : (
					<>
						{t("You have")} <span className="text-[#00ACA8]">{Message}</span>{" "}
						{t("body")}!
					</>
				)}
			</h3>

			<div className="flex flex-col justify-between  gap-2 bg-white shadow-md shadow-[#00000040]  w-[300px] min-h-[250px] h-fit p-3  rounded-lg ">
				<p className="flex justify-between items-center p-1  text-[#00000080]">
					{t("Less than")} 18.5{" "}
					<span className="font-bold text-[#000]">{t("Underweight")}</span>{" "}
				</p>
				<p className="flex justify-between items-center p-1  text-[#00000080]">
					18.5 {t("to")} 24.9{" "}
					<span className="font-bold text-[#000]">{t("Healthy")}</span>{" "}
				</p>
				<p className="flex justify-between items-center p-1  text-[#00000080]">
					25 {t("to")} 29.9{" "}
					<span className="font-bold text-[#000]">{t("Overweight")}</span>
				</p>
				<p className="flex justify-between items-center p-1  text-[#00000080]">
					30 {t("or above")}{" "}
					<span className="font-bold text-[#000]">{t("Obese")}</span>
				</p>
			</div>
		</div>
	);
}
