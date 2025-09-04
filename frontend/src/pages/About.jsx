import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

// Vectors
import Arrow from "../assets/vectors/arrows/white_right.svg";
import PlayButton from "../assets/vectors/common/PlayButton.svg";

import One from "../assets/vectors/about/one.svg";
import Two from "../assets/vectors/about/two.svg";
import Three from "../assets/vectors/about/three.svg";
import Four from "../assets/vectors/about/four.svg";
import Five from "../assets/vectors/about/five.svg";

// Buttons
import Discover_Projects from "../components/buttons/Discover_Projects";
import Join_Wings from "../components/buttons/Join_Wings";

// Images and Videos
import HeadImage from "../assets/content/about/about.png";
import VideoAbout from "../assets/content/about/Video.mp4";

// Titles
import Title from "../components/content_headers/Title";


export default function About(){
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    // Video Part
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    useEffect(() => {
        const video = videoRef.current;

        const handlePause = () => setIsPlaying(false);
        const handlePlayEvent = () => setIsPlaying(true);

        if (video) {
            video.addEventListener("pause", handlePause);
            video.addEventListener("play", handlePlayEvent);
        }

        return () => {
            if (video) {
                video.removeEventListener("pause", handlePause);
                video.removeEventListener("play", handlePlayEvent);
            }
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0.09; // avoid exact 0, Safari may bug at 0
        }
    }, []);

    return(
        <>
            {/* Navgation Bar */}
            <NavBar page="About"/>

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
                        {t("about_section_one_title_one")}
                    </div>
                    <div className="font-instrument font-medium text-sm md:text-md text-white">{t("about_section_one_titlea")}</div>
                    <div className="font-instrument font-medium text-sm md:text-md text-white">{t("about_section_one_titleb")}</div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="w-full bg-[#05140D] py-20 px-2">
                <div className="max-w-screen-xl mx-auto py-12 px-8 md:px-52 bg-[#374151] rounded-lg flex flex-col gap-2">
                    <div className="font-instrument font-semibold text-lg text-white text-center">{t('about_section_two_title_one')}</div>
                    <div className="font-instrument italic text-sm text-white text-center">{t('about_section_two_content')}</div>
                </div>
            </div>

            {/* What we Do */}
            <div className="w-full bg-[#05140D] pb-20">
                <div className="max-w-screen-xl px-2 mx-auto">
                    <div className="pb-20"><Title title={"about_section_three_title_tag"}/></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div className="relative">
                            {/* Video element */}
                            <video
                                ref={videoRef}
                                controls={isPlaying}
                                preload="metadata"
                                // poster={PosterVideo}
                                className="w-full h-auto rounded-lg shadow-md"
                            >
                                <source src={VideoAbout} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Custom Play Button */}
                            {!isPlaying && (
                                <button
                                    onClick={handlePlay}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="hover:scale-110 transition">
                                        <img src={PlayButton} className="w-14 md:w-24" alt="icon" title="icon" />
                                    </div>
                                </button>
                            )}
                        </div>

                        <ul className="space-y-3">
                            {[
                                "about_section_three_point_one",
                                "about_section_three_point_two",
                                "about_section_three_point_three",
                                "about_section_three_point_four",
                                "about_section_three_point_five",
                            ].map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 font-instrument font-normal text-md text-white"
                                >
                                    {/* Arrow is fixed-size and aligned to the top of text */}
                                    <img src={Arrow} alt="" className="w-4 h-4 shrink-0 mt-1" />
                                    <span>{t(point)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="w-full bg-[#05140D] pb-20">
                <div className="max-w-screen-xl px-10 mx-auto">
                    <div className="pb-20"><Title title={"about_section_four_title_tag"}/></div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col gap-3 items-center sm:items-start">
                            <img src={One}/>
                            <div className="text-center sm:text-left font-inter font-normal text-white text-lg">{t('about_section_four_content_one_title')}</div>
                            <div className="text-center sm:text-left font-instrument font-medium text-white text-sm">{t('about_section_four_content_one_content')}</div>
                        </div>

                        <div className="flex flex-col gap-3 items-center sm:items-start">
                            <img src={Two}/>
                            <div className="text-center sm:text-left font-inter font-normal text-white text-lg">{t('about_section_four_content_two_title')}</div>
                            <div className="text-center sm:text-left font-instrument font-medium text-white text-sm">{t('about_section_four_content_two_content')}</div>
                        </div>

                        <div className="flex flex-col gap-3 items-center sm:items-start">
                            <img src={Three}/>
                            <div className="text-center sm:text-left font-inter font-normal text-white text-lg">{t('about_section_four_content_three_title')}</div>
                            <div className="text-center sm:text-left font-instrument font-medium text-white text-sm">{t('about_section_four_content_three_content')}</div>
                        </div>

                        <div className="flex flex-col gap-3 items-center sm:items-start">
                            <img src={Four}/>
                            <div className="text-center sm:text-left font-inter font-normal text-white text-lg">{t('about_section_four_content_four_title')}</div>
                            <div className="text-center sm:text-left font-instrument font-medium text-white text-sm">{t('about_section_four_content_four_content')}</div>
                        </div>

                        <div className="flex flex-col gap-3 items-center sm:items-start">
                            <img src={Five}/>
                            <div className="text-center sm:text-left font-inter font-normal text-white text-lg">{t('about_section_four_content_five_title')}</div>
                            <div className="text-center sm:text-left font-instrument font-medium text-white text-sm">{t('about_section_four_content_five_content')}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Our Journey */}
            <div className='w-full bg-[#05140D]'>
                <div className='max-w-screen-xl mx-auto pb-20 px-6 sm:px-8'>
                    <div className='w-full py-10 border border-[#29B473] rounded-xl flex flex-col justify-center items-center gap-4 md:gap-8'>
                        <div className='flex flex-col items-center items-center gap-1 md:gap-2'>
                            <div className='font-inter font-medium text-xl text-white text-center leading-[30px]'>{t("about_section_five_title")}</div>
                            <div className='font-inter font-semibold text-md text-white text-center leading-[30px]'>{t("about_section_five_content_one")}</div>
                        </div>
                        <div className='w-1/2 font-instrument font-normal text-sm text-center text-white leading-[27px]'>
                            {t("about_section_five_content_two")}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                            <Join_Wings />
                            <Discover_Projects />
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
}