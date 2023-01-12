import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  location: "til" | "blog";
}

const Layout = ({ children, location }: LayoutProps) => {
  return (
    <div>
      <Navigation location={location} />
      {children}
    </div>
  );
};

export default Layout;
