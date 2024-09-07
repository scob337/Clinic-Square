import { useState } from "react";
import BMICalculator from "../../Components/CalcCards/BMI";

export default function Services() {
  const [Tab , setTab ] = useState("BMI")
  return (
    <div className="w-full">
      <div className="flex justify-center w-full gap-3">
        <button className=" w-[100px] bg-gray-300 rounded-lg p-2 font-semibold" onClick={() => setTab("BMI")}>BMI</button> 
        <button className=" w-[100px] bg-gray-300 rounded-lg p-2 font-semibold" onClick={() => setTab("BMI")}>BMI</button> 
        <button className=" w-[100px] bg-gray-300 rounded-lg p-2 font-semibold" onClick={() => setTab("BMI")}>BMI</button> 
        <button className=" w-[100px] bg-gray-300 rounded-lg p-2 font-semibold" onClick={() => setTab("BMI")}>BMI</button> 
      </div>
      {Tab === "BMI" && <BMICalculator/>}
    </div>
  )
}
