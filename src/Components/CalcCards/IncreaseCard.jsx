import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function IncreaseCard({ Title, DefaultV, Value }) {
  const { t } = useTranslation();

  const [Counter, setCounter] = useState(DefaultV);

  const Increase = () => {
    const newValue = Counter + 1;
    setCounter(newValue);
    Value(newValue);
  };

  const Decrease = () => {
    const newValue = Counter - 1;
    setCounter(newValue);
    Value(newValue);
  };

  useEffect(() => {
    Value(Counter);
  }, [Counter]); // الاعتماد فقط على Counter

  return (
    <div>
      <div
        className="w-[200px] h-[250px] bg-[#D9D9D980] flex flex-col items-center justify-evenly
      rounded-lg p-3"
      >
        <p className="font-bold text-[28px]">{t(Title)}</p>
        <input
          className="font-bold text-[28px] w-full text-center ring-1"
          value={Counter}
          onChange={(e) => setCounter(+e.target.value)}
        />
        <div className="flex gap-5">
          <button
            className="w-[30px] h-[30px] bg-[#00ACA8] font-semibold rounded-full text-[36px] flex justify-center items-center"
            onClick={Increase}
          >
            +
          </button>
          <button
            className="w-[30px] h-[30px] bg-[#F8A01B] font-semibold rounded-full text-[36px] flex justify-center items-center"
            onClick={Decrease}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
