import { useState } from "react";
import PeriodResult from "./Result";
import CalcLayout from "../CalcLayout";
import Female from '../../../assets/female.png';
import { useTranslation } from "react-i18next";

export default function Period() {
  const [periodLength, setPeriodLength] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [startDate, setStartDate] = useState("");
  const [result, setResult] = useState("");
  const { t } = useTranslation();

  // دالة الحساب
  const handleSubmit = (e) => {
    e.preventDefault();

    // تأكد من أن جميع القيم مدخلة
    if (!periodLength || !cycleLength || !startDate) {
      alert(t("Please fill in all fields."));
      return;
    }

    // تحويل تاريخ البداية إلى كائن Date
    const start = new Date(startDate);
    
    // حساب تاريخ الدورة القادمة بناءً على طول الدورة
    const nextPeriodDate = new Date(start);
    nextPeriodDate.setDate(start.getDate() + parseInt(cycleLength));

    // تنسيق التاريخ بالشكل المطلوب (YYYY-MM-DD)
    const formattedNextPeriod = nextPeriodDate.toISOString().split("T")[0];

    // وضع النتيجة في الـ state مع الترجمة
    setResult(t("Your next period is likely to start on") + `: ${formattedNextPeriod}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-5 mb-5">
      <CalcLayout Title={t("Period")} />
      <p className="text-center text-[#898888] text-[16px] w-[550px] font-semibold max-md:w-[300px] max-md:text-[12px]">
        {t("Use our menstrual cycle calculator to calculate your next period, ovulation & due date. Enter the date of your last period, how long it lasted, the length of your average cycle and press Calculate:")}
      </p>
      <div className="w-56 h-56 text-white rounded-full flex flex-col justify-center items-center text-center">
        <img src={Female} alt="Female Illustration" />
      </div>

      {/* Form section when there is no result */}
      {!result && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-center text-lg font-semibold mb-6">
            {t("Tell us about your period cycle:")}
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Period Length */}
            <div className="mb-4">
              <label htmlFor="period-length" className="block text-gray-700 mb-2 font-medium">
                {t("Period length")} (days)
              </label>
              <select
                id="period-length"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:border-teal-500"
                value={periodLength}
                onChange={(e) => setPeriodLength(e.target.value)}
              >
                <option value="">{t("Select length")}</option>
                <option value="3">3 {t("days")}</option>
                <option value="4">4 {t("days")}</option>
                <option value="5">5 {t("days")}</option>
              </select>
            </div>

            {/* Cycle Length */}
            <div className="mb-4">
              <label htmlFor="cycle-length" className="block text-gray-700 mb-2 font-medium">
                {t("Cycle length")} (days)
              </label>
              <select
                id="cycle-length"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:border-teal-500"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
              >
                <option value="">{t("Select length")}</option>
                <option value="28">28 {t("days")}</option>
                <option value="30">30 {t("days")}</option>
                <option value="32">32 {t("days")}</option>
              </select>
            </div>

            {/* Last period start date */}
            <div className="mb-6">
              <label htmlFor="start-date" className="block text-gray-700 mb-2 font-medium">
                {t("When did your last period start?")}
              </label>
              <input
                type="date"
                id="start-date"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:border-teal-500"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition"
              >
                {t("Calculate")}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Result section */}
      {result && <PeriodResult Result={result} />}
    </div>
  );
}
