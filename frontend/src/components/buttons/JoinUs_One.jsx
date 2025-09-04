import { useTranslation } from "react-i18next";
import Arrow from "../../assets/vectors/arrows/white_right.svg";

export default function JoinUs_One({ triggerJoinUs }) {
  const {t} = useTranslation();  
  
  return (
      <button 
        className="font-inter font-medium leading-[18px]
                  px-6 py-2 bg-[#05140D] text-white text-sm rounded-lg
                  border-[1px] border-white flex flex-row justify-center items-center gap-2
                  transition-all duration-300 ease-in-out 
                  hover:shadow-md hover:scale-[1.01] 
                  active:scale-[0.97] active:shadow-inner"
        onClick={triggerJoinUs}>
          {t('join_us_one')}
          <img src={Arrow}/>
      </button>
    );
  }