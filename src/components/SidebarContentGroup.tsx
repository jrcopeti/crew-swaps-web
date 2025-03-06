import { Link } from "react-router";

type SidebarLink = {
  to: string;
  icon: JSX.Element;
  text: string;
};

type SidebarContentGroupProps = {
  links: SidebarLink[];
  label: string;
};

function SidebarContentGroup({ links, label }: SidebarContentGroupProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-lg font-bold text-neutral">{label}</label>
      {links.map(({ to, icon, text }) => (
        <li key={to} className="mb-2 text-base font-semibold">
          <Link to={to}>
            <span className="text-accent">{icon}</span>
            {text}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default SidebarContentGroup;
