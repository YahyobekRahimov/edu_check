import { CSSProperties, ReactNode } from "react";

export default function Container({
  children,
  className,
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style ?? {}}
      className={`container mx-auto w-full px-6 md:px-10 xl:px-40 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
