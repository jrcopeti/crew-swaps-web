import { Outlet } from "react-router";

import SidebarApp from "./SidebarApp";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className=" min-h-screen transform transition-all ease-in-out overflow-hidden ">
      <Navbar type="app" />
      <SidebarApp>
        <Outlet />
      </SidebarApp>
    </div>
  );
}

export default AppLayout;
