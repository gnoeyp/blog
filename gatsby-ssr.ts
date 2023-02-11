import { createElement } from "react";
import type { GatsbySSR } from "gatsby";

const applyDarkModeClass = `
  try {
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
