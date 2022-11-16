import { css } from "goober";

const iconStyle = css({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor",
});

const AlignJustify = () => (
  <svg class={ iconStyle } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
  </svg>
);

export default AlignJustify;
