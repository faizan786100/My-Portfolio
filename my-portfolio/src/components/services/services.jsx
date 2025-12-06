import React from 'react';
import { Link } from "react-router-dom";
import "./services.css";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicesData = [
  {
    icon: "bi bi-code",
    title: "Web Development",
    description: "Custom websites built with the latest technologies for optimal performance, speed, and user experience.",
    features: ["Responsive design", "Cross-browser compatibility", "Modern frameworks"],
    ctaText: "Get Started",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-search",
    title: "SEO Optimization",
    description: "Improve your website's visibility and drive organic traffic with our comprehensive SEO strategies.",
    features: ["Keyword research", "On-page optimization", "Performance tuning"],
    ctaText: "Learn More",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-palette",
    title: "UI/UX Design",
    description: "Creative and user-focused designs that enhance usability while reflecting your brand identity.",
    features: ["User research", "Wireframing & prototyping", "Visual design"],
    ctaText: "Learn More",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-phone",
    title: "Responsive Design",
    description: "Websites that adapt perfectly to all devices and screen sizes for a seamless user experience.",
    features: ["Mobile-first approach", "Adaptive layouts", "Touch-friendly interfaces"],
    ctaText: "Get Started",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-cart",
    title: "E-Commerce Solutions",
    description: "Complete online store setup with secure payment gateways, inventory management, and customer analytics.",
    features: ["Custom shopping carts", "Secure checkout process", "Inventory management"],
    ctaText: "Learn More",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-server",
    title: "Web Hosting",
    description: "Reliable hosting solutions with 99.9% uptime, excellent support, and optimized server configurations.",
    features: ["SSD storage", "Daily backups", "SSL certificates"],
    ctaText: "Get Started",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-graph-up",
    title: "Analytics & Reporting",
    description: "Data-driven insights to track your website's performance and user behavior for continuous improvement.",
    features: ["Custom dashboards", "Conversion tracking", "User behavior analysis"],
    ctaText: "Learn More",
    ctaLink: "#contact"
  },
  {
    icon: "bi bi-gear",
    title: "Maintenance & Support",
    description: "Ongoing website maintenance and technical support to keep your site secure, updated, and running smoothly.",
    features: ["Regular updates", "Security monitoring", "Performance optimization"],
    ctaText: "Get Started",
    ctaLink: "#contact"
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services_inner">

          <div className="heading d-flex justify-content-center align-items-center flex-column">
            <h2 className="sec-h2">Our Services</h2>
            <p className="section-subheading">Delivering exceptional web solutions tailored to your business needs</p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="services-swiper"
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <div className="card-icon"><i className={service.icon}></i></div>
                  <div className="content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}><i className="bi bi-check"></i> {feature}</li>
                      ))}
                    </ul>
                    <a href={service.ctaLink} className="service-cta">{service.ctaText}</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="services-cta">
            <h2>Ready to transform your digital presence?</h2>
            <p>Let us help you take your business to the next level with our expert web services.</p>
            <a href="#contact" className="btn-primary">Get Free Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
