import { css } from "goober";

const iconStyle = css({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor",
});

const Check = () => (
  <svg class={ iconStyle } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
  </svg>
);

export default Check;
