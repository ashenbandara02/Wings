import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function See_Our_Projects() {
    const navigate = useNavigate();

    const {t} = useTranslation();

    return (
      <button
        className="text-center font-inter font-medium leading-[18px] bg-gradient-to-r from-[#159D82] to-[#81FEE8]
                  px-6 py-2 text-black text-sm rounded-lg
                  transition-all duration-300 ease-in-out 
                  hover:shadow-md hover:scale-[1.01] 
                  active:scale-[0.97] active:shadow-inner"
        onClick={() => navigate("/projects")}>
          {t('green_see_projects')}
      </button>
    );
  }