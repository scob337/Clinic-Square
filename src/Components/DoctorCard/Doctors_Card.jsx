import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

export default function Doctors_Card({ Item, Button }) {
  const { t } = useTranslation();
  const { name, speciality, image, rank } = Item;

  return (
    <div className="w-full md:w-[300px] lg:w-[250px] h-[300px] rounded-lg flex flex-col justify-center items-center gap-2 ring-1 ring-[#00ACA8]">
      <div className="relative flex flex-col items-center gap-2 before:content-[''] before:absolute before:top-9 before:left-0 before:w-full before:h-1/2 before:bg-[#00ACA8] before:opacity-60 before:rounded-lg">
        <img
          loading="lazy"
          src={image}
          alt={t('Doctor image')} // إضافة وصف للصورة
          className="w-3/4 h-[150px] object-cover z-10"
        />
        <h2 className="text-center text-[14px] font-bold text-[#404040]">{t(name)}</h2>
        <p className="text-center text-[12px] text-[#767676]">{t(speciality)}</p>
        <p className="text-center text-[12px] flex items-center gap-2">
          <FaStar color='#F8A019' size={18} />
          <span className="text-[#000] font-semibold">({rank})</span>
        </p>
      </div>

      {Button}
    </div>
  );
}
