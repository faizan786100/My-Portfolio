import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Logo from "./../../Images/logo.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navbarRef = useRef(null)
    const menuRef = useRef(null)

    // Update menu position and navbar scrolled state
    useEffect(() => {
        const navbar = () => navbarRef.current
        const menu = () => menuRef.current

        function updateMenuPosition() {
            const n = navbar()
            const m = menu()
            if (!m || !n) return

            if (menuOpen) {
                if (window.innerWidth > 992) {
                    if (window.scrollY > 50) {
                        m.style.position = 'fixed'
                        m.style.top = `${n.offsetHeight + 10}px`
                    } else {
                        m.style.position = 'absolute'
                        m.style.top = '100%'
                    }
                } else {
                    m.style.position = 'absolute'
                    m.style.top = '100%'
                }
            } else {
                m.style.position = 'absolute'
                m.style.top = '120px'
            }
        }

        function onScroll() {
            const n = navbar()
            if (!n) return
            if (window.scrollY > 50) n.classList.add('scrolled')
            else n.classList.remove('scrolled')

            // Close mobile menu on small scroll
            if (window.innerWidth <= 992 && menuOpen && window.scrollY > 10) {
                setMenuOpen(false)
            }

            updateMenuPosition()
        }

        function onResize() {
            updateMenuPosition()
        }

        updateMenuPosition()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [menuOpen])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen && window.innerWidth <= 992) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    return (
        <>
            <header>
                <nav id="navbar" ref={navbarRef} className="d-flex justify-content-between align-items-center position-fixed w-100">
                    <figure className="logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </figure>

                    <ul className="menu-des m-0 p-0">
                        <li><Link to="/" className="menu-items">Home</Link></li>
                        <li><Link to="/projects" className="menu-items">Projects</Link></li>
                        <li><Link to="/services" className="menu-items">Services</Link></li>
                        <li><Link to="/skills" className="menu-items">Skills</Link></li>
                        <li><Link to="/testimonials" className="menu-items">Testimonials</Link></li>
                        <li><Link to="/blog" className="menu-items">Blog</Link></li>
                        <li><Link to="/about" className="menu-items">About us</Link></li>
                        <li><Link to="/contact" className="menu-items">Contact us</Link></li>
                    </ul>

                    <button
                        className={`menuBox-icon ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(open => !open)}
                        aria-expanded={menuOpen}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        <span />
                    </button>

                    <ul ref={menuRef} className={`menuBox ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/" className="menu-items" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/projects" className="menu-items" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                        <li><Link to="/services" className="menu-items" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/skills" className="menu-items" onClick={() => setMenuOpen(false)}>Skills</Link></li>
                        <li><Link to="/testimonials" className="menu-items" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
                        <li><Link to="/blog" className="menu-items" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/about" className="menu-items" onClick={() => setMenuOpen(false)}>About us</Link></li>
                        <li><Link to="/contact" className="menu-items" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
                    </ul>
                </nav>
            </header>

            {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
        </>
    )
}

export default Header
