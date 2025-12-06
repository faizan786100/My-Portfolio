import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import firstMainImg from "../../Images/first_project-imgs/main_img.png"
import secondMain from "../../Images/second_project-imgs/main_img.jpg"
import thirdMain from "../../Images/third_project-imgs/main_img.webp"
import fourthMain from "../../Images/fourth_project-imgs/main_img.png"
import fifthMain from "../../Images/fifth_project-imgs/main_img.jpg"
import sixthMain from "../../Images/sixth_project-imgs/main_img.webp"
import client from "../../Images/client_01.png"

const projects = {
  '1': {
    id: 1,
    title: 'E-Commerce Website',
    category: 'E-Commerce',
    client: 'Fashion Retailer',
    duration: '3 months',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    overview: 'A modern e-commerce platform with advanced features including real-time inventory management, secure payment processing, and personalized shopping experience.',
    description: 'This project involved creating a comprehensive e-commerce solution that handles thousands of products with real-time inventory updates and secure payment processing.',
    challenge: 'The main challenge was implementing a scalable architecture that could handle high traffic during peak shopping seasons while maintaining fast load times.',
    solution: 'We implemented a microservices architecture with React frontend, Node.js backend, and MongoDB database. Used Redis for caching and CDN for static assets.',
    results: 'The platform achieved 40% faster load times and 25% increase in conversion rates compared to the previous system.',
    features: [
      'Advanced product filtering and search',
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Mobile-responsive design',
      'Admin dashboard for product management'
    ],
    testimonial: 'The new e-commerce platform has transformed our online business. The improved user experience and faster load times have significantly increased our sales.',
    testimonialAuthor: 'Sarah Johnson',
    testimonialPosition: 'CEO, Fashion Retailer',
    gallery: [firstMainImg,
      secondMain
    ],
    relatedIds: ['2', '3']
  },
  '2': {
    id: 2,
    title: 'Corporate Website',
    category: 'Corporate',
    client: 'Fortune 500 Company',
    duration: '2 months',
    technologies: ['React', 'Next.js', 'Contentful CMS'],
    overview: 'A modern corporate website with custom CMS integration, showcasing company services and maintaining brand consistency.',
    description: 'Developed a professional corporate website with custom content management system for easy content updates.',
    challenge: 'Creating a flexible CMS that non-technical staff could use while maintaining design consistency.',
    solution: 'Built a custom CMS with React and integrated Contentful for content management, ensuring easy updates.',
    results: 'Improved content update efficiency by 60% and reduced maintenance costs by 30%.',
    features: [
      'Custom CMS integration',
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Analytics integration'
    ],
    testimonial: 'The new website has significantly improved our online presence and made content management much easier for our team.',
    testimonialAuthor: 'Michael Chen',
    testimonialPosition: 'Marketing Director',
    gallery: [secondMain
    ],
    relatedIds: ['1', '4']
  },
  '3': {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    client: 'Health Startup',
    duration: '4 months',
    technologies: ['React Native', 'Firebase', 'Redux'],
    overview: 'A cross-platform mobile application for fitness tracking with real-time analytics and social features.',
    description: 'This app enables users to track workouts, monitor progress, set goals, and connect with friends for motivation. It supports both iOS and Android devices.',
    challenge: 'Building a seamless experience across platforms while ensuring accurate activity tracking and secure user data.',
    solution: 'Used React Native for cross-platform development, Firebase for real-time data sync and authentication, and Redux for state management. Integrated device sensors for activity tracking.',
    results: 'The app reached 10,000+ downloads in the first month and received high ratings for its intuitive UI and social features.',
    features: [
      'Workout and activity tracking',
      'Goal setting and progress analytics',
      'Social sharing and friend challenges',
      'Push notifications and reminders',
      'Secure cloud sync with Firebase'
    ],
    testimonial: 'Our users love the social challenges and easy tracking. The app has helped thousands stay motivated and reach their fitness goals!',
    testimonialAuthor: 'Emily Rodriguez',
    testimonialPosition: 'Product Manager, Health Startup',
    gallery: [thirdMain
    ],
    relatedIds: ['1', '2']
  },
  '4': {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Application',
    client: 'Analytics Startup',
    duration: '5 months',
    technologies: ['Vue.js', 'D3.js', 'Express'],
    overview: 'An interactive SaaS dashboard featuring real-time data visualization and comprehensive user analytics.',
    description: 'This project delivered a robust dashboard for SaaS clients, enabling them to monitor key metrics, visualize data trends, and generate custom reports. The dashboard supports multiple data sources and provides actionable insights for business growth.',
    challenge: 'Integrating real-time data streams and building scalable, interactive visualizations that remain performant with large datasets.',
    solution: 'Utilized Vue.js for a reactive UI, D3.js for advanced charting and data visualization, and Express for a secure, scalable backend API. Implemented WebSocket connections for live updates.',
    results: 'Clients reported a 50% improvement in decision-making speed and a 30% increase in user engagement with the new dashboard.',
    features: [
      'Real-time data visualization',
      'Customizable analytics widgets',
      'User segmentation and reporting',
      'Exportable charts and reports',
      'Role-based access control'
    ],
    testimonial: 'The dashboard has transformed how we analyze and act on our data. The real-time insights and beautiful charts are a game changer.',
    testimonialAuthor: 'David Wilson',
    testimonialPosition: 'CTO, Analytics Startup',
    gallery: [fourthMain
    ],
    relatedIds: ['1', '2', '3']
  },
  '5': {
    id: 5,
    title: 'Educational Platform',
    category: 'Education',
    client: 'EdTech Startup',
    duration: '6 months',
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    overview: 'Online learning platform with interactive course materials and student tracking.',
    description: 'Developed a scalable online education platform featuring interactive lessons, quizzes, and progress tracking for students. The platform supports multiple courses, real-time feedback, and teacher dashboards.',
    challenge: 'Ensuring real-time student progress tracking and building a flexible system for course creation and management.',
    solution: 'Used Angular for a dynamic front-end, Node.js for the backend API, and MongoDB for storing user progress and course data. Implemented WebSocket for live updates and notifications.',
    results: 'The platform supported over 5,000 active students in the first quarter and improved course completion rates by 35%.',
    features: [
      'Interactive course materials',
      'Student progress tracking',
      'Teacher dashboards',
      'Real-time feedback and notifications',
      'Secure user authentication'
    ],
    testimonial: 'Our teachers and students love the interactive features and real-time progress tracking. It has made online learning more engaging and effective.',
    testimonialAuthor: 'Ayesha Khan',
    testimonialPosition: 'Head of Product, EdTech Startup',
    gallery: [fifthMain
    ],
    relatedIds: ['1', '3']
  },
  '6': {
    id: 6,
    title: 'Restaurant Website',
    category: 'Hospitality',
    client: 'Fine Dining Restaurant',
    duration: '2 months',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    overview: 'Elegant website with online reservation system and menu ordering capabilities.',
    description: 'Developed a stylish and user-friendly restaurant website featuring an online reservation system, interactive menu, and ordering functionality. The site is optimized for both desktop and mobile users.',
    challenge: 'Integrating real-time reservation management and ensuring secure, seamless menu ordering for customers.',
    solution: 'Built the backend with PHP and MySQL for robust data handling, and used JavaScript for dynamic menu interactions and real-time reservation updates.',
    results: 'The restaurant saw a 40% increase in online reservations and a 30% boost in takeout orders within the first month.',
    features: [
      'Online reservation system',
      'Interactive menu with ordering',
      'Mobile-friendly design',
      'Customer reviews and ratings',
      'Secure payment integration'
    ],
    testimonial: 'Our new website has made it easy for guests to reserve tables and order food online. The feedback from customers has been fantastic!',
    testimonialAuthor: 'Ali Raza',
    testimonialPosition: 'Owner, Fine Dining Restaurant',
    gallery: [sixthMain
    ],
    relatedIds: ['1', '2']
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = projects[id];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  const relatedProjects = project.relatedIds.map(relId => projects[relId]).filter(Boolean);

  return (
    <main className="project-detail-main">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> /
          <Link to="/projects">Projects</Link> /
          <span>{project.title}</span>
        </div>
      </div>

      <div className="project-hero" key={project.id}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <figcaption className="project-meta">
                <div className="project-category">{project.category}</div>
                <h1>{project.title}</h1>
                <div className="project-overview">{project.overview}</div>
                <div className="project-details">
                  <div className="detail-item d-flex flex-wrap">
                    <span className="detail-label">Client:</span>
                    <span className="detail-value">{project.client}</span>
                  </div>
                  <div className="detail-item d-flex flex-wrap">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{project.duration}</span>
                  </div>
                  <div className="detail-item d-flex flex-wrap">
                    <span className="detail-label">Technologies:</span>
                    <div className="detail-value tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </figcaption>
            </div>
            <div className="col-lg-6">
              {project.gallery.map((img, index) => (
                <figure className="project-main-image">
                  <img src={project.gallery[0]} alt={project.title} onClick={() => openLightbox(index)} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="project-content-section">
        <div className="container">
          <div className="project-content">
            <div className="project-description">
              <h2>Project Overview</h2>
              <p>{project.description}</p>

              <h2>Challenge</h2>
              <p>{project.challenge}</p>

              <h2>Solution</h2>
              <p>{project.solution}</p>

              <h2>Results</h2>
              <p>{project.results}</p>

              <div className="key-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-gallery">
              <h2>Project Gallery</h2>
              <div className="gallery-grid">
                {project.gallery.map((img, index) => (
                  <div key={index} className="gallery-image">
                    <img src={img} alt={`Project ${index + 1}`} onClick={() => openLightbox(index)} />
                  </div>
                ))}
              </div>
            </div>

            <div className="project-testimonial">
              <blockquote>{project.testimonial}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img src={client} alt="Client" />
                </div>
                <div className="testimonial-author-info">
                  <h4>{project.testimonialAuthor}</h4>
                  <p>{project.testimonialPosition}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <h2>Interested in a similar project?</h2>
            <p>Let's discuss how we can help you achieve your goals with a custom solution tailored to your needs.</p>
            <a href="/contact" className="btn-primary">Get in Touch</a>
          </div>
        </div>
      </div>

      <div className="related-projects-section">
        <div className="container">
          <h2>Related Projects</h2>
          <p className="section-intro">Explore more projects similar to this one</p>
          <div className="related-projects">
            {relatedProjects.map((relProject, index) => {
              const relId = Object.keys(projects).find(key => projects[key] === relProject);
              return (
                <div key={index} className="related-project-card">
                  <div className="related-project-image">
                    <img src={relProject.gallery[0]} alt={relProject.title} />
                  </div>
                  <div className="related-project-content">
                    <h3>{relProject.title}</h3>
                    <p>{relProject.overview}</p>
                    <Link to={`/projectDetail/${relId}`} className="btn-view-project">View Project</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <div className="img_wrapper d-flex justify-content-center align-items-center h-100 w-100">
              <img src={project.gallery[currentIndex]} alt="Project" />
            </div>
            <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
            {project.gallery.length > 1 && (
              <>
                <button className="swiper-button-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                  <svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg>
                </button>
                <button className="swiper-button-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}><svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg></button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;
