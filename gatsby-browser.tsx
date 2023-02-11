import "./src/styles/global.css";
import "./src/styles/prism-solarizedlight.css";
import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
