import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-white">
      <Navbar />
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
};
export default Layout;
