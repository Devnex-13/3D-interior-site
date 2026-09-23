export default function SiteFooter({ variant = "dark" }) {
  return (
    <footer className={`site-footer site-footer--${variant}`}>
      <div className="site-footer-main">
        <div className="site-footer-brand-block">
          <a className="site-footer-brand" href="/">
            DREAM DECOR
          </a>
          <p>
            Interior, exterior
            <br />
            and the art of living.
          </p>
        </div>
        <div className="site-footer-column">
          <p className="site-footer-label">Explore</p>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/studio">Studio</a>
        </div>
        <div className="site-footer-column">
          <p className="site-footer-label">Connect</p>
          <a href="/contact">Start a project</a>
          <a href="mailto:studio@atelier09.com">studio@atelier09.com</a>
          <a href="tel:+912046000909">+91 20 4600 0909</a>
          <span>Pune / Lisbon</span>
        </div>
        <div className="site-footer-column site-footer-socials">
          <p className="site-footer-label">Follow the work</p>
          <a href="#instagram">
            Instagram <span aria-hidden="true">↗</span>
          </a>
          <a href="#linkedin">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href="#behance">
            Behance <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© 2026 Dream Decor Interior and Exterior</span>
        <span>Interior · Exterior · Experiences</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
