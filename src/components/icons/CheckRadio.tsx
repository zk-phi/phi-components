import { css } from "goober";

const iconStyle = css({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor",
});

const CheckRadio = () => (
  <svg class={ iconStyle } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <circle cx="12" cy="12" r="7"/>
  </svg>
);

export default CheckRadio;
