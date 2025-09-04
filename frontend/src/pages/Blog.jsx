import { useState, useEffect } from "react";
import apiPublic from "../api/axios_public";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";
import { useTranslation } from "react-i18next";

// Images
import BlogImage from "../assets/content/blog/blog_image.png";

// Cards
import ReadArticleCard from "../components/cards/read_article_card";

// Titles
import Title from "../components/content_headers/Title";

export default function Blog() {
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.language === 'en';

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await apiPublic.get('/blogs/');
                setAllBlogs(res.data);
                setBlogs(res.data.filter((blog) => blog.language === i18n.language));
            } catch (err) {
                console.error("Failed to fetch blogs", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, []);

    useEffect(() => {
        setBlogs(allBlogs.filter((blog) => blog.language === i18n.language));
    }, [i18n.language, allBlogs]);

    return (
        <>
            {/* Navgation Bar */}
            <NavBar page="Blog" />

            {/* Head Image */}
            <div
                className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${BlogImage})` }}
            >
                <div className={`max-w-screen-xl ${isEnglish && 'px-6'} px-1 sm:px-8 flex flex-col items-center text-center gap-6`}>
                    <div
                        className="
                        py-20 sm:py-28 lg:py-44
                        font-brico font-semibold 
                        text-[32px] leading-[40px] 
                        sm:text-[48px] sm:leading-[56px] 
                        lg:text-[55px] lg:leading-[60px] 
                        xl:text-[64px] xl:leading-[70px] 
                        text-white text-center
                    "
                    >
                        {t("blog_section_head_title")}
                    </div>
                </div>
            </div>

            {/* Blogs */}
            <div className="w-full min-h-[100vh] bg-[#05140D]">
                <div className="max-w-screen-xl mx-auto">
                    <div className="py-20 w-full">
                        <Title title={"blog_section_title_tag"} />
                    </div>

                    {/* Blog Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-10">

                        {loading ? (
                            <div role="status" className="flex items-center justify-center h-full">
                                <svg
                                    aria-hidden="true"
                                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            blogs &&
                            blogs.map((blog, index) => (
                                <ReadArticleCard
                                    key={blog.id || index}
                                    title={blog.title}
                                    imagePath={blog.preview_image}
                                    id={blog.id}
                                />
                            ))
                        )}
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}