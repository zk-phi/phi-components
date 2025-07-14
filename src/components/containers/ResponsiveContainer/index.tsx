import type { ComponentChildren, JSX } from "preact";

export type Padding = "sm" | "md";

/* 本番でリロードすると壊れるの何。ローカルでも build & preview すると発生する。
 * flex や grid は問題ないように見える。 Responsive 系で発生する
 *
 * Vue で prop セットしてる場合特有で発生するっぽい
 * attr からセットしてる場合は発生しない
 *
 * Vitepress 特有の問題な可能性が出てきた。SSR 絡みかも */

const Component = ({
  padding,
  maxWidth = "100%",
  style,
  children,
}: {
  padding: Padding,
  maxWidth?: number | "100%",
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => (
  <div
      class={`phi-responsive-container ${padding}`}
      style={{ maxWidth: maxWidth, ...style }}>
    {children}
  </div>
);

export default Component;
