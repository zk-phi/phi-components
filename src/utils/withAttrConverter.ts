import { FunctionComponent } from "preact";

export const withAttrConverter = <S,T>(
  component: FunctionComponent<T>,
  converter: (attrs: S) => T,
) => (
  (attrs: S) => component(converter(attrs))
);
