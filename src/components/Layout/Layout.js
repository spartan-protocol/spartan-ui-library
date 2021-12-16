import React from "react";
import { useBreakpoint } from "../../providers/ViewPort";
import Header from "./Header";
import SidebarLg from "./SideBarLg";

const Layout = () => {
  return (
    <>
      <Header />
      {useBreakpoint().includes("lg") && <SidebarLg />}
    </>
  );
};

export default Layout;
