import { useTranslation } from "react-i18next";

export default function Join_Wings({ triggerJoinUs }) {
  const {t} = useTranslation();
    return (
      <button 
        className="text-center font-inter font-medium leading-[18px] bg-[#05140D]
                  px-6 py-2 text-[#159D82] text-sm rounded-lg
                  border-[1px] border-[#159D82]
                  transition-all duration-300 ease-in-out 
                  hover:shadow-md hover:scale-[1.01] 
                  active:scale-[0.97] active:shadow-inner"
        onClick={triggerJoinUs}>
          {t('about_section_five_content_button_a')}
      </button>
    );
  }