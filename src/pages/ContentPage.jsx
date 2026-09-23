import SiteFooter from "../components/SiteFooter";
import SiteNavigation from "../components/SiteNavigation";
import { pageContent } from "./pageContent";

export default function ContentPage({ type }) {
  const page = pageContent[type];

  return (
    <div className={`content-page page-${type}`}>
      <SiteNavigation variant="content" />
      <header className="page-header">
        <div className="page-header-side">
          <p className="eyebrow">{page.eyebrow}</p>
          <span className="page-header-line" aria-hidden="true" />
          <span className="page-header-number">04</span>
        </div>
        <div className="page-header-title">
          <h1>{page.title}</h1>
        </div>
        <p className="page-intro">{page.intro}</p>
      </header>
      <section className="page-grid" aria-label={`${type} details`}>
        {page.items.map((item) => (
          <article className="page-item" key={item[0]}>
            <p className="item-index">{item[0]}</p>
            <div>
              <h2>{item[1] || item[0]}</h2>
              <p>{item[2] || item[1]}</p>
            </div>
            <span className="item-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </section>
      <SiteFooter variant="content" />
    </div>
  );
}
