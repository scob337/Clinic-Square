import  { useState } from "react";
import CalcLayout from "../CalcLayout"; // صورة المرأة الحامل التي تم تحميلها
import Pregenant from '../../../assets/Pregnant.png'
export default function PregnancyCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [result, setResult] = useState("");

  // دالة الحساب
  const handleSubmit = (e) => {
    e.preventDefault();

    // تأكد من أن تاريخ آخر دورة مدخل
    if (!lastPeriodDate) {
      alert("Please fill in the last period date.");
      return;
    }

    // تحويل تاريخ آخر دورة إلى كائن Date
    const start = new Date(lastPeriodDate);

    // إضافة 280 يومًا (40 أسبوعًا) لحساب موعد الولادة المتوقع
    const dueDate = new Date(start);
    dueDate.setDate(start.getDate() + 280);

    // تنسيق التاريخ بالشكل المطلوب (YYYY-MM-DD)
    const formattedDueDate = dueDate.toISOString().split("T")[0];

    // وضع النتيجة في الـ state
    setResult(`Your expected due date is: ${formattedDueDate}`);
  };

  return (
    <div className="min-h-screen w-[100%] bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* العنوان مع صورة */}
      <CalcLayout Title="Pregnancy calculator" />
      <p className="text-center  text-[#898888]
        text-[16px] w-[550px]  font-semibold
        max-md:w-[300px] max-md:text-[12px]
        ">Use our menstrual cycle calculator to calculate your next period, ovulation & due date. Enter the date of your last period, how long it lasted, the length of your average cycle and press Calculate:</p>
      <div className="w-56 h-56 text-white rounded-full flex flex-col justify-center items-center text-center">
        <img
            src={Pregenant}
        />
      </div>

      {!result ? (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          {/* عنوان */}


          {/* النموذج */}
          <form onSubmit={handleSubmit}>
            {/* Last period start date */}
            <div className="mb-6">
              <label
                htmlFor="last-period-date"
                className="block text-gray-700 mb-2 font-medium"
              >
                Start date of last period
              </label>
              <input
                type="date"
                id="last-period-date"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:border-teal-500"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-teal-500 text-white p-8 rounded-full shadow-lg max-w-sm w-full text-center mt-8">
          <h2 className="text-xl font-bold">Due Date</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
