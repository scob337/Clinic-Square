import { useTranslation } from "react-i18next";
import { FaArrowDownLong } from "react-icons/fa6";

export default function DoctorSearch() {
  const { t } = useTranslation();

  return (
    <div className="flex  p-2 flex-row max-md:flex-wrap gap-3 ">
      <input
        type="text"
        placeholder="Name of Doctor"
        className="w-[24%] max-md:w-[100%] h-[40px] rounded-[10px] border border-[#00ACA8] p-3
        bg-[#a8a8a8] text-white
        placeholder:text-white
        "
      />
      <select className="p-2 w-[24%]  bg-[#a8a8a8] text-white rounded-lg  max-md:w-[100%]">
        <option  
          className="flex justify-between items-center cursor-pointer bg-white cursor text-black"
          value="Specially"
        >
          <FaArrowDownLong size={36} /> {t("Specially")}
        </option>
        <option  className="bg-white cursor-pointer text-black" value="cardiologist">{t("Cardiologist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="dermatologist">{t("Dermatologist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="gastroenterologist">{t("Gastroenterologist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="neurologist">{t("Neurologist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="psychiatrist">{t("Psychiatrist")}</option>

        <option  className="bg-white cursor-pointer text-black" value="radiologist">{t("Radiologist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="surgeon">{t("Surgeon")}</option>
        <option  className="bg-white cursor-pointer text-black" value="urologist">{t("Urologist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="allergy-specialist">{t("Allergy Specialist")}</option>
        <option  className="bg-white cursor-pointer text-black" value="endocrinologist">{t("Endocrinologist")}</option>
      </select>

      <select className="p-2 w-[24%]  bg-[#a8a8a8] text-white rounded-lg  max-md:w-[100%]">
        <option  
          className="flex justify-between items-center cursor-pointer bg-white cursor text-black"
          value="Specially"
        >
          <FaArrowDownLong size={36} /> {t("City")}
        </option>
        <option  className="bg-white cursor-pointer text-black" value="cardiologist">{t("Giza")}</option>
        <option  className="bg-white cursor-pointer text-black" value="dermatologist">{t("Cairo")}</option>
        <option  className="bg-white cursor-pointer text-black" value="gastroenterologist">{t("Alex")}</option>
        <option  className="bg-white cursor-pointer text-black" value="neurologist">{t("Giza")}</option>
        <option  className="bg-white cursor-pointer text-black" value="psychiatrist">{t("Cairo")}</option>
        <option  className="bg-white cursor-pointer text-black" value="pulmonologist">{t("Alex")}</option>
        <option  className="bg-white cursor-pointer text-black" value="radiologist">{t("Giza")}</option>
        <option  className="bg-white cursor-pointer text-black" value="surgeon">{t("Cairo")}</option>
        <option  className="bg-white cursor-pointer text-black" value="urologist">{t("Alex")}</option>
        <option  className="bg-white cursor-pointer text-black" value="allergy-specialist">{t("Giza")}</option>
        <option  className="bg-white cursor-pointer text-black" value="endocrinologist">{t("Cairo")}</option>

      </select>

        <button className="p-2 w-[24%]  bg-[#F8A01B] text-white rounded-lg max-md:w-[100%]">{t("Search")}</button>
    </div>
  );
}
