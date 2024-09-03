import React, { useState } from 'react';
import { differenceInDays, differenceInWeeks } from 'date-fns';

const PergCalc = () => {
  const [lmpDate, setLmpDate] = useState('');
  const [pregnancyDuration, setPregnancyDuration] = useState('');

  const handleLmpChange = (event) => {
    setLmpDate(event.target.value);
  };

  const calculatePregnancyDuration = () => {
    if (!lmpDate) return;

    const lmp = new Date(lmpDate);
    const today = new Date();
    const daysDifference = differenceInDays(today, lmp);
    const weeksDifference = differenceInWeeks(today, lmp);

    setPregnancyDuration({
      days: daysDifference,
      weeks: weeksDifference,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Pregnancy Duration Calculator</h2>
      <label htmlFor="lmpDate" className="block text-sm mb-2">
        Last Menstrual Period (LMP) Date:
      </label>
      <input
        type="date"
        id="lmpDate"
        value={lmpDate}
        onChange={handleLmpChange}
        className="border p-2 mb-4"
      />
      <button
        onClick={calculatePregnancyDuration}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate Pregnancy Duration
      </button>
      {pregnancyDuration && (
        <div className="mt-4">
          <p>
            Pregnancy Duration: {pregnancyDuration.weeks} weeks and {pregnancyDuration.days} days
          </p>
        </div>
      )}
    </div>
  );
};

export default PergCalc;
