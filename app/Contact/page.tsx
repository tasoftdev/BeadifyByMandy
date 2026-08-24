"use client";

import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-content">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Have a question or want to create something special?
          <br />
          We&apos;d love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <h3>WhatsApp</h3>
              <p>+234 *** *** ****</p>
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📸</span>
            <div>
              <h3>Instagram</h3>
              <a
                href="https://instagram.com/beadifybymandy"
                target="_blank"
                rel="noopener noreferrer"
              >
                @beadifybymandy
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🎵</span>
            <div>
              <h3>TikTok</h3>
              <a
                href="https://www.tiktok.com/@beadifybymandy"
                target="_blank"
                rel="noopener noreferrer"
              >
                @beadifybymandy
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          {submitted && (
            <p className="success-message">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          )}

          <form
            action="https://formspree.io/f/mvkpjgan"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              />
            </div>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
