import { useState } from "react";
import BMICalculator from "../../Components/CalcCards/BMI/BMI";
import Period from "../../Components/CalcCards/Period/Period";

export default function Services() {
  const [Tab, setTab] = useState("BMI");
  const [Show, setShow] = useState(false);

  // هذه الدالة تستخدم لإخفاء النتيجة في BMICalculator عند تغيير الـ Tab
  const HandleChange = (newTab) => {
    setTab(newTab);
    setShow(false); // إعادة ضبط النتيجة عند تغيير التاب
  };

  return (
    <div className="w-full min-h-[70vh] ">
      <div className="flex justify-center w-full gap-3">
        <button
          className="w-[100px] bg-gray-300 rounded-lg p-2 font-semibold"
          onClick={() => HandleChange("BMI")}
        >
          BMI
        </button>
        <button
          className="w-[100px] bg-gray-300 rounded-lg p-2 font-semibold"
          onClick={() => HandleChange("Period")}
        >
          Period
        </button>
        <button
          className="w-[100px] bg-gray-300 rounded-lg p-2 font-semibold"
          onClick={() => HandleChange("Pregnancy")}
        >
          Pregnancy
        </button>
        <button
          className="w-[100px] bg-gray-300 rounded-lg p-2 font-semibold"
          onClick={() => HandleChange("Calorie")}
        >
          Calories
        </button>
      </div>

      {/* عرض الـ BMICalculator فقط عند اختيار BMI */}
      {Tab === "BMI" && <BMICalculator Result={Show} HideResult={setShow}  />}
      {Tab === "Period" && <Period />}
    </div>
  );
}
