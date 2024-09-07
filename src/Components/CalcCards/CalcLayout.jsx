import PropTypes from "prop-types"; // استيراد PropTypes للتحقق من صحة props

export default function CalcLayout({ Title, children }) {
  return (
    <div className="flex flex-col w-full max-sm:w-[80%]  h-fit m-auto">
      <div className="w-full h-[200px]   flex justify-center items-center">
        <div className="relative w-[300px]  max-md:w-[120px]">
          <div className="absolute bg-[#F8A01B] left-[-100px] top-[-50px] rounded-full  w-[20px] h-[20px]"></div>
          <div className="absolute bg-[#00ACA8] left-[-70px] top-[50px] rounded-full  w-[30px] h-[30px]"></div>

          <h1 className="text-center max-md:text-[18px]   text-[36px] font-bold p-2">
            {" "}
            {Title}
          </h1>

          <div className="absolute bg-[#F8A01B] right-[0px] top-[-10px] rounded-full  w-[20px] h-[20px]">
            {" "}
          </div>
          <div className="absolute bg-[#00ACA8] right-[-70px] top-[-30px] rounded-full  w-[30px] h-[30px]"></div>
        </div>
      </div>

      <div className="w-full  flex justify-center">{children}</div>
    </div>
  );
}
CalcLayout.propTypes = {
  Title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
