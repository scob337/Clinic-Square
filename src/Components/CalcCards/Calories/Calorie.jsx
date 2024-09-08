import { useState } from "react";
import CalcLayout from "../CalcLayout";
import IncreaseCard from "../IncreaseCard";
import CalResult from "./CalResult";
import { useTranslation } from "react-i18next";

export default function Calorie() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState(70); // الوزن الافتراضي
  const [age, setAge] = useState(25); // العمر الافتراضي
  const [height, setHeight] = useState(170); // الطول الافتراضي
  const [gender, setGender] = useState("male"); // الجنس الافتراضي
  const [calories, setCalories] = useState(0);

  // دالة حساب السعرات الحرارية باستخدام معادلة Mifflin-St Jeor
  const calculateCalories = () => {
    const heightInCm = height;
    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * age - 161;
    }
    setCalories(BMR);
  };

  return (
    <CalcLayout Title={t("Calorie Calculator")}>
      <div className="flex flex-col">
        <div className="flex gap-5">
          {/* بطاقة الوزن */}
          <IncreaseCard
            Title={t("Weight")} // ترجمة النص
            DefaultV={70}
            Value={(value) => setWeight(value)} // تحديث الوزن
          />

          {/* بطاقة العمر */}
          <IncreaseCard
            Title={t("Age")} // ترجمة النص
            DefaultV={25}
            Value={(value) => setAge(value)} // تحديث العمر
          />
        </div>

        <div className="bg-[#D9D9D980] p-5 rounded-md max-w-[400px] w-full m-5">
          <h1 className="font-bold text-lg mb-3">{t("Gender")}</h1>
          <div className="flex justify-around gap-2">
            <button
              onClick={() => setGender("male")}
              className={`py-2 px-4 rounded-lg w-full text-center ring-1 ring-[#00ACA8] text-[#00ACA8] hover:bg-[#00ACA8] hover:text-white transition ${
                gender === "male"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {t("Male")}
            </button>
            <button
              onClick={() => setGender("female")}
              className={`py-2 px-4 rounded-lg w-full text-center ring-1 ring-[#00ACA8] text-[#00ACA8] hover:bg-[#00ACA8] hover:text-white transition ${
                gender === "female"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {t("Female")}
            </button>
          </div>
        </div>

        <div className="w-[60%] max-sm:w-[70%] mt-10 bg-[#D9D9D980] max-w-[400px] h-[150px] m-auto p-5 rounded-md flex flex-col gap-3 relative text-center">
          <h1 className=" font-bold text-[36px]">{t("Height")}</h1>
          <h1 className="text-[#00ACA8]">
            <span className="font-bold text-[36px] text-[#00ACA8]">{height}</span> {t("cm")}
          </h1>

          <input
            className="w-full h-2 bg-gray-300 rounded-lg text-[#00ACA8] appearance-auto cursor-pointer range-slider relative z-10"
            type="range"
            step={1}
            min={100}
            max={250}
            value={height}
            onChange={(e) => setHeight(+e.target.value)}
          />
        </div>

        <button
          onClick={calculateCalories}
          className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition mt-4"
        >
          {t("Calculate Calories")}
        </button>

        <div className="m-4">
          {calories > 0 && <CalResult Cal={calories} />}
        </div>
      </div>
    </CalcLayout>
  );
}
