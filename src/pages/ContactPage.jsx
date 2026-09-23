import { useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteNavigation from "../components/SiteNavigation";

const contactImage =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=92";
const studioImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src={contactImage}
            alt="Contemporary luxury residence at sunset"
          />
        </div>
        <SiteNavigation variant="contact" />
        <div className="contact-hero-content">
          <div className="contact-hero-copy">
            <p className="contact-label">Let&apos;s Connect</p>
            <h1>
              Great
              <br />
              Spaces
              <br />
              Begin with
              <br />a Conversation.
            </h1>
            <p className="contact-hero-desc">
              Whether you&apos;re planning a new home, a commercial space, or
              simply exploring ideas - we&apos;d love to hear from you.
              Let&apos;s create something thoughtful together.
            </p>
            <span className="contact-hero-bottom">
              People / Places / Purpose
            </span>
          </div>
        </div>
        <div className="contact-hero-side">
          Ideas
          <br />
          Spaces
          <br />
          People
          <br />A Brighter
          <br />
          Tomorrow
        </div>
        <div className="contact-scroll">
          Scroll Down <span>↓</span>
        </div>
      </section>

      <section className="contact-connect" id="contact-form">
        <div>
          <p className="contact-label">Get In Touch</p>
          <h2>
            We&apos;re Here
            <br />
            to Bring Your
            <br />
            Vision to Life.
          </h2>
        </div>
        <div className="contact-middle">
          <p>
            From initial concepts to final execution, our team is ready to
            discuss your ideas, answer your questions and help you take the next
            step.
          </p>
          <a className="contact-link" href="#contact-form">
            Start A Conversation <span aria-hidden="true">→</span>
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="contact-field"
            type="text"
            placeholder="Full Name"
            aria-label="Full Name"
            required
          />
          <input
            className="contact-field"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            required
          />
          <input
            className="contact-field"
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
          />
          <select
            className="contact-field"
            defaultValue=""
            aria-label="Project Type"
          >
            <option value="" disabled>
              Project Type
            </option>
            <option>Residential</option>
            <option>Interior</option>
            <option>Commercial</option>
            <option>Renovation</option>
            <option>Visualization</option>
          </select>
          <textarea
            className="contact-field"
            placeholder="Your Message"
            aria-label="Your Message"
          />
          <button className="contact-submit" type="submit">
            {submitted ? "Message Received" : "Send Message"}{" "}
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>

      <section className="contact-location">
        <div className="contact-map">
          <div className="contact-map-copy">
            <p className="contact-label">Our Location</p>
            <h2>
              Designing
              <br />
              from the Heart
              <br />
              of Nagpur
            </h2>
            <p>
              We are based in Nagpur, working with clients across India and
              globally. Our studio is a space for ideas, collaboration and
              creativity - you&apos;re always welcome to visit.
            </p>
            <a
              className="contact-link"
              href="https://www.google.com/maps/search/?api=1&query=Nagpur%2C%20Maharashtra%2C%20India"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="contact-map-pin">
            <span>⌖</span>
            <small>
              NAGPUR
              <br />
              INDIA
            </small>
          </div>
        </div>
        <div className="contact-studio-image">
          <img src={studioImage} alt="Refined contemporary interior" />
        </div>
      </section>

      <section className="contact-details">
        <div>
          <span className="contact-detail-icon">⌖</span>
          <div>
            <h3>Our Studio</h3>
            <p>
              Dream Decor Interior &amp; Exterior
              <br />
              Civil Lines, Nagpur, Maharashtra
              <br />
              India - 440001
            </p>
          </div>
        </div>
        <div>
          <span className="contact-detail-icon">⌕</span>
          <div>
            <h3>Call Us</h3>
            <p>
              +91 98765 43210
              <br />
              +91 91234 56789
            </p>
          </div>
        </div>
        <div>
          <span className="contact-detail-icon">✉</span>
          <div>
            <h3>Email Us</h3>
            <p>
              hello@atelier.studio
              <br />
              projects@atelier.studio
            </p>
          </div>
        </div>
        <div>
          <span className="contact-detail-icon">◷</span>
          <div>
            <h3>Working Hours</h3>
            <p>
              Mon - Sat : 10:00 AM - 6:00 PM
              <br />
              Sunday : By Appointment
            </p>
          </div>
        </div>
      </section>

      <section className="contact-final">
        <div className="contact-final-bg">
          <img src={contactImage} alt="Luxury terrace overlooking landscape" />
        </div>
        <div className="contact-final-copy">
          <p className="contact-label">Let&apos;s Create</p>
          <h2>
            Something
            <br />
            Timeless.
          </h2>
          <a className="contact-link" href="#contact-form">
            Start A Project <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="contact-final-side">
          Architecture
          <br />
          Interiors
          <br />
          Landscapes
          <br />
          Experiences
        </div>
        <div className="contact-final-brand">
          DREAM DECOR<small>INTERIOR &amp; EXTERIOR</small>
        </div>
      </section>
      <SiteFooter variant="contact" />
    </div>
  );
}
