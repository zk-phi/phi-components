export const elementIsContained = (
  element: HTMLElement | null,
  parent: HTMLElement,
): boolean => {
  if (!element) {
    return false;
  } else if (element === parent) {
    return true;
  } else {
    return elementIsContained(element.parentElement, parent);
  }
};
