import { useTranslation } from "react-i18next";
import circle from "../../assets/vectors/common/green_ellipse.svg";

export default function Title({ title }){
    const {t} = useTranslation();

    return (

        <div className="w-full max-auto relative bg-[#05140D] flex flex-row justify-center items-center">
            <img src={circle} className="-mr-10" /> {/* optional: center it */}
            <div className="font-brico font-medium text-lg leading-[70px] text-white">
                {t(`${title}`)}
            </div>
        </div>

    );
}