import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiPublic from "../../api/axios_public";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

// Arrow Imports
import Arrow from "../../assets/vectors/arrows/back_left.svg";

export default function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await apiPublic.get(`/blog/${id}/`);
        setBlog(res.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
      <NavBar page="Blog" />

      <div className="w-full bg-[#05140D] text-white font-instrument">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-36 py-20 min-h-[100vh]">
            {loading ? (
                    <div role="status" className="flex items-center justify-center h-full">
                        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                ) : blog && (
                    <>
                        <div className="relative">
                            <img 
                                onClick={() => {navigate("/blog");}}
                                src={Arrow} 
                                className="w-[40px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] cursor-pointer absolute top-[20px] left-[10px]
                                            transition-transform duration-300 ease-in-out
                                            hover:scale-110
                                            active:scale-95"
                                />
                            {blog.main_image && <img src={blog.main_image} className="w-full rounded-xl" alt={blog.title} />}<br/>
                        </div>
                        <h1 className="font-inter font-bold text-[28px]">{blog.title}</h1>
                        <div
                            className="flex flex-col justify-center"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </>
                )
            }

            {(!blog && !loading) &&
                (
                    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 rounded-xl">
                        <div class="text-center">
                            <p class="text-base font-semibold text-[#159D82]">404</p>
                            <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">Page not found</h1>
                            <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                            <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="/blog" class="rounded-md bg-[#159D82] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs
                                                    transition-all duration-300 ease-in-out 
                                                    hover:shadow-md hover:scale-[1.01] 
                                                    active:scale-[0.97] active:shadow-inner">Go back blogs</a>
                            </div>
                        </div>
                    </main>
                )
            }

        </div>
      </div>

      <Footer />
    </>
  );
}
