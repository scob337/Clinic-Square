import { useTranslation } from 'react-i18next';
import Docbg from '../../assets/DoctorBackground.jpg'

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className='w-[100%] min-h-[50vh] p-3 max-h-fit bg-cover bg-center flex justify-evenly items-center flex-col gap-10
    lg:flex-row
    '>
        <div  className='h-100% flex flex-col justify-start items-start gap-[50px]'>
                <div className='flex flex-col '>
                <h1 className='text-[36px] font-semibold text-[#00ACA8]'>{t("Expert Care")} </h1>
            <h1 className='text-[36px] font-semibold text-[#404040]'>{t("Your Path to Better Health")}</h1>
            <h1 className='text-[16px] font-semibold lh-[27.71px] text-[#A7A7A7]'>{t("Where Expertise Meets Holistic Healing through Clinic Square.")}</h1>
                </div>
                <div>
                <button className='
                shadow-lg shadow-[#4400ff48]
                bg-[#00ACA8] text-white w-[200px] h-[40px] rounded-[10px]'>{t("Contact Us Today")}</button>

                </div>
            </div>
      <div className=' '>
        <img src={Docbg} alt="Doctor" className="w-full h-[50%] object-contain" />
      </div>
    </div>
  )
}