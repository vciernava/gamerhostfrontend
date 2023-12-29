import { ReactNode } from 'react';

const PrimaryButton = ({
  children,
  className,
  as = 'button',
  onClick,
}: {
  children: ReactNode;
  className?: string;
  as?: 'button' | 'link';
  onClick?: () => void;
}) => {
  if (as === 'button') {
    return (
      <button
        className={`bg-primary-700 text-white py-4 px-14 rounded-md hover:bg-primary-600 transition-all ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        className={`bg-primary-700 text-white py-4 px-14 rounded-md hover:bg-primary-600 transition-all ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};
export default PrimaryButton;
