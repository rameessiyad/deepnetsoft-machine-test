import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto py-10 px-5">{children}</div>
    </div>
  );
};

export default Layout;
