import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Images
import HeadImage from "../assets/content/projects/projects_image.png";

// Title Imports
import Title from "../components/content_headers/Title";

// Vector imports
import Destination from "../assets/vectors/projects/target.svg";
import Status from "../assets/vectors/projects/status.svg";
import NextStep from "../assets/vectors/projects/next_step.svg";

import Arrow from "../assets/vectors/arrows/green_right.svg";

// Buttons
import Propose_Project from "../components/buttons/Propose_Project";

// Images
import ProjectOne from  "../assets/content/projects/projects/project_one.png";
import ProjectTwo from  "../assets/content/projects/projects/project_two.png";
import ProjectThree from  "../assets/content/projects/projects/project_three.png";
import ProjectFour from  "../assets/content/projects/projects/project_four.png";
import ProjectFive from  "../assets/content/projects/projects/project_five.png";
import ProjectSix from  "../assets/content/projects/projects/project_six.png";




export default function Projects(){
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    const navigate = useNavigate();


    return(
        <>
            {/* Navgation Bar */}
            <NavBar page="Projects"/>

            {/* Head Image */}
            <div
                className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${HeadImage})` }}
            >
                <div className={`max-w-screen-xl ${isEnglish && 'px-6'} px-1 sm:px-8 flex flex-col items-center text-center gap-6 py-20 sm:py-24 lg:py-36`}>
                    <div
                        className="
                        font-inter font-semibold 
                        text-[32px] leading-[40px] 
                        sm:text-[48px] sm:leading-[56px] 
                        lg:text-[55px] lg:leading-[60px] 
                        xl:text-[64px] xl:leading-[70px] 
                        text-white text-center
                    "
                    >
                        {t("projects_section_one_title_one")}
                    </div>
                    <div className="font-instrument font-medium text-sm md:text-md text-white">{t("projects_section_one_title_two")}</div>
                </div>
            </div>

            {/* Section Projects */}
            <div className="w-full bg-[#05140D] pb-24">
                <div className="py-20">
                    <Title title={"projects_section_two_title_tag"} />
                </div>

                <div className="max-w-screen-xl px-2 mx-auto flex flex-col justify-center gap-28 md:gap-40">
                    {/* Cards */}

                    {/* Project 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <img src={ProjectOne}/>
                        <div className="flex flex-col justify-start gap-4">
                            <div className="font-inter font-semibold text-white text-lg">{t("projects_one_title")}</div>
                            <div className="font-intrument font-medium text-white text-md">{t("projects_one_description")}</div>

                            <ul className="space-y-3 py-6">
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Destination} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_one_bulleta")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={NextStep} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_one_bulletc")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Status} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_one_bulletb")}</span>
                                </li>
                            </ul>

                            <div className="w-fit flex flex-col gap-2">
                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_two_support")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>

                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_two_join_testing_phase")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="flex flex-col justify-start gap-4">
                            <div className="font-inter font-semibold text-white text-lg">{t("projects_two_title")}</div>
                            <div className="font-intrument font-medium text-white text-md">{t("projects_two_description")}</div>

                            <ul className="space-y-3 py-6">
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Destination} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_two_bulleta")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={NextStep} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_two_bulletc")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Status} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_two_bulletb")}</span>
                                </li>
                            </ul>

                            <div className="w-fit flex flex-col gap-2">
                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_two_support_short")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <img src={ProjectTwo} className="order-first md:order-none"/>
                    </div>

                    {/* Project 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <img src={ProjectThree}/>
                        <div className="flex flex-col justify-start gap-4">
                            <div className="font-inter font-semibold text-white text-lg">{t("projects_three_title")}</div>
                            <div className="font-intrument font-medium text-white text-md">{t("projects_three_description")}</div>

                            <ul className="space-y-3 py-6">
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Destination} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_three_bulleta")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={NextStep} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_three_bulletc")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Status} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_three_bulletb")}</span>
                                </li>
                            </ul>

                            <div className="w-fit flex flex-col gap-2">
                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_two_help_us_launch")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="flex flex-col justify-start gap-4">
                            <div className="font-inter font-semibold text-white text-lg">{t("projects_four_title")}</div>
                            <div className="font-intrument font-medium text-white text-md">{t("projects_four_description")}</div>

                            <ul className="space-y-3 py-6">
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Destination} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_four_bulleta")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={NextStep} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_four_bulletc")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Status} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_four_bulletb")}</span>
                                </li>
                            </ul>

                            <div className="w-fit flex flex-col gap-2">
                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_two_keep_me_updated")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <img src={ProjectFour} className="order-first md:order-none"/>
                    </div>

                    {/* Project 5 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <img src={ProjectFive}/>
                        <div className="flex flex-col justify-start gap-4">
                            <div className="font-inter font-semibold text-white text-lg">{t("projects_five_title")}</div>
                            <div className="font-intrument font-medium text-white text-md">{t("projects_five_description")}</div>

                            <ul className="space-y-3 py-6">
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Destination} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_five_bulleta")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={NextStep} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_five_bulletc")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Status} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_five_bulletb")}</span>
                                </li>
                            </ul>

                            <div className="w-fit flex flex-col gap-2">
                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_know_a_school_or_organization")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="flex flex-col justify-start gap-4">
                            <div className="font-inter font-semibold text-white text-lg">{t("projects_six_title")}</div>
                            <div className="font-intrument font-medium text-white text-md">{t("projects_six_description")}</div>

                            <ul className="space-y-3 py-6">
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Destination} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_six_bulleta")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={NextStep} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_six_bulletc")}</span>
                                </li>
                                <li
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    <img src={Status} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t("projects_six_bulletb")}</span>
                                </li>
                            </ul>

                            <div className="w-fit flex flex-col gap-2">
                                <div onClick={() => { navigate('/projects/1'); }}
                                    className="text-[#1ED7B6] font-inter font-nrormal text-md leading-[27px] cursor-pointer flex flex-row items-center gap-2 
                                        transition-transform duration-300 ease-in-out 
                                        hover:scale-105 active:scale-95">
                                    <span>{t("projects_section_join_initiatives")}</span>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <img src={ProjectSix} className="order-first md:order-none"/>
                    </div>

                </div>
            </div>

            {/* Have an Idea */}
            <div className='w-full bg-[#05140D]'>
                <div className='max-w-screen-xl mx-auto pb-20 px-6 sm:px-8'>
                    <div className='w-full py-10 border border-[#29B473] rounded-xl flex flex-col justify-center items-center gap-4 md:gap-8'>
                        <div className='flex flex-col items-center items-center gap-1 md:gap-2'>
                            <div className='font-inter font-medium text-xl text-white text-center leading-[30px]'>{t("project_last_section_title")}</div>
                            <div className='font-inter font-normal text-sm text-white text-center leading-[30px]'>{t("project_last_section_description")}</div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                            <Propose_Project />
                        </div>
                    </div>
                    
                </div>
            </div>
            

            {/* Footer */}
            <Footer/>
        </>
    );
}