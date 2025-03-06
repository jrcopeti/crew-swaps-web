import {
  CalendarArrowUp,
  RefreshCcw,
  Signpost,
  SquareMenu,
} from "lucide-react";
import { ReactNode } from "react";
import Logo from "./Logo";
import SidebarContentGroup from "./SidebarContentGroup";

const roasterLinks = [
  {
    to: "/upload-roaster",
    icon: <CalendarArrowUp />,
    text: "Upload Roaster",
  },
];

const requestLinks = [
  {
    to: "/available-swaps",
    icon: <RefreshCcw />,
    text: "Available Swaps",
  },
  {
    to: "/my-swaps",
    icon: <SquareMenu />,
    text: "My Swaps",
  },
];

const postLinks = [
  {
    to: "/post-swap",
    icon: <Signpost />,
    text: "Post a swap",
  },
];

function SidebarApp({ children }: { children: ReactNode }) {
  return (
    <div className="drawer lg:drawer-open bottom-0 top-0 lg:translate-y-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <main className="drawer-content mx-auto flex max-w-screen-xl flex-col items-center">
        {/* Main content here */}
        {children}
      </main>
      <div className="drawer-side">
        {/* Overlay */}
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu min-h-full w-[14rem] gap-4 rounded-br-lg rounded-tr-lg bg-base-200 p-4 text-base-content xl:w-[16.5rem]">
          {/* Sidebar content here */}
          <div className="mb-2 flex items-center justify-center lg:hidden">
            <Logo />
          </div>

          <SidebarContentGroup links={roasterLinks} label="Roaster" />

          <SidebarContentGroup links={requestLinks} label="Request" />
          <SidebarContentGroup links={postLinks} label="Post" />
        </ul>
      </div>
    </div>
  );
}

export default SidebarApp;
