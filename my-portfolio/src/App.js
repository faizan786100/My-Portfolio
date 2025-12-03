import './App.css';
import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
// import Hero from "./components/hero/hero";
// import Footer from "./components/footer/footer";
// import About from "./components/about/about";
// import Services from "./components/services/services";
// import Testimonials from "./components/testimonials/testimonials";
// import Blogs from "./components/blogs/blog";
// import Contact from "./components/contact/contact";
// import Projects from "./components/projects/projects";
// import Skills from "./components/skills/skills";
// import ProjectPage from "./pages/projects/projectsPage";
// import ProjectDetail from "./pages/project-detail/projectDetail";
// import BlogDetail from "./pages/blog-detail/blogDetail";
// import Blogpage from "./pages/blog/blogPage"
// import Contactpage from "./pages/contact/contact"
// import ScrollToTop from "./components/ScrollToTop";
// import BackToTop from "./components/backToTop";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate 2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loading">
          <div className="Spiral" style={{animationDelay: '0.1s'}}></div>
          <div className="Spiral" style={{animationDelay: '0.2s'}}></div>
          <div className="Spiral" style={{animationDelay: '0.3s'}}></div>
          <div className="Spiral" style={{animationDelay: '0.4s'}}></div>
          <div className="Spiral" style={{animationDelay: '0.5s'}}></div>
          <div className="Spiral" style={{animationDelay: '0.6s'}}></div>
          <div className="Spiral" style={{animationDelay: '0.7s'}}></div>
        </div>
      ) : (
        <>
          {/* <Router>
            <ScrollToTop />
            <BackToTop />
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <Hero />
                  <Projects />
                  <Services />
                  <Skills />
                  <Testimonials />
                  <Blogs />
                  <About />
                  <Contact />
                  <Footer />
                </>
              } />
              <Route path="/projects" element={
                <>
                  <Header />
                  <ProjectPage />
                  <Footer />
                </>
              } />
              <Route path="/projectDetail/:id" element={
                <>
                  <Header />
                  <ProjectDetail />
                  <Footer />
                </>
              } />
              <Route path="/blog" element={
                <>
                  <Header />
                  <Blogpage />
                  <Footer />
                </>
              } />
              <Route path="/blogDetail/:id" element={
                <>
                  <Header />
                  <BlogDetail />
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Header />
                  <Contactpage />
                  <Footer />
                </>
              } />
            </Routes>
          </Router> */}
          <Header />
        </>
      )}
    </>
  );
}

export default App;
