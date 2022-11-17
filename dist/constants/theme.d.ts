export declare const font = "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif";
export declare const color: {
    fg: string;
    distantFg: string;
    bg: string;
    border: string;
    primaryActive: string;
    primary: string;
    primaryHover: string;
    dangerActive: string;
    danger: string;
    dangerHover: string;
};
export declare const boxShadow: {
    primary: string;
    danger: string;
};
export declare const borderRadius: {
    md: string;
};
export declare const padding: {
    minimal: string;
    sm: string;
    md: string;
};
export declare const spacing: {
    minimal: string;
    inline: string;
};
export declare const fontSize: {
    smallIcon: string;
    md: string;
    icon: string;
};
export declare const pressable: {
    boxShadow: string;
    "&:active": {
        boxShadow: string;
        transform: string;
    };
};
export declare const clickable: (color: string) => {
    "&:active": {
        color: string;
        backgroundColor: string;
    };
};
