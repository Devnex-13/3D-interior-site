const services = [
  [
    "01",
    "Architectural Design",
    "Concept development, spatial planning and architectural detailing.",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=88",
    "Luxury architectural residence",
  ],
  [
    "02",
    "Interior Design",
    "Material, furniture, lighting and spatial composition.",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=88",
    "Luxury interior design",
  ],
  [
    "03",
    "Exterior Design",
    "Facades, landscape integration and architectural identity.",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=88",
    "Contemporary exterior and pool",
  ],
  [
    "04",
    "3D Visualization",
    "Photorealistic visualization to bring ideas to life.",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=88",
    "Architectural visualization",
  ],
  [
    "05",
    "Space Planning",
    "Functional layouts for harmonious living.",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=88",
    "Interior floor plan and space planning",
  ],
  [
    "06",
    "Renovation & Consultation",
    "Transforming spaces with purpose and precision.",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=88",
    "Luxury renovation materials",
  ],
];
import SiteFooter from "../components/SiteFooter";
import SiteNavigation from "../components/SiteNavigation";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
            alt="Luxury contemporary residence at sunset"
          />
        </div>
        <SiteNavigation variant="services" />
        <div className="services-hero-content">
          <div>
            <p className="services-eyebrow">Our Services</p>
            <h1>
              From
              <br />
              Vision
              <br />
              to Living
              <br />
              Spaces
            </h1>
            <p className="services-hero-copy">
              Architecture, interior and exterior design services crafted for a
              more meaningful way of living.
            </p>
            <a className="services-text-link" href="#services">
              Explore Services <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="services-hero-side">
            People&nbsp; Places&nbsp; Emotions&nbsp; Spaces
          </div>
        </div>
        <div className="services-hero-counter">01 — 06</div>
      </section>

      <section className="services-intro">
        <div>
          <p className="services-section-label">What We Do</p>
          <h2>
            Design
            <br />
            for a Better
            <br />
            Tomorrow
          </h2>
        </div>
        <div className="services-intro-text">
          <p>
            We offer a full spectrum of architectural and interior design
            services, bringing together creativity, functionality and
            craftsmanship to create spaces that elevate everyday life.
          </p>
          <a className="services-text-link" href="#approach">
            Our Approach <span aria-hidden="true">→</span>
          </a>
        </div>
        <div>
          <div className="services-intro-image">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=88"
              alt="Refined luxury interior"
            />
          </div>
          <p className="services-quote">
            “Good design
            <br />
            shapes a better
            <br />
            way of living.”
          </p>
        </div>
      </section>

      <section id="services" className="services-card-grid">
        {services.map(([number, title, description, image, alt]) => (
          <article className="service-card" key={number}>
            <div className="service-image">
              <img src={image} alt={alt} />
              <span className="service-number">{number}</span>
              <span className="service-title">{title}</span>
            </div>
            <div className="service-body">
              <p>{description}</p>
              <a className="service-learn" href="#contact">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section id="approach" className="services-approach">
        <div className="approach-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
            alt="Luxury open-plan dining and living space"
          />
        </div>
        <div className="approach-content">
          <p className="services-section-label">Why Choose Us</p>
          <h2>
            A Thoughtful
            <br />
            Process.
            <br />
            Exceptional
            <br />
            Results.
          </h2>
          <p>
            We combine design intelligence, technical expertise and a deep
            understanding of lifestyle to create timeless spaces.
          </p>
          <div className="principles">
            <div className="principle">
              <div className="principle-icon">◇</div>
              <h3>Bespoke Design</h3>
              <p>Tailored to your vision and lifestyle.</p>
            </div>
            <div className="principle">
              <div className="principle-icon">⌂</div>
              <h3>End-to-End Support</h3>
              <p>From concept to completion.</p>
            </div>
            <div className="principle">
              <div className="principle-icon">◈</div>
              <h3>Lasting Value</h3>
              <p>Designs that stand the test of time.</p>
            </div>
          </div>
          <a className="services-text-link" href="/studio">
            Our Process <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="contact" className="services-cta">
        <div>
          Let&apos;s Create
          <br />
          Something Timeless.
        </div>
        <h2>
          Ready to Bring
          <br />
          Your Vision to Life?
        </h2>
        <a href="/contact">
          Start a Project <span aria-hidden="true">→</span>
        </a>
      </section>
      <SiteFooter variant="services" />
    </div>
  );
}
