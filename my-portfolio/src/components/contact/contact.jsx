import React, { useState } from 'react'
import "./contact.css"

function ContactForm() {
    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult('Sending...')

        const formData = new FormData(event.target)
        formData.append('access_key', '3f499c95-02df-4970-9ca2-49b1698259af')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (data && data.success) {
                setResult('Success!')
                event.target.reset()
            } else {
                const message = (data && data.message) ? data.message : 'Submission failed'
                setResult('Error: ' + message)
            }
        } catch (err) {
            setResult('Error: ' + (err.message || 'Network error'))
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
            <p aria-live="polite">{result}</p>
        </form>
    )
}

const contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact_inner">
                    <div className="heading text-center">
                        <h2 className="sec-h2">Contact Us</h2>
                    </div>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p>Awan Street, Adyala Road, Rawalpindi</p>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-phone"></i>
                                <p>+92 335 1564708</p>
                            </div>
                            <div className="contact-item">
                                <i className="bi bi-envelope"></i>
                                <p>frontenddevloper38@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact
