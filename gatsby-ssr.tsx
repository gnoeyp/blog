import React from "react";
import Layout from "./src/components/Layout";
import { createElement } from "react";
import type { GatsbySSR } from "gatsby";

const applyDarkModeClass = `
if (typeof window !== 'undefined') {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add('dark')
  }
}
`;

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setHeadComponents([script]);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
