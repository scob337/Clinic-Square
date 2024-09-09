import { useState, useEffect } from "react";
import CalcLayout from "../CalcLayout";
import IncreaseCard from "../IncreaseCard";
import BMIResult from "./Result";
import { useTranslation } from "react-i18next";

export default function BMICalculator({ HideResult, Result }) {
  const { t } = useTranslation();
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(165);
  const [bmi, setBmi] = useState(33.3);
  const [message, setMessage] = useState("");
  const [ShowResult, setShowResult] = useState(Result);

  useEffect(() => {
    setShowResult(Result);
  }, [Result]);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage(t("Underweight")); // ترجمة الحالة
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage(t("Normal weight")); // ترجمة الحالة
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage(t("Overweight")); // ترجمة الحالة
      } else {
        setMessage(t("Obesity")); // ترجمة الحالة
      }
      HideResult(true);
    }
  };

  return (
    <CalcLayout Title={t("BMI Calculator")}>
      <div className="w-[90%] max-sm:w-[70%] max-w-[400px] m-auto p-5 rounded-md  flex flex-col">
        {ShowResult && bmi ? (
          <BMIResult
            BMI={bmi}
            Message={t(message)}
            Weight={weight}
            Height={height}
          />
        ) : (
          <div>
            <div className="flex gap-6 max-md:flex max-sm:flex-col justify-center">
              <IncreaseCard
                Title={t("Weight")} // ترجمة "Weight"
                DefaultV={weight}
                Value={setWeight}
              />
              <IncreaseCard
                Title={t("Height")} // ترجمة "Height"
                DefaultV={height}
                Value={setHeight}
              />
            </div>

            <button
              onClick={calculateBMI}
              className="
              transition
              w-full m-auto ring-[#00ACA8] ring-1 bg-white text-[#00ACA8] p-2 rounded mt-2
              hover:text-white   hover:bg-[#00ACA8]
              "
            >
              {t("Calculate BMI")} {/* ترجمة زر "Calculate BMI" */}
            </button>
          </div>
        )}
      </div>
    </CalcLayout>
  );
}
