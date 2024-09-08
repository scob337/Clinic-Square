import React, { useState } from 'react';
import { differenceInDays, differenceInWeeks } from 'date-fns';
import { useTranslation } from 'react-i18next';

const PergCalc = () => {
  const [lmpDate, setLmpDate] = useState('');
  const [pregnancyDuration, setPregnancyDuration] = useState(null);
  const { t } = useTranslation();

  const handleLmpChange = (event) => {
    setLmpDate(event.target.value);
  };

  const calculatePregnancyDuration = () => {
    if (!lmpDate) {
      alert(t("Please enter a valid LMP date."));
      return;
    }

    const lmp = new Date(lmpDate);
    const today = new Date();

    if (lmp > today) {
      alert(t("LMP date cannot be in the future."));
      return;
    }

    const daysDifference = differenceInDays(today, lmp);
    const weeksDifference = differenceInWeeks(today, lmp);

    setPregnancyDuration({
      days: daysDifference,
      weeks: weeksDifference,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{t("Pregnancy Duration Calculator")}</h2>
      <label htmlFor="lmpDate" className="block text-sm mb-2">
        {t("Last Menstrual Period (LMP) Date")}:
      </label>
      <input
        type="date"
        id="lmpDate"
        value={lmpDate}
        onChange={handleLmpChange}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={calculatePregnancyDuration}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {t("Calculate Pregnancy Duration")}
      </button>
      {pregnancyDuration && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-md">
          <p className="text-lg font-semibold">
            {t("Pregnancy Duration")}: {pregnancyDuration.weeks} {t("weeks and")} {pregnancyDuration.days % 7} {t("days")}
          </p>
        </div>
      )}
    </div>
  );
};

export default PergCalc;
