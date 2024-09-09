import { useState } from "react";
import BMICalculator from "../../Components/CalcCards/BMI/BMI";
import Period from "../../Components/CalcCards/Period/Period";
import Preg from "../../Components/CalcCards/Preg/Preg";
import Calorie from "../../Components/CalcCards/Calories/Calorie";
import { useTranslation } from "react-i18next";

export default function Services() {
  const [Tab, setTab] = useState("BMI");
  const [Show, setShow] = useState(false);
  const [Active, setActive] = useState("BMI");

  // هذه الدالة تستخدم لإخفاء النتيجة في BMICalculator عند تغيير الـ Tab
  const HandleChange = (newTab) => {
    setTab(newTab);
    setShow(false); // إعادة ضبط النتيجة عند تغيير التاب
    setActive(newTab)
  };
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-[70vh] ">
      <div className="flex justify-center w-full gap-3">
        <button
          className={`min-w-[100px] ring-1 ring-[#00ACA8] text-[#00aca8] rounded-lg p-2 font-semibold w-fit hover:bg-[#00aca8] hover:text-white transition ${Active ==="BMI" ? " bg-[#00ACA8]   text-white":""}`}
          onClick={() => HandleChange("BMI")}
        >
          {t("BMI")}
        </button>
        <button
         className={`min-w-[100px] ring-1 ring-[#00ACA8] text-[#00aca8] rounded-lg p-2 font-semibold w-fit hover:bg-[#00aca8] hover:text-white transition ${Active ==="Period" ? " bg-[#00ACA8]   text-white":""}`}
          onClick={() => HandleChange("Period")}
        >
          {t("Period")}
        </button>
        <button
          className={`min-w-[100px] ring-1 ring-[#00ACA8] text-[#00aca8] rounded-lg p-2 font-semibold w-fit hover:bg-[#00aca8] hover:text-white transition ${Active ==="Pregnancy" ? " bg-[#00ACA8]   text-white":""}`}
          onClick={() => HandleChange("Pregnancy")}
        >
          {t("Pregnancy")}
        </button>
        <button
          className={`min-w-[100px] ring-1 ring-[#00ACA8] text-[#00aca8] rounded-lg p-2 font-semibold w-fit hover:bg-[#00aca8] hover:text-white transition ${Active ==="Calorie" ? " bg-[#00ACA8]   text-white":""}`}
          onClick={() => HandleChange("Calorie")}
        >
          {t("Calories")}
        </button>
      </div>

      {/* عرض الـ BMICalculator فقط عند اختيار BMI */}
      {Tab === "BMI" && <BMICalculator Result={Show} HideResult={setShow}  />}
      {Tab === "Period" && <Period />}
      {Tab === "Pregnancy" && <Preg />}
      {Tab === "Calorie" && <Calorie />}
    </div>
  );
}
