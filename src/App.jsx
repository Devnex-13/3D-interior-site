import { useEffect, useState } from "react";
import FrameSequence from "./components/FrameSequence";
import ContentPage from "./pages/ContentPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import StudioPage from "./pages/StudioPage";
import { pageContent } from "./pages/pageContent";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    const handleClick = (event) => {
      const link = event.target.closest("a");
      if (
        !link ||
        link.origin !== window.location.origin ||
        link.target === "_blank"
      )
        return;
      event.preventDefault();
      window.history.pushState({}, "", link.pathname);
      setPath(link.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("popstate", handleNavigation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const page = path.replace(/^\//, "");
  if (page === "projects") return <ProjectsPage />;
  if (page === "services") return <ServicesPage />;
  if (page === "studio") return <StudioPage />;
  if (page === "contact") return <ContactPage />;
  return pageContent[page] ? <ContentPage type={page} /> : <FrameSequence />;
}
