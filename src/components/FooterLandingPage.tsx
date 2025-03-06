import { Link } from "react-router";
import { Github, Instagram, Linkedin } from "lucide-react";

const routes = [
  {
    to: "how-to-use",
    label: "How to use",
  },
  {
    to: "about",
    label: "About us",
  },
  {
    to: "contact",
    label: "Contact",
  },
];

function FooterLandingPage() {
  return (
    <footer className="footer footer-center bg-base-300 h-[14rem] p-10 text-lg text-base-content rounded-t-3xl">
      <nav className="grid grid-flow-col gap-4">
        {routes.map((route) => (
          <Link key={route.to} to={`/${route.to}`} className="link-hover link lg:text-2xl">
            {route.label}
          </Link>
        ))}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-base">
          <Link to="/">
            <Instagram />
          </Link>
          <Link to="/">
            <Github />
          </Link>
          <Link to="/">
            <Linkedin />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-neutral">
          Copyright © {new Date().getFullYear()} - Crew Swap
        </p>
      </aside>
    </footer>
  );
}

export default FooterLandingPage;
