import { createElement } from "react";
import Layout from "./src/components/Layout";

const applyDarkModeClass = `
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add('dark')
    }
  }
`;

export const onRenderBody = ({ setHeadComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setHeadComponents([script]);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
