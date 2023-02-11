import "./src/styles/global.css";
import "./src/styles/prism-vsc-dark-plus.css";
import "./src/styles/prism-solarizedlight.css";
import React from "react";
import Layout from "./src/components/Layout";
import type { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
