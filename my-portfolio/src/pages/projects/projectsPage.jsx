import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './projects-page.css'
import firstMainImg from "../../Images/first_project-imgs/main_img.png"
import secondMain from "../../Images/second_project-imgs/main_img.jpg"
import thirdMain from "../../Images/third_project-imgs/main_img.webp"
import fourthMain from "../../Images/fourth_project-imgs/main_img.png"
import fifthMain from "../../Images/fifth_project-imgs/main_img.jpg"
import sixthMain from "../../Images/sixth_project-imgs/main_img.webp"


const projectsData = [
    {
        id: 1,
        imgSrc: firstMainImg,
        alt: "E-commerce Platform",
        title: "E-Commerce Platform",
        description: "A fully responsive online store with secure payment processing and inventory management.",
        tech: ["React", "Node.js", "MongoDB"],
        category: "ecommerce",
        link: "/projectDetail/1"
    },
    {
        id: 2,
        imgSrc: secondMain,
        alt: "Corporate Website",
        title: "Corporate Website",
        description: "Modern website for a Fortune 500 company with custom CMS and interactive elements.",
        tech: ["WordPress", "JavaScript", "MySQL"],
        category: "corporate",
        link: "/projectDetail/2"
    },
    {
        id: 3,
        imgSrc: thirdMain,
        alt: "Fitness Tracking App",
        title: "Fitness Tracking App",
        description: "Cross-platform mobile application for fitness tracking with social features.",
        tech: ["React Native", "Firebase", "Redux"],
        category: "mobile",
        link: "/projectDetail/3"
    },
    {
        id: 4,
        imgSrc: fourthMain,
        alt: "SaaS Dashboard",
        title: "SaaS Dashboard",
        description: "Interactive dashboard with real-time data visualization and user analytics.",
        tech: ["Vue.js", "D3.js", "Express"],
        category: "web",
        link: "/projectDetail/4"
    },
    {
        id: 5,
        imgSrc: fifthMain,
        alt: "Educational Platform",
        title: "Educational Platform",
        description: "Online learning platform with interactive course materials and student tracking.",
        tech: ["Angular", "Node.js", "MongoDB"],
        category: "web",
        link: "/projectDetail/5"
    },
    {
        id: 6,
        imgSrc: sixthMain,
        alt: "Restaurant Website",
        title: "Restaurant Website",
        description: "Elegant website with online reservation system and menu ordering capabilities.",
        tech: ["PHP", "MySQL", "JavaScript"],
        category: "ecommerce",
        link: "/projectDetail/6"
    }
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' ? projectsData : projectsData.filter(project => project.category === activeFilter);

  return (
    <main className="projects-main">
        <div className="o-hero">
            <div className="o-hero-content text-center">
                <h1>Our <span className="highlight">Projects</span></h1>
                <p>Explore our portfolio of innovative web solutions and digital experiences</p>
            </div>
            <div className="o-hero-animation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className="projects-content section-padding">
            <div className="filter-container">
                <h2>Filter Projects</h2>
                <div className="filter-options">
                    <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
                    <button className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} onClick={() => setActiveFilter('web')}>Web Design</button>
                    <button className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} onClick={() => setActiveFilter('mobile')}>Mobile App</button>
                    <button className={`filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`} onClick={() => setActiveFilter('ecommerce')}>E-commerce</button>
                    <button className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`} onClick={() => setActiveFilter('corporate')}>Corporate</button>
                </div>
            </div>

            <div className="o-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="o-card" data-category={project.category}>
                        <div className="o-c-image">
                            <img src={project.imgSrc} alt={project.alt} />
                        </div>
                        <div className="o-c-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((techItem, index) => (
                                    <span key={index}>{techItem}</span>
                                ))}
                            </div>
                            <Link to={project.link} className="btn-view-project">View Project</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        

        <div className="cta-section">
            <div className="cta-container">
                <h2>Have a project in mind?</h2>
                <p>Let's collaborate to bring your vision to life with our expertise in web development and design.</p>
                <Link to="/contact" className="btn-primary">Contact Us</Link>
            </div>
        </div>
    </main>
  )
}

export default Projects
