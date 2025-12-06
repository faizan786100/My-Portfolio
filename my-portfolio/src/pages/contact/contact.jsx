import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [result, setResult] = useState('')
  const [success, setSuccess] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')
    setSuccess(false)

    const form = event.target
    const formData = new FormData(form)
    formData.append('access_key', '3f499c95-02df-4970-9ca2-49b1698259af')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data && data.success) {
        setResult('Success!')
        setSuccess(true)
        form.reset()
      } else {
        const message = (data && data.message) ? data.message : 'Submission failed'
        setResult('Error: ' + message)
      }
    } catch (err) {
      setResult('Error: ' + (err.message || 'Network error'))
    }
  }

  return (
    <main>
      <section className="o-hero">
        <div className="o-hero-content text-center">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>We're here to help you build your digital presence. Let's start a conversation about your project.
          </p>
        </div>
        <div className="o-hero-animation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="contact-details">
        <div className="container">
          <div className="contact-details_inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-info-card">
                  <div className="row mb-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="contact-method">
                        <div className="icon-container">
                          <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <h3>Our Location</h3>
                        <p>Pakistan, Rawalpindi, Main Adyala Road</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="contact-method">
                        <div className="icon-container">
                          <i className="bi bi-phone"></i>
                        </div>
                        <h3>Phone Number</h3>
                        <p>+92 335 1564 708<br />+92 336 5384 792</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="contact-method">
                        <div className="icon-container">
                          <i className="bi bi-envelope"></i>
                        </div>
                        <h3>Email Address</h3>
                        <p>frontenddevloper38@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="contact-method">
                        <div className="icon-container">
                          <i className="bi bi-clock"></i>
                        </div>
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 9am - 5pm<br />Weekend: 10am - 2pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-container">
                  <div className="heading">
                    <h2 className="sec-h2">Send Us a Message</h2>
                  </div>
                  <form className="contact_form" id="contactForm" onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Your Name</label>
                          <input type="text" id="name" name="name" placeholder="Enter your name"
                            required />
                        </div>
                      </div>
                      <div className="col col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Your Email</label>
                          <input type="email" id="email" name="email" placeholder="Enter your email"
                            required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea id="message" name="message" rows="6"
                        placeholder="Tell us about your project..." required></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Send Message <i
                      className="bi bi-paper-plane"></i></button>
                  </form>
                  <div id="formSuccess" className="form-success" style={{ display: success ? 'flex' : 'none' }}>
                    <i className="bi bi-check-circle"></i>
                    <p>Thank you! Your message has been sent successfully.</p>
                  </div>
                  {result && <p className="sr-only" aria-live="polite">{result}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="heading d-flex justify-content-center align-items-center flex-column">
          <h2 className="sec-h2">Find Us</h2>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.0497633608556!2d73.0124479766476!3d33.474055148037195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8df1eb448567%3A0xba41c1632d0f154c!2sAdyala%20Rd%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1742709444083!5m2!1sen!2sus"
            title="Embedded Google Map showing our location"
            width="100%" height="100%" allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
  )
}

export default Contact
