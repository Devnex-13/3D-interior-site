import SiteFooter from "../components/SiteFooter";
import SiteNavigation from "../components/SiteNavigation";

const studioImages = {
  hero: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90",
  philosophy:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
  team: "../../atelier-studio-assets/team.jpg",
  future:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=90",
};

export default function StudioPage() {
  const steps = [
    ["01", "Discover", "Understanding your vision and context."],
    ["02", "Concept", "Exploring ideas and possibilities."],
    ["03", "Design", "Bringing it to life with detail and intent."],
    ["04", "Realize", "From drawings to real spaces."],
  ];
  const materials = [
    [
      "Stone",
      "Timeless",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=700&q=85",
    ],
    [
      "Wood",
      "Warmth",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85",
    ],
    [
      "Metal",
      "Strength",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85",
    ],
    [
      "Concrete",
      "Authenticity",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=85",
    ],
    [
      "Textile",
      "Comfort",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85",
    ],
    [
      "Nature",
      "Balance",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85",
    ],
  ];

  return (
    <div className="studio-page">
      <section className="studio-hero">
        <div className="studio-hero-bg">
          <img src={studioImages.hero} alt="Dream Decor studio architecture" />
        </div>
        <SiteNavigation variant="studio" />
        <div className="studio-hero-inner">
          <div className="studio-hero-copy">
            <p className="studio-label">The Studio</p>
            <h1>
              Spaces
              <br />
              Born from
              <br />a Deeper
              <br />
              Perspective
            </h1>
            <p className="studio-hero-desc">
              We are a multidisciplinary design studio creating meaningful
              spaces through architecture, interiors and the art of living.
            </p>
            <a className="studio-link" href="#philosophy">
              Our Story <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="studio-hero-vertical">
          People
          <br />
          Ideas
          <br />
          Materials
          <br />
          Spaces
          <br />A Better Tomorrow
          <div className="studio-hero-rule" />
        </div>
        <div className="studio-hero-count">01&nbsp;&nbsp;/&nbsp;&nbsp;04</div>
        <div className="studio-scroll">
          Scroll to Explore <span>↓</span>
        </div>
      </section>

      <section id="philosophy" className="studio-philosophy">
        <div className="studio-philo-copy">
          <p className="studio-label">Our Philosophy</p>
          <h2>
            Design
            <br />
            Beyond
            <br />
            Walls
          </h2>
          <p>
            We believe great design goes beyond buildings - it shapes the way
            people live, feel and connect. Our work is a blend of thoughtful
            architecture, refined interiors and a deep respect for nature, craft
            and context.
          </p>
          <a className="studio-link" href="#process">
            Our Philosophy <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="studio-philo-image">
          <img
            src={studioImages.philosophy}
            alt="Atmospheric architectural courtyard"
          />
          <span>
            More
            <br />
            Human
            <br />
            Spaces
          </span>
        </div>
        <div className="studio-stats-area">
          <div className="studio-stats">
            <p className="studio-label">
              Purpose Driven
              <br />
              Design
            </p>
            <p>
              We create spaces that inspire people, support communities and
              stand the test of time.
            </p>
            <div>
              <strong>50+</strong>
              <span>Projects Completed</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>Cities Across India</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>Years of Experience</span>
            </div>
          </div>
          <div className="studio-quote-box">
            <blockquote>
              “Architecture is a dialogue between people, place and
              possibility.”
            </blockquote>
            <small>Our Belief</small>
          </div>
        </div>
      </section>

      <section className="studio-people">
        <div className="studio-people-copy">
          <p className="studio-label">The People</p>
          <h2>
            A Collective
            <br />
            of Dreamers
            <br />
            and Doers
          </h2>
          <p>
            Our studio brings together architects, interior designers,
            visualizers and creative thinkers who share a common goal - to
            create exceptional spaces with purpose and precision.
          </p>
          <a className="studio-link" href="#contact">
            Meet The Team <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="studio-team-image">
          <img
            src={studioImages.team}
            alt="Architecture design team collaborating"
          />
        </div>
        <div className="studio-people-side">
          Good&nbsp;&nbsp; Design&nbsp;&nbsp; Better&nbsp;&nbsp; People
        </div>
      </section>

      <section id="process" className="studio-process">
        <div>
          <p className="studio-label studio-process-title">Our Process</p>
          <div className="studio-steps">
            {steps.map(([number, name, text]) => (
              <div className="studio-step" key={number}>
                <div>{number}</div>
                <strong>{name}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="studio-material-head">
            <p className="studio-label">Materials Matter</p>
            <a className="studio-link" href="#contact">
              Our Approach <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="studio-materials">
            {materials.map(([name, meaning, image]) => (
              <div key={name}>
                <div className="studio-material-img">
                  <img src={image} alt={`${name} material`} />
                </div>
                <strong>{name}</strong>
                <small>{meaning}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="studio-future">
        <div className="studio-future-bg">
          <img src={studioImages.future} alt="Future architectural space" />
        </div>
        <div className="studio-future-content">
          <p className="studio-label">A More Meaningful Tomorrow</p>
          <h2>
            A More
            <br />
            Meaningful
            <br />
            Tomorrow
          </h2>
          <p>We design for people, places and a more conscious future.</p>
          <a className="studio-link" href="/contact">
            Let&apos;s Build Together <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="studio-future-side">
          Spaces
          <br />
          That
          <br />
          Stay
          <br />
          With You
        </div>
        <div className="studio-future-brand">
          DREAM DECOR<small>INTERIOR &amp; EXTERIOR</small>
        </div>
      </section>
      <SiteFooter variant="studio" />
    </div>
  );
}
