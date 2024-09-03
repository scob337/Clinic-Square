import { FaArrowDownLong } from "react-icons/fa6";

export default function DoctorSearch() {
  return (
    <div className="flex  p-2 flex-row max-md:flex-wrap gap-3">
      <input
        type="text"
        placeholder="Name of Doctor"
        className="w-[24%] h-[40px] rounded-[10px] border border-[#00ACA8] p-3
        bg-[#a8a8a8] text-white
        placeholder:text-white
         max-md:w-[48%]"
      />
      <select className="p-2 w-[24%] bg-[#a8a8a8] text-white rounded-lg  max-md:w-[48%]">
        <option  
          className="flex justify-between items-center cursor-pointer bg-white cursor text-black"
          value="Specially"
        >
          <FaArrowDownLong size={36} /> Specially
        </option>
        <option  className="bg-white cursor-pointer text-black" value="cardiologist">Cardiologist</option>
        <option  className="bg-white cursor-pointer text-black" value="dermatologist">Dermatologist</option>
        <option  className="bg-white cursor-pointer text-black" value="gastroenterologist">Gastroenterologist</option>
        <option  className="bg-white cursor-pointer text-black" value="neurologist">Neurologist</option>
        <option  className="bg-white cursor-pointer text-black" value="psychiatrist">Psychiatrist</option>
        <option  className="bg-white cursor-pointer text-black" value="pulmonologist">Pulmonologist</option>
        <option  className="bg-white cursor-pointer text-black" value="radiologist">Radiologist</option>
        <option  className="bg-white cursor-pointer text-black" value="surgeon">Surgeon</option>
        <option  className="bg-white cursor-pointer text-black" value="urologist">Urologist</option>
        <option  className="bg-white cursor-pointer text-black" value="allergy-specialist">Allergy Specialist</option>
        <option  className="bg-white cursor-pointer text-black" value="endocrinologist">Endocrinologist</option>
      </select>

      <select className="p-2 w-[24%] bg-[#a8a8a8] text-white rounded-lg  max-md:w-[48%]">
        <option  
          className="flex justify-between items-center cursor-pointer bg-white cursor text-black"
          value="Specially"
        >
          <FaArrowDownLong size={36} /> City
        </option>
        <option  className="bg-white cursor-pointer text-black" value="cardiologist">Giza</option>
        <option  className="bg-white cursor-pointer text-black" value="dermatologist">Cairo</option>
        <option  className="bg-white cursor-pointer text-black" value="gastroenterologist">Alex</option>
        <option  className="bg-white cursor-pointer text-black" value="neurologist">Giza</option>
        <option  className="bg-white cursor-pointer text-black" value="psychiatrist">Cairo</option>
        <option  className="bg-white cursor-pointer text-black" value="pulmonologist">Alex</option>
        <option  className="bg-white cursor-pointer text-black" value="radiologist">Giza</option>
        <option  className="bg-white cursor-pointer text-black" value="surgeon">Cairo</option>
        <option  className="bg-white cursor-pointer text-black" value="urologist">Alex</option>
        <option  className="bg-white cursor-pointer text-black" value="allergy-specialist">Giza</option>
        <option  className="bg-white cursor-pointer text-black" value="endocrinologist">Cairo</option>

      </select>

        <button className="p-2 w-[24%] bg-[#F8A01B] text-white rounded-lg max-md:w-[48%]">Search</button>
    </div>
  );
}
