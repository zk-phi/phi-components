import { example } from "./index.module.css"

const Example = ({ children }) => (
  <div className={example}>
    {children}
  </div>
);

export default Example;
