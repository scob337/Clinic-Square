import { useState } from "react";
import CalcLayout from "../CalcLayout";
import Pregenant from '../../../assets/Pregnant.png';
import { useTranslation } from 'react-i18next';

export default function PregnancyCalculator() {
  const { t } = useTranslation(); // الحصول على دالة الترجمة

  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [result, setResult] = useState("");
  const [weeksRemaining, setWeeksRemaining] = useState("");
  const [daysRemaining, setDaysRemaining] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!lastPeriodDate) {
      alert(t("Please fill in the last period date."));
      return;
    }

    const start = new Date(lastPeriodDate);
    const dueDate = new Date(start);
    dueDate.setDate(start.getDate() + 280); // 280 يومًا (40 أسبوعًا)

    const today = new Date();
    const timeDifference = dueDate - today;

    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingWeeks = Math.floor(remainingDays / 7);
    const remainingDaysInWeek = remainingDays % 7;

    // حساب الوزن المتوقع للجنين بناءً على الأسابيع (متوسط الوزن بالجرامات)
    const totalWeeks = 40;
    const weeksElapsed = totalWeeks - remainingWeeks;
    let weight = 0;

    if (weeksElapsed <= 12) {
      weight = 14 * weeksElapsed; // الوزن التقديري للأشهر الثلاثة الأولى
    } else if (weeksElapsed <= 27) {
      weight = 100 + 30 * (weeksElapsed - 12); // الأشهر الثلاثة الثانية
    } else {
      weight = 1000 + 200 * (weeksElapsed - 27); // الأشهر الثلاثة الأخيرة
    }

    const formattedDueDate = dueDate.toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long'
    });

    const progressPercentage = Math.min((weeksElapsed / totalWeeks) * 100, 100);

    setResult(t("Your expected due date is: ") + formattedDueDate);
    setWeeksRemaining(remainingWeeks);
    setDaysRemaining(remainingDaysInWeek);
    setCurrentWeight(weight.toFixed(2));
    setProgress(progressPercentage);
  };

  return (
    <div className="min-h-screen w-[100%] bg-gray-50 flex flex-col items-center justify-center p-4">
      <CalcLayout Title={t("Pregnancy calculator")} />
      <p className="text-center text-[#898888] text-[16px] w-[550px] font-semibold max-md:w-[300px] max-md:text-[12px]">
        {t("Use our menstrual cycle calculator to calculate your next period, ovulation & due date. Enter the date of your last period, how long it lasted, the length of your average cycle and press Calculate:")}
      </p>
      <div className="w-56 h-56 text-white rounded-full flex flex-col justify-center items-center text-center">
        <img src={Pregenant} alt={t("Pregnant")} />
      </div>

      {!result ? (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="last-period-date" className="block text-gray-700 mb-2 font-medium">
                {t("Start date of last period")}
              </label>
              <input
                type="date"
                id="last-period-date"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:border-teal-500"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition">
                {t("Calculate")}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className=" text-black p-8 rounded-full shadow-lg max-w-sm w-full text-center mt-8">
          <h2 className="text-xl font-bold">{t("Due Date")}</h2>
          <p>{result}</p>
          <p>{t("Weeks remaining")}: {weeksRemaining} {t("weeks")} {t("and")} {daysRemaining} {t("days")}</p>
          <p>{t("Estimated baby weight")}: {currentWeight} {t("grams")}</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-300 rounded-full h-4 mt-4 relative overflow-hidden">
            <div className="absolute w-1/3 h-4 bg-green-500 rounded-l-full"></div>
            <div className="absolute w-1/3 h-4 bg-yellow-500 left-1/3"></div>
            <div className="absolute w-1/3 h-4 bg-red-500 rounded-r-full right-0"></div>

            {/* نقطة المرحلة الحالية */}
            <div
              className="absolute bg-red-500 h-[15px] w-[15px] rounded-full top-[0px] z-[9999]"
              style={{ left: `${progress}%` }}
            >
            </div>
            <div className="absolute bg-yellow-500 h-[15px] w-[30px] rounded-full left-[7px] top-[0px] z-[0]"
            style={{ left: `${progress - 20}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
