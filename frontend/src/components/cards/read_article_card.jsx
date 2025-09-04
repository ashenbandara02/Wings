import { useTranslation } from "react-i18next";
import Arrow from "../../assets/vectors/arrows/green_right.svg";
import { useNavigate } from "react-router-dom";

export default function ReadArticleCard({title, imagePath, id}){
    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center bg-[#374151] rounded-xl p-4">
            <img src={imagePath}/>
            <div className="flex flex-col py-4 gap-1 lg:gap-2">
                <div className="font-inter font-medium text-md text-white leading-[19px]">{title}</div>
                <div className="w-fit flex flex-row items-center gap-5 text-[#1ED7B6]">
                    <div onClick={() => {navigate(`/blogs/${id}`);}}
                    className="font-inter font-normal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                    transition-transform duration-300 ease-in-out 
                                    hover:scale-105 active:scale-95">
                        <span>{t("read_this_article")}</span>
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}