import React from 'react'

export default function PeriodResult({Result}) {
  return (
    <div>
      <div className="mt-10 flex justify-center">
            <div
              className="w-[250px] h-[250px] bg-teal-400 text-white rounded-full flex flex-col justify-center items-center text-center"
              style={{ boxShadow: "0 0 30px 15px rgba(0, 172, 168, 0.6)" }} // تأثير الظل مع الـ blur
            >
              <p className="text-lg font-bold">Period</p>
              <p className="text-sm font-semibold mt-2 w-[200px]">{Result}</p>
            </div>
          </div>
    </div>
  )
}
