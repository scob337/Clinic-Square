import { useState } from "react";
import CalcLayout from "../CalcLayout";
import Pregenant from "../../../assets/Pregnant.png";
import { useTranslation } from "react-i18next";

// دالة لتحديد حجم الجنين بناءً على عدد الأسابيع

export default function PregnancyCalculator() {
  const { t } = useTranslation();
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [result, setResult] = useState("");
  const [weeksRemaining, setWeeksRemaining] = useState("");
  const [daysRemaining, setDaysRemaining] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [progress, setProgress] = useState(50);
  const [weeksElapsed, setWeeksElapsed] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!lastPeriodDate) {
      alert(t("Please fill in the last period date."));
      return;
    }

    const start = new Date(lastPeriodDate);
    const dueDate = new Date(start);
    dueDate.setDate(start.getDate() + 280);

    const today = new Date();
    const timeDifference = dueDate - today;

    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingWeeks = Math.floor(remainingDays / 7);
    const remainingDaysInWeek = remainingDays % 7;

    const totalWeeks = 40;
    const weeksElapsed = totalWeeks - remainingWeeks;
    setWeeksElapsed(weeksElapsed);

    let weight = 0;
    if (weeksElapsed <= 12) {
      weight = 14 * weeksElapsed;
    } else if (weeksElapsed <= 27) {
      weight = 100 + 30 * (weeksElapsed - 12);
    } else {
      weight = 1000 + 200 * (weeksElapsed - 27);
    }

    const formattedDueDate = dueDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
    });

    const progressPercentage = Math.min((weeksElapsed / totalWeeks) * 100, 100);

    setResult(t("Your expected due date is: ") + formattedDueDate);
    setWeeksRemaining(remainingWeeks);
    setDaysRemaining(remainingDaysInWeek);
    setCurrentWeight(weight.toFixed(2));
    setProgress(progressPercentage);
  };
  const getBabySize = (weeksElapsed, t) => {
    if (weeksElapsed <= 12) return t("Lime");
    if (weeksElapsed <= 16) return t("Apple");
    if (weeksElapsed <= 20) return t("Banana");
    if (weeksElapsed <= 24) return t("Mango");
    if (weeksElapsed <= 28) return t("Eggplant");
    if (weeksElapsed <= 32) return t("Butternut Squash");
    return t("Watermelon");
  };
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
      <CalcLayout Title={t("Pregnancy calculator")} />
      <p className="text-center text-[#898888] text-lg w-[550px] font-semibold max-md:w-[300px] max-md:text-sm">
        {t(
          "Use our menstrual cycle calculator to calculate your next period, ovulation & due date. Enter the date of your last period, how long it lasted, the length of your average cycle and press Calculate:"
        )}
      </p>

      <div className="w-56 h-56 text-white rounded-full flex flex-col justify-center items-center text-center my-4">
        <img src={Pregenant} alt={t("Pregnant")} />
      </div>

      {!result ? (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="last-period-date"
                className="block text-gray-700 mb-2 font-medium"
              >
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
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition"
            >
              {t("Calculate")}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full text-center mt-8">
          <h2 className="text-lg font-bold">{result}</h2>
          <p className="text-lg">
            {weeksRemaining} {t("weeks")}, {daysRemaining} {t("days")}
          </p>
          <p className="text-sm">
            {t("Childbirth")}: {weeksRemaining * 7 + daysRemaining}{" "}
            {t("days left")}
          </p>

          <div className="mt-4">
            <p className="text-lg font-semibold">
              {t("Your baby is in a size of")}: {getBabySize(weeksElapsed, t)}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-lg font-bold">{t("2nd trimester")}</p>
            <p className="text-sm">
              {weeksElapsed} {t("weeks")}, {daysRemaining}{" "}
              {t("days to childbirth")}
            </p>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4 mt-4 relative overflow-hidden max-w-md mx-auto">
            <div
              className="absolute h-4 rounded-full"
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, #FFB951 32%, white 33%,#B7FFFD 34%, #B7FFFD 65%, white 66%,#FFDAA3 67% , #FFDAA3 100%)",
              }}
            ></div>
            <div
              className="relative h-5 w-5 rounded-full"
              style={{
                left: `${progress}%`,
                transform: "translate(-50%, -6%)",
              }}
            >
              <div
                className="absolute h-[15px] w-[30px] bg-[#15BCB8] rounded-full"
                style={{
                  top: "20%",
                  left: "-10%",
                  transform: "translate(-50%, -12%)",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="absolute h-5 w-5 bg-[#EEEBEB] rounded-full"
                style={{ zIndex: 1000 }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
