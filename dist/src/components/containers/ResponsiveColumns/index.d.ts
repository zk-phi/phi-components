import { ComponentChildren, JSX } from 'preact';
export type Gap = "sm" | "md";
export type ConfigurationEntry = {
    readonly width: number;
    readonly columns: readonly number[];
};
declare const Component: ({ gap, configuration, style, children, }: {
    gap: Gap;
    configuration: Readonly<ConfigurationEntry[]>;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
