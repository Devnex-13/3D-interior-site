import { useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteNavigation from "../components/SiteNavigation";

const filters = [
  "all",
  "residential",
  "interior",
  "exterior",
  "commercial",
  "landscape",
  "renovation",
];

const projects = [
  {
    type: "residential",
    title: "Horizon Residence",
    meta: "Residential | California, USA",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88",
    alt: "Modern residential architecture",
  },
  {
    type: "interior",
    title: "The Oaks Villa",
    meta: "Interior | Beverly Hills, USA",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
    alt: "Warm luxury interior",
  },
  {
    type: "residential",
    title: "Riverstone House",
    meta: "Residential | Austin, USA",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88",
    alt: "Contemporary house exterior",
  },
  {
    type: "interior",
    title: "The Valley Estate",
    meta: "Interior | Napa, USA",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88",
    alt: "Modern dining interior",
  },
  {
    type: "exterior",
    title: "Coastline Retreat",
    meta: "Exterior | Malibu, USA",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
    alt: "Luxury pool exterior",
  },
  {
    type: "interior",
    title: "The Summit Home",
    meta: "Interior | Aspen, USA",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88",
    alt: "Luxury bedroom interior",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter,
  );

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <SiteNavigation variant="projects" />
        <img
          className="projects-hero-image"
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
          alt="Contemporary luxury residence"
        />
        <div className="projects-hero-copy">
          <p className="projects-eyebrow">Our work</p>
          <h1>
            Spaces
            <br />
            That Inspire
          </h1>
          <p className="projects-hero-desc">
            A curated collection of architectural and interior design projects
            that reflect our passion for exceptional living.
          </p>
          <a className="explore-link" href="#project-grid">
            Explore projects <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="hero-side-label">
          Architecture
          <br />
          Interiors
          <br />
          Landscapes
        </p>
        <div className="hero-counter">
          <span>01</span>
          <span className="counter-line" />
          <span>08</span>
          <span className="counter-arrows" aria-hidden="true">
            ‹ &nbsp;›
          </span>
        </div>
      </section>

      <div className="projects-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              className={`project-filter ${activeFilter === filter ? "active" : ""}`}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="projects-sort">
          Sort by <strong>Latest</strong> <span aria-hidden="true">⌄</span>
        </span>
      </div>

      <main className="project-gallery" id="project-grid">
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="project-meta">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.meta}</p>
                </div>
                <span>
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <p className="empty-projects">No projects in this collection yet.</p>
        )}
        <div className="projects-cta">
          <p>
            Let&apos;s build
            <br />
            something timeless.
          </p>
          <span className="cta-rule" />
          <a href="/contact">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>
      <SiteFooter variant="projects" />
    </div>
  );
}
