import { useEffect, useState } from "react";

export default function IncreaseCard({ Title, DefaultV , Value }) {
  const [Counter, setCounter] = useState(DefaultV);
    const Increase = ()=>{
        setCounter(Counter + 1)
        Value(Counter)
    }
    const Decrease = ()=>{
        setCounter(Counter-1)
        Value(Counter)
    }
    useEffect(()=>{
        Value(Counter)
    },[Value,Counter])
  return (
    <div>
      <div className="w-[200px] h-[250px] bg-[#D9D9D980] flex flex-col items-center justify-evenly
      rounded-lg p-3
      ">
        <p className="font-bold text-[28px]">{Title}</p>
        <input
          className="font-bold text-[28px] w-full text-center ring-1"
          value={Counter}
          onChange={(e) => setCounter(+e.target.value)}
        />
        <div className="flex gap-5">
          <button
            className="w-[30px] h-[30px] bg-[#00ACA8]  font-semibold rounded-full text-[36px] flex justify-center items-center"
            onClick={() => Increase ()}
          >
            +
          </button>
          <button
            className="w-[30px] h-[30px] bg-[#F8A01B]  font-semibold rounded-full text-[36px] flex justify-center items-center"
            onClick={() => Decrease ()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
