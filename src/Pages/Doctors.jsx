import { useState, useRef, useEffect } from "react";
import MainCard from "../Components/DoctorCard/MainCard";

export default function Doctors() {
  const [SHeight, setSHeight] = useState(640); 
  const [expanded, setExpanded] = useState(false); 
  const mainCardRef = useRef(null); 

  const HandleToggleHeight = () => {
    if (expanded) {
      setSHeight(640); 
      window.scrollTo({
        top: 0, 
        behavior: "smooth", 
      });

    } else {
      setSHeight(SHeight + 330); 
      setTimeout(() => {
        window.scrollTo({
          top: mainCardRef.current?.offsetTop + SHeight, 
          behavior: "smooth", 
        });
      }, 100);

    }
  };

  useEffect(() => {
    const checkCardHeight = () => {
      const cardHeight = mainCardRef.current?.scrollHeight; 
      if (cardHeight && cardHeight <= SHeight) {
        setExpanded(true);
      }
      else{
        setExpanded(false);
      }
    };

    checkCardHeight();
  }, [SHeight]);

  return (
    <div className="w-[70%] gap-9 min-h-[40vh] h-fit m-auto flex flex-col items-center mb-3 justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#404040] text-[24px] lg:text-[36px] font-semibold">Meet Our Family</h1>
        <p className="w-[100%] text-center text-[#616161] text-[12px]">Well qualified doctors are ready to serve you</p>
      </div>


      <div
        style={{ maxHeight: SHeight, overflowY: 'hidden' }} 
        className="flex flex-wrap w-full gap-4"
      >
        <MainCard ref={mainCardRef} /> 
      </div>

      <button
        className="ring-1 ring-[#00ACA8] p-2 w-[30%] rounded-2xl text-[13px] text-[#00ACA8] font-semibold transition duration-200 hover:bg-[#00ACA8] hover:text-white mt-[20px]"
        onClick={HandleToggleHeight}
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
