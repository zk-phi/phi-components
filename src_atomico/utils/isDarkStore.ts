import { createStore } from "@atomico/store";
import { isSSR } from "./isSSR";

const computeIsDark = () => {
  if (isSSR) {
    return false;
  } else {
    const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hasDarkClass = document.documentElement.classList.contains("dark");
    const hasNodarkClass = document.documentElement.classList.contains("nodark");
    return (preferDarkScheme && !hasNodarkClass) || hasDarkClass;
  }
};

export const isDarkStore = createStore(computeIsDark, {
  update: () => computeIsDark,
});

// subscribe changes
if (!isSSR) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
    "change",
    isDarkStore.actions.update,
  );
  new MutationObserver((mutationList, observer) => {
    mutationList.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        isDarkStore.actions.update();
      }
    });
  }).observe(document.documentElement, { attributes: true });
}
