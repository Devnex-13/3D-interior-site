export default function SiteNavigation({ variant = "light", activePath }) {
  const currentPath = activePath || window.location.pathname;

  return (
    <header className={`site-nav site-nav--${variant}`}>
      <a className="site-brand" href="/" aria-label="Dream Decor home">
        <span className="site-brand-name">DREAM DECOR</span>
        <span className="site-brand-sub">Interior &amp; Exterior</span>
      </a>
      <nav className="site-nav-links" aria-label="Main navigation">
        <a className={currentPath === "/" ? "active" : ""} href="/">
          Home
        </a>
        <a
          className={currentPath === "/projects" ? "active" : ""}
          href="/projects"
        >
          Projects
        </a>
        <a
          className={currentPath === "/services" ? "active" : ""}
          href="/services"
        >
          Services
        </a>
        <a className={currentPath === "/studio" ? "active" : ""} href="/studio">
          Studio
        </a>
        <a
          className={currentPath === "/contact" ? "active" : ""}
          href="/contact"
        >
          Contact
        </a>
      </nav>
      <div className="site-nav-actions">
        <span className="site-search" aria-hidden="true">
          ⌕
        </span>
        <a className="site-talk" href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
