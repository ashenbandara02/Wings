import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';


import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

// Button Imports
import JoinUs_Two from '../components/buttons/JoinUs_Two';
import See_Our_Projects from '../components/buttons/See_Our_Projects';
import Contact_us from '../components/buttons/Contact_us';

// Card Imports
import ReadArticleCard from "../components/cards/read_article_card";

// Title Imports
import Title from '../components/content_headers/Title';

// Image Imports
import ImageOne from "../assets/content/home/image_one.png";
import ImageSupport from "../assets/content/home/support_image.png";
import SampleImage from "../assets/content/home/sample.png"


export default function Home(){
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    return(
        <>
            {/* Navgation Bar */}
            <NavBar page="Home"/>

            {/* Where the next generation of aviation begins */}
            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${ImageOne})` }}
            >
                <div className={`max-w-screen-xl ${isEnglish && 'px-6'} px-1 sm:px-8 flex flex-col items-center text-center gap-6`}>
                    <div className='font-instrument font-normal text-lg leading-[27px] text-white'>{t('home_section_one_title_one')}</div>
                    <div className='font-inter font-semibold text-[55px] sm:text-[64px] leading-[60px] sm:leading-[70px] text-white text-center'
                    >
                        <Trans
                            i18nKey="home_section_one_title_two"
                            components={{ highlight: <span className="text-[#1ED7B6] " /> }}
                        />
                    </div>
                    
                    <JoinUs_Two />
                </div>
            </div>

            {/* Ready for departure */}
            <div className='w-full bg-[#05140D]'>
                <div className='max-w-screen-xl mx-auto px-6 sm:px-8 flex flex-col items-center'>
                    <div className='md:w-full lg:w-1/2 text-white text-center font-instrument font-normal text-md leading-[27px]
                    p-10 border border-[#29B473] rounded-xl my-20'>
                        "{t("home_section_two_title_one")}"
                        <br/>
                        {t("home_section_two_title_one_two")}
                    </div>
                    
                    <Title title={"home_section_two_title_tag"}/>
                    <div className='my-20 grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {/* Latest 3 Blog Posts */}
                        <ReadArticleCard 
                            title={"How to become a pilot ? a step-by-step guide"}
                            imagePath={SampleImage}
                            id={1}
                        />
                        <ReadArticleCard 
                            title={"How to become a pilot ? a step-by-step guide"}
                            imagePath={SampleImage}
                            id={1}
                        />
                        <ReadArticleCard 
                            title={"How to become a pilot ? a step-by-step guide"}
                            imagePath={SampleImage}
                            id={1}
                        />
                    </div>
                </div>
            </div>

            {/* Support us */}
            <div className='w-full bg-[#05140D]'>
                <div className='max-w-screen-xl mx-auto px-6 sm:px-8'>
                    <Title title={"home_section_three_title_tag"}/>

                    <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center py-20 gap-5 md:gap-10'>
                        <img src={ImageSupport}/>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='font-inter font-medium leading-[30px] lg:leading-[70px] text-xl text-white'>{t("home_section_three_title2")}</div>
                            <div className='font-instrument font-normal text-md leading-[27px] text-white'>{t("home_section_three_contenta")}</div>
                            <div className='my-6 md:my-10 font-instrument font-normal text-md leading-[27px] text-white'>{t("home_section_three_contentb")}</div>

                            <See_Our_Projects />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Collaboration */}
            <div className='w-full bg-[#05140D]'>
                <div className='max-w-screen-xl mx-auto pb-20 px-6 sm:px-8'>
                    <div className='w-full py-10 border border-[#29B473] rounded-xl flex flex-col justify-center items-center gap-4 md:gap-8'>
                        <div className='flex flex-col items-center items-center gap-1 md:gap-2'>
                            <div className='font-inter font-medium text-xl text-white text-center leading-[30px]'>{t("home_section_four_collab_title")}</div>
                            <div className='font-inter font-semibold text-md text-white text-center leading-[30px]'>{t("home_section_four_collab_sub_title")}</div>
                        </div>
                        <div className='w-1/2 font-instrument font-normal text-sm text-center text-white leading-[27px]'>
                            {t("home_section_four_collab_content")}
                        </div>
                        <Contact_us/>
                    </div>
                    
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
}