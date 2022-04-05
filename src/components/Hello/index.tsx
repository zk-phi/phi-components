import register from "preact-custom-element";
import { css } from "goober";

const className = css({
  color: "#ea0",
});

const Hello = () => (
  <h1 class={ className }>Hello, World!!</h1>
);

Hello.register = () => {
  register(Hello, "phi-hello");
};

export default Hello;
