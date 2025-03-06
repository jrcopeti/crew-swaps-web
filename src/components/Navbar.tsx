import { Link } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Grip } from "lucide-react";
import AvatarDropdown from "./AvatarDropdown";

function Navbar({ type }: { type: "landing" | "app" }) {
  return (
    <div
      className={`navbar bg-base-100 p-3 ${type === "app" ? "lg:absolute" : ""} `}
    >
      <div className="navbar-start">
        <Link to={type === "landing" ? "/" : "/home"} className="flex">
          <Logo text />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      {type === "app" && (
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <span>
            <Grip size={28} />
          </span>
        </label>
      )}

      <div className="navbar-end items-center gap-4">
        <ThemeToggle />
        {type === "landing" && (
          <Link to="signin" className="btn btn-primary px-6 text-lg lg:text-xl">
            Sign in
          </Link>
        )}
        {type === "app" && <AvatarDropdown />}
      </div>
    </div>
  );
}

export default Navbar;
