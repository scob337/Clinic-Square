import {useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SelectFilter() {
  const [checkedItems, setCheckedItems] = useState([]);
  const { t } = useTranslation();

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevState) => {
      if (prevState.includes(itemId)) {
        // إذا كان العنصر موجودًا، نقوم بإزالته من القائمة
        return prevState.filter((id) => id !== itemId);
      } else {
        // إذا كان العنصر غير موجود، نضيفه إلى القائمة
        return [...prevState, itemId];
      }
    });
  };
    const Data = [
        {
            id : 1,
            name : "Chest Pain",
        },
    {
        id : 2, 
        name : "Shortness of Breath",
    },
    {
        id : 3,
        name : "Persistent Cough",
    },
    {
        id : 4,
        name : "Itching",
    },
    {
        id : 5,
        name : "Rash",
    },
    {
        id : 6,
        name : "Abdominal Pain",
    },
    {
        id : 7,
        name : "Nausea",
    },
    {
        id : 8,
        name : "Wheezing",
    },
    {
        id : 9,
        name : "Dizziness",
    },
    {
        id : 10,
        name : "Headache",
    },
    {
        id : 11,
        name : "Vision Changes",
    },
    {
        id : 12,
        name : "Eye Pain",
    },
    {
        id : 13,
        name : "Joint Pain",
    },
    {
        id : 14,
        name : "Back Pain   ",
    },
    {
        id : 15,
        name : "Ear Pain",
    },
    {
        id : 16,
        name : "Sore Throat",
    },
    {
        id : 17,
        name : "Vaginal Discharge",
    },
    {
        id : 18,
        name : "Irregular Periods",
    },
    {
        id : 19,
        name : "Blood in Urine",
    },
    {
        id : 20,
        name : "Painful Urination",
    },
    {
        id : 21,
        name : "Acne",
    },
    {
        id : 22,
        name : "Red Eyes",
    },
    {
        id : 23,
        name : "Excessive Thirst",
    },
    {
        id : 24,
        name : "Weight Changes",
    },

    ]


  return (
    <div className='flex flex-wrap gap-3 p-3'>         
    {Data.map((item) => (
      <label
        key={item.id}
        htmlFor={item.id}
        className={`
          hover:bg-[#00ACA8] hover:text-white transition
          block text-sm w-fit p-2 ring-1 ring-[#00ACA8] cursor-pointer rounded-xl ${
          checkedItems.includes(item.id) ? 'bg-[#00ACA8] text-white' : 'bg-white text-black'
        }`}
      >
        <input
          id={item.id}
          type="checkbox"
          className="hidden"
          checked={checkedItems.includes(item.id)}
          onChange={() => handleCheckboxChange(item.id)}
        />
        {t(item.name)}
      </label>
    ))}
    <div className='w-full flex justify-center items-center'>
      <button className='bg-[#F8A01B] text-white w-[200px] h-[40px] rounded-xl'>Search</button>
    </div>
    </div>
  )
}
