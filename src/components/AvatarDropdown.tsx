import Avatar from "./Avatar";
import { LogOut, Settings } from "lucide-react";
import AvatarDropdownContent from "./AvatarDropdownContent";

const content = [
  {
    to: "/settings",
    icon: <Settings />,
    text: "Settings",
  },
  {
    to: "/",
    icon: <LogOut />,
    text: "Logout",
  },
];

function AvatarDropdown() {
  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <div tabIndex={0} role="button" className="m-1">
        <Avatar />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 shadow"
      >
        {content.map(({ to, icon, text }) => (
          <AvatarDropdownContent key={to} to={to} icon={icon} text={text} />
        ))}
      </ul>
    </div>
  );
}

export default AvatarDropdown;
