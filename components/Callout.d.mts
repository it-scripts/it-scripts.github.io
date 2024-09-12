import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactElement, ReactNode } from 'react';

declare const TypeToEmoji: {
    default: string;
    error: react_jsx_runtime.JSX.Element;
    info: react_jsx_runtime.JSX.Element;
    warning: react_jsx_runtime.JSX.Element;
    success: react_jsx_runtime.JSX.Element;
};
type CalloutType = keyof typeof TypeToEmoji;
type CalloutProps = {
    type?: CalloutType;
    emoji?: string | ReactNode;
    children: ReactNode;
};
declare function Callout({ children, type, emoji }: CalloutProps): ReactElement;

export { Callout };
