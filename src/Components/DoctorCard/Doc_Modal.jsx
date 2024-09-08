import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Doctors_Card from "./Doctors_Card";
import Logo from "../../assets/Clinic3-removebg-preview.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { AddBooking } from "../../../RTK/BookingSlice";
import { useTranslation } from "react-i18next";

// تهيئة مكتبة المودال لربطها بالـ root
Modal.setAppElement("#root");

const Doc_Modal = ({ Show, SetShow }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // جلب بيانات الطبيب من الـ Redux Store
  const { name, speciality, image, rank } = useSelector(
    (state) => state.doctor.DocInfo
  );

  const [Booking, setBooking] = useState("Booking");
  const [BookingInfo, setBookingInfo] = useState({
    patientName: "",
    adress: "",
    date: "",
    time: "",
  });

  const HandleCloseModal = () => {
    SetShow(false);
    setBooking("Booking");
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddBooking(BookingInfo));
    setTimeout(() => {
      setBooking("Submited");
    }, 1000);
  };

  return (
    <Modal
      isOpen={Show}
      contentLabel="Doctor Information"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "10px",
          background: "#fff",
          borderRadius: "30px",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(7px)",
          zIndex: 9999,
        },
      }}
    >
      <div className="w-full bg-[#00ACA8] h-[60px] flex justify-between items-center p-4 text-white rounded-t-lg">
        <div className="logo w-[200px]">
          <img src={Logo} alt="Logo" className="w-[120px] h-[60px] object-cover" />
        </div>
        <IoCloseCircleOutline size={36} onClick={HandleCloseModal} className="cursor-pointer" />
      </div>

      <div className="flex flex-col md:flex-row w-full h-[70%] m-auto p-2 gap-0 shadow-2xl">
        <div className="flex flex-col items-center justify-center w-full p-5 md:w-1/2">
          <Doctors_Card Item={{ name, speciality, image, rank }} />
        </div>

        {Booking === "Booking" && (
          <div className="w-full p-5 md:w-1/2">
            <h2 className="mb-4 text-lg font-bold">{t("Appointment Form")}</h2>
            <form className="flex flex-col gap-4" onSubmit={HandleSubmit}>
              <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
                <input
                  type="text"
                  required
                  placeholder={t("Patient’s Name")}
                  className="p-2 border rounded text-[#00ACA8] bg-[#F8F7F7]"
                  onChange={(e) => setBookingInfo({ ...BookingInfo, patientName: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder={t("Your Email")}
                  className="p-2 border rounded text-[#00ACA8] bg-[#F8F7F7]"
                />
              </div>

              <div className="flex flex-col justify-between">
                <label htmlFor="adress" className="block mb-2 text-sm">
                  {t("Address")}:
                </label>
                <input
                  id="adress"
                  required
                  type="text"
                  placeholder={t("Address")}
                  className="p-2 border rounded text-[#00ACA8]"
                  onChange={(e) => setBookingInfo({ ...BookingInfo, adress: e.target.value })}
                />
              </div>

              <div className="flex justify-between items-center w-[80%]">
                <div className="flex flex-col justify-center">
                  <label htmlFor="date" className="block mb-2 text-sm">
                    {t("Date")}:
                  </label>
                  <input
                    type="date"
                    required
                    id="date"
                    className="p-2 border text-[#00ACA8] bg-[#F8F7F7] rounded-lg"
                    onChange={(e) => setBookingInfo({ ...BookingInfo, date: e.target.value })}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <label htmlFor="time" className="block mb-2 text-sm">
                    {t("Time")}:
                  </label>
                  <input
                    type="time"
                    required
                    id="time"
                    className="p-2 border text-[#00ACA8] bg-[#F8F7F7] rounded-lg"
                    onChange={(e) => setBookingInfo({ ...BookingInfo, time: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-2 w-[90%]">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="checkbox" required />
                  <label htmlFor="checkbox">{t("Payment through Wallet")}</label>
                </div>
                <span className="text-xs text-[#F8A01B]">
                  {t("Other Payment Option")}
                </span>
              </div>

              <button
                type="submit"
                className="p-2 bg-[#00ACA8] text-white rounded-lg w-[40%] flex justify-center m-auto hover:text-[#00ACA8] hover:bg-white hover:ring-1 hover:ring-[#00ACA8] transition-all"
              >
                {t("Confirm")}
              </button>
            </form>
          </div>
        )}

        {Booking === "Submited" && (
          <div className="flex flex-col items-start justify-start w-full p-5 md:w-1/2">
            <h1 className="text-lg font-bold mb-4 text-[#F89F1B]">
              {t("Appointment Confirmation")}
            </h1>

            <div className="flex flex-col gap-3 w-[100%] p-3 rounded-lg">
              <p className="text-[#00ACA8] font-bold">{BookingInfo.patientName}</p>
              <div className="text-[#00ACA8] flex gap-5 font-bold">
                <span>{BookingInfo.date}</span> <span>{BookingInfo.time}</span>
              </div>
              <p className="text-[#00ACA8] font-medium">{BookingInfo.adress}</p>
              <p className="text-[#00ACA8] text-[10px]">
                {t("A notification has been sent to the provided contact details.")}
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Doc_Modal;
