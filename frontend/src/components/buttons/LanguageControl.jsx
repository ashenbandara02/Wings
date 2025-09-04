import LanguageToggleEn from "../../assets/vectors/common/lang_toggle.svg";
import LanguageToggleIt from "../../assets/vectors/common/lang_toggle_it.svg";

import { useTranslation } from 'react-i18next';


export default function LanguageControl({ setSidebarOpen }){
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'it' : 'en';
        i18n.changeLanguage(newLang);
    };

    const isEnglish = i18n.language === 'en';

    return (
        <div onClick={() => {
            toggleLanguage();
            setSidebarOpen(false);}}
            className="cursor-pointer flex justify-center items-center bg-[#05140D] border-[1px] border-white p-2 rounded-lg
            transition-all duration-300 ease-in-out 
            hover:shadow-md hover:scale-[1.01] 
            active:scale-[0.97] active:shadow-inner">
            <img src={isEnglish ? LanguageToggleEn : LanguageToggleIt}  className="w-[20px] h-[20px]"/>
        </div>
    );
}