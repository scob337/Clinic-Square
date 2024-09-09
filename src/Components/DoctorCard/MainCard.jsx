import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Doc_Modal from "./Doc_Modal";
import Doctors_Card from "./Doctors_Card";
import DocData from "./DoctorsData";
import { AddDoc } from "../../../RTK/DoctorSlice";
import { useState, forwardRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const MainCard = forwardRef(({ SHeight }, ref) => {
  const dispatch = useDispatch();
  const [Show, setShow] = useState(false);
  const { t } = useTranslation();

  const HandleBooking = useCallback(
    (item) => {
      dispatch(AddDoc(item));
      setShow(true);
    },
    [dispatch]
  );

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-center justify-center w-full gap-4 p-4 m-auto overflow-hidden"
      style={{ maxHeight: SHeight }}
    >
      <Helmet>
        <title>Clinic-Square || Doctors </title>
        <meta name="description" content="وصف مخصص لصفحة معينة" />
        <meta name="keywords" content="كلمات, مفتاحية, هنا" />
      </Helmet>
      {DocData.map((item) => (
        <Doctors_Card
          key={item.id}
          Item={item}
          Button={
            <button
              className="ring-1 ring-[#00ACA8] p-2 w-[70%] rounded-2xl text-[13px] text-[#00ACA8] font-semibold transition duration-200 hover:bg-[#00ACA8] hover:text-white"
              onClick={() => HandleBooking(item)}
            >
              {t("Book an Appointment")} {/* ترجمة النص */}
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
  SHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default MainCard;
