import { useTranslation } from "react-i18next";
import Arrow from "../../assets/vectors/arrows/black_right.svg";

export default function JoinUs_Two({ triggerJoinUs }) {
    const {t} = useTranslation();

    return (
      <button 
        className="w-fit font-inter font-medium leading-[18px] bg-gradient-to-r from-[#159D82] to-[#81FEE8]
                  px-6 py-2 text-black text-sm rounded-lg
                  flex flex-row justify-center items-center gap-2
                  transition-all duration-300 ease-in-out 
                  hover:shadow-md hover:scale-[1.01] 
                  active:scale-[0.97] active:shadow-inner"
        onClick={triggerJoinUs}>
          {t('green_join_us')}
          <img src={Arrow}/>
      </button>
    );
  }