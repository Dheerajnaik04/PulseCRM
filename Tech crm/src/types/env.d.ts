/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />
/// <reference types="framer-motion" />
/// <reference types="react-intersection-observer" />
/// <reference types="@heroicons/react" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare namespace React {
  interface SVGProps<T> extends SVGAttributes<T> {
    width?: number | string;
    height?: number | string;
  }

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: string;
  }
} 