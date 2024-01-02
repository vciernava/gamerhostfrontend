import { ReactNode } from "react";

const PrimaryButton = ({
  children,
  className,
  as = "button",
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  as?: "button" | "link";
  href?: string;
  onClick?: () => void;
}) => {
  if (as === "button") {
    return (
      <button
        className={`rounded-md bg-primary-700 px-14 py-4 text-white transition-all hover:bg-primary-600 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        className={`rounded-md bg-primary-700 px-14 py-4 text-white transition-all hover:bg-primary-600 ${className} after:hidden`}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};
export default PrimaryButton;
