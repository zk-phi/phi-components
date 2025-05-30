export const instantiateStyleSheet = (...styles: string[]) => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles.join(""));
  return sheet;
}
