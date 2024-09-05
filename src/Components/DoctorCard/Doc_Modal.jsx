import Modal from "react-modal";
import { useSelector } from "react-redux";
import Doctors_Card from "./Doctors_Card";
import Logo from "../../assets/Clinic3-removebg-preview.png";
import { IoCloseCircleOutline } from "react-icons/io5";

// تهيئة مكتبة المودال لربطها بالـ root
Modal.setAppElement("#root");

const Doc_Modal = (props) => {
  const { Show, SetShow } = props;

  // جلب بيانات الطبيب من الـ Redux Store
  const { name, speciality, image, rank } = useSelector((state) => state.doctor.DocInfo);

  return (
    <div>
      <Modal
        isOpen={Show}
        onRequestClose={() => SetShow(false)}
        contentLabel="Doctor Information"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0px", // إزالة الـ padding الافتراضي
            border: "1px solid #ccc",
            background: "#fff",
            borderRadius: "10px",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "20px", // مسافة بين الهيدر والمحتوى
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
          },
        }}
      >
        {/* الهيدر */}
        <div className="w-full bg-[#00ACA8] h-[60px] flex justify-between items-center p-4 text-white rounded-t-lg">
          <div className="logo w-[100px]">
            <img src={Logo} alt="Logo" className="w-[120px] h-[60px] object-cover" />
          </div>
          <IoCloseCircleOutline size={36} onClick={() => SetShow(false)} className="cursor-pointer" />
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col md:flex-row w-full p-5 gap-5">
          {/* القسم الأول: الكارد والمعلومات */}
          <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center">
            <Doctors_Card Item={{ name, speciality, image, rank }} />

          </div>

          {/* القسم الثاني: الفورم */}
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-lg font-bold mb-4">Appointment Form</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="p-2 border rounded" />
              <input type="email" placeholder="Your Email" className="p-2 border rounded" />
              <textarea placeholder="Your Message" className="p-2 border rounded h-[100px]" />
              <button type="submit" className="p-2 bg-[#00ACA8] text-white rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Doc_Modal;
