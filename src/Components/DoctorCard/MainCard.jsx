import { useDispatch } from "react-redux";
import PropTypes from "prop-types"; // استيراد PropTypes للتحقق من صحة props
import Doc_Modal from "./Doc_Modal";
import Doctors_Card from "./Doctors_Card";
import DocData from "./DoctorsData";
import { AddDoc } from "../../../RTK/DoctorSlice";
import { useState, forwardRef } from "react";

const MainCard = forwardRef(({ SHeight }, ref) => {
  const dispatch = useDispatch();
  const [Show, setShow] = useState(false);

  const HandleBooking = (item) => {
    dispatch(AddDoc(item));
    setShow(true);
  };

  return (
    <div
      ref={ref}
      className={`flex flex-wrap items-center justify-center w-full gap-4 p-4 m-auto max-h-[${SHeight}] overflow-hidden`}
      style={{ maxHeight: SHeight }}
    >
      {DocData.map((item) => (
        <Doctors_Card
          key={item.id}
          Item={item}
          Button={
            <button
              className="ring-1 ring-[#00ACA8] p-2 w-[70%] rounded-2xl text-[13px] text-[#00ACA8] font-semibold transition duration-200 hover:bg-[#00ACA8] hover:text-white"
              onClick={() => HandleBooking(item)}
            >
              Book an Appointment
            </button>
          }
        />
      ))}
      <div className="w-fit">
        <Doc_Modal SetShow={setShow} Show={Show} />
      </div>
    </div>
  );
});

MainCard.displayName = "MainCard";

MainCard.propTypes = {
  SHeight: PropTypes.number.isRequired,  
};

export default MainCard;
