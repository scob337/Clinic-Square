import { useState } from "react";
import CalcLayout from "./CalcLayout";
import IncreaseCard from "./IncreaseCard";

export default function BMICalculator() {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(165);
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    }
  };
  return (
    <CalcLayout Title={"BMI Calculator"}>
      <div className="w-[90%] max-sm:w-[70%] max-w-[400px] m-auto p-5 rounded-md shadow-lg bg-white flex  flex-col gap-5">

        <div className="flex gap-6 max-md:flex  max-sm:flex-col ">
          <IncreaseCard Title="Weight" DefaultV={weight} Value={setWeight} />
          <IncreaseCard Title="Height" DefaultV={height} Value={setHeight} />
        </div>
        
        <button
          onClick={calculateBMI}
          className="w-full bg-[#00ACA8] text-white p-2 rounded"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-4 text-center">
            <h2 className="text-xl">Your BMI: {bmi}</h2>
            <p className="text-lg">{message}</p>
          </div>
        )}
      </div>
    </CalcLayout>
  );
}
