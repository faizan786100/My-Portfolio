import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"
import MainImage from './../../Images/Main_page_image.webp'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero_inner">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="fadeIn">
                                <h1 className="main_img-heading">
                                    Get the best <br />
                                    <span className="highlight">Web Development</span> <br />
                                    Services
                                </h1>
                                <p className="main_img-desc">
                                    Transform your ideas into reality with our top-notch web development services.
                                    We create modern, responsive, and user-friendly websites to elevate your online presence.
                                </p>
                                <div className="cta-buttons mt-3">
                                    <Link to="/contact" className="btn-primary pulse">Get Started</Link>
                                    <a href="#projects" className="btn-secondary ms-3">View Projects</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <figure className="slideIn">
                                <img src={MainImage} alt="Web Development" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
