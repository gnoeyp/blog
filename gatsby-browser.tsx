import "./src/styles/global.css";
import "./src/styles/prism-vsc-dark-plus.css";
import "./src/styles/prism-solarizedlight.css";
import React from "react";
import Layout from "./src/components/Layout";
import type { GatsbyBrowser } from "gatsby";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
