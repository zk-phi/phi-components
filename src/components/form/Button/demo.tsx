import { useState, useCallback } from "preact/hooks";
import { define } from "preactement";
import Button from "./index";

const Demo = () => {
  const [count, setCount] = useState(0);
  const incCount = useCallback(() => setCount(count => count + 1), [setCount]);
  return <>
    <Button icon={ "🍺" } onClick={ incCount } danger={ count >= 10 }>
      Cheers!
    </Button>
    { !!count && <span> 🍻 x { count }</span> }
  </>;
};

define("phi-button-demo", () => Demo);
