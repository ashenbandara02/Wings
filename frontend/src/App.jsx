import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import PublicRoute from "./validators/PublicRoute";
import PrivateRoute from "./validators/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogView from "./pages/sections/BlogView";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <ScrollToTop/>
          <Routes>
            {/* Routes for Public access */}
            <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />
            <Route path="/gallery" element={<PublicRoute><Gallery /></PublicRoute>} />
            <Route path="/resources" element={<PublicRoute><Resources /></PublicRoute>} />
            <Route path="/projects" element={<PublicRoute><Projects /></PublicRoute>} />
            <Route path="/blog" element={<PublicRoute><Blog /></PublicRoute>} />
            <Route path="/blogs/:id" element={<PublicRoute><BlogView /></PublicRoute>} />

            {/* Routes for Signed User access */}

          </Routes>
        </Router>
      </I18nextProvider>
    </>
  )
}

export default App
