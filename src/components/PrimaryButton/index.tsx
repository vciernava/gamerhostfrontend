import { ReactNode } from 'react';

const PrimaryButton = ({
  children,
  className,
  as = 'button',
  color = 'bg-primary-700',
  hoverColor = 'bg-primary-600',
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  as?: 'button' | 'link';
  color?: string;
  hoverColor?: string;
  href?: string;
  onClick?: () => void;
}) => {
  if (as === 'button') {
    return (
      <button
        className={`${color} text-white py-4 px-14 rounded-md hover:${hoverColor} transition-all ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        className={`${color} text-white py-4 px-14 rounded-md hover:${hoverColor} transition-all ${className}`}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};
export default PrimaryButton;
