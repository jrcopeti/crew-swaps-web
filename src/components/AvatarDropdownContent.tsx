import { Link } from "react-router";

type AvatarDropdownContentProps = {
  to: string;
  icon: JSX.Element;
  text: string;
};

function AvatarDropdownContent({ to, icon, text }: AvatarDropdownContentProps) {
  return (
    <li className="mb-2 text-base font-semibold">
      <Link to={to}>
        <span className="text-accent">{icon}</span>
        {text}
      </Link>
    </li>
  );
}

export default AvatarDropdownContent;
