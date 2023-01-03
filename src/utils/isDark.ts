import { signal, computed } from "@preact/signals";

const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const isDarkMode = signal(matchDarkMode.matches);
matchDarkMode.addEventListener("change", (e) => isDarkMode.value = e.matches);

const rootElement = document.documentElement;
const hasDarkClass = signal(rootElement.classList.contains("dark"));
const hasNodarkClass = signal(rootElement.classList.contains("nodark"));
const bodyObserver = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      hasDarkClass.value = rootElement.classList.contains("dark");
      hasNodarkClass.value = rootElement.classList.contains("nodark");
    }
  });
});
bodyObserver.observe(rootElement, { attributes: true });

export const isDark = computed(() =>
  (isDarkMode.value && !hasNodarkClass.value) || hasDarkClass.value
);
