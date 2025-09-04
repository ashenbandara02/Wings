import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Logo from "../../assets/logos/nav_logo.svg";

// Buttons
import JoinUs_One from "../../components/buttons/JoinUs_One";
import LanguageControl from "../buttons/LanguageControl";
import { useTranslation } from "react-i18next";


export default function NavBar({ page, triggerJoinUs, triggerLogin }){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const {t} = useTranslation();
    const { i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';
    
    return (
        <>
            <nav className="w-full bg-[#05140D]">
                <div className="max-w-screen-xl py-2 px-6 lg:px-2 mx-auto flex flex-row justify-between">
                    {/* Nav Bar for bigger screens */}
                    <div className="grid grid-cols-3 items-center">
                        {/* Part 1 */}
                        <div className="">
                            <img src={Logo} className="cursor-pointer min-w-40 w-44 sm:w-56" onClick={() => { navigate("/"); }} />
                        </div>

                        {/* Part 2 */}
                        <div className="hidden lg:flex flex-row justify-center gap-8">
                            <Link to="/" className={`${page == "Home" ? 'text-[#159D82]' : 'text-white'} text-center block font-instrument font-medium text-md leading-[20px]`}>
                                {t('nav_home')}
                            </Link>
                            <Link to="/about" className={`${page == "About" ? 'text-[#159D82]' : 'text-white'} ${isEnglish ? '' : 'min-w-[74px]'}  text-center block font-instrument font-medium text-md leading-[20px] hover:text-[#159D82] transition-colors duration-300`}>
                                {t('nav_about')}
                            </Link>
                            <Link to="/gallery" className={`${page == "Gallery" ? 'text-[#159D82]' : 'text-white'} text-center block font-instrument font-medium text-md leading-[20px] hover:text-[#159D82] transition-colors duration-300`}>
                                {t('nav_gallery')}
                            </Link>
                            <Link to="/resources" className={`${page == "Resources" ? 'text-[#159D82]' : 'text-white'} text-center block font-instrument font-medium text-md leading-[20px] hover:text-[#159D82] transition-colors duration-300`}>
                                {t('nav_resources')}
                            </Link>
                            <Link to="/projects" className={`${page == "Projects" ? 'text-[#159D82]' : 'text-white'} text-center block font-instrument font-medium text-md leading-[20px] hover:text-[#159D82] transition-colors duration-300`}>
                                {t('nav_projects')}
                            </Link>
                            <Link to="/blog" className={`${page == "Blog" ? 'text-[#159D82]' : 'text-white'} text-center block font-instrument font-medium text-md leading-[20px] hover:text-[#159D82] transition-colors duration-300`}>
                                {t('nav_blog')}
                            </Link>
                            <div
                                onClick={() => {
                                    triggerLogin();
                                }}
                                className="cursor-pointer text-white text-center block font-instrument font-medium text-md leading-[20px] hover:text-[#159D82] transition-colors duration-300">
                                {t('nav_login')}
                            </div>
                        </div>

                        {/* Part 3 */}
                        <div className="hidden lg:flex flex-row justify-end gap-6">
                            <LanguageControl setSidebarOpen={setSidebarOpen} />
                            <JoinUs_One triggerJoinUs={triggerJoinUs} />
                        </div>
                    </div>

                    {/* Hamburger button only on small screens */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-xl focus:outline-none lg:hidden text-white"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* Sidebar that slides in from the right on small screens */}
            <div
                className={`fixed top-0 bottom-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"} 
        md:hidden`}
            >
                <div className="bg-[#05140D] h-full p-6 space-y-4">
                    <div className="flex justify-end">
                        <button className="text-white" onClick={() => setSidebarOpen(false)}>✕</button>
                    </div>
                    <nav className="flex flex-col gap-1">
                        <button onClick={() => navigate("/")} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'Home' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_home')}
                        </button>
                        <button onClick={() => navigate("/about")} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'About' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_about')}
                        </button>
                        <button onClick={() => navigate("/gallery")} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'Gallery' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_gallery')}
                        </button>
                        <button onClick={() => navigate("/resources")} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'Resources' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_resources')}
                        </button>
                        <button onClick={() => navigate("/projects")} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'Projects' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_projects')}
                        </button>
                        <button onClick={() => navigate("/blog")} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'Blog' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_blog')}
                        </button>
                        <button onClick={() => {
                            triggerLogin();
                            setSidebarOpen(false);
                        }} 
                            className={`flex items-center justify-between px-4 py-2 
                            ${page == 'Login' ? 'bg-gradient-to-r from-[#159D82] to-[#81FEE8] text-black border-[1px] border-[#29B473]' : 
                            'text-white'} text-left text-sm font-instrument font-medium rounded-lg
                            transition-all duration-300 ease-in-out 
                            hover:shadow-md hover:scale-[1.05] 
                            active:scale-[0.97] active:shadow-inner`}>
                            {t('nav_login')}
                        </button>

                        {/* Section Two */}
                        <div className="flex flex-row justify-between border-t border-t-white mt-2 pt-2 ">
                            <LanguageControl setSidebarOpen={setSidebarOpen}/>
                            <JoinUs_One/>
                        </div>

                        
                    </nav>
                </div>
            </div>
            {/* Overlay when sidebar is open */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
                />
            )}
        </>
        
    );
}