import React from "react";
import { Location } from "../types";
import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
  location: Location;
};

const Layout = ({ children, location }: LayoutProps) => {
  return (
    <div>
      <Navigation location={location} />
      {children}
    </div>
  );
};

export default Layout;
