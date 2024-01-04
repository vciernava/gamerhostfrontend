import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, {
  ReactNode,
  useState,
  ReactElement,
  isValidElement,
  cloneElement,
} from "react";

interface FaqWrapperProps {
  children: ReactNode;
}

interface FaqItemProps {
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface FaqTriggerProps {
  children: ReactNode;
  onToggle?: () => void;
  isOpen?: boolean;
}

interface FaqContentProps {
  children: ReactNode;
  isOpen?: boolean;
}

const FaqWrapper: React.FC<FaqWrapperProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-wrapper">
      {React.Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<FaqItemProps>, {
            key: index,
            isOpen: index === openIndex,
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

const FaqItem: React.FC<FaqItemProps> = ({ children, isOpen, onToggle }) => {
  return React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(
        child as ReactElement<FaqTriggerProps | FaqContentProps>,
        {
          isOpen,
          onToggle,
        },
      );
    }
    return child;
  });
};

const FaqTrigger: React.FC<FaqTriggerProps> = ({
  children,
  onToggle,
  isOpen,
}) => (
  <div onClick={onToggle} className={`faq-trigger ${isOpen ? "active" : ""}`}>
    {children}{" "}
    {isOpen ? (
      <IconChevronDown className="faq-icon" />
    ) : (
      <IconChevronUp className="faq-icon" />
    )}
  </div>
);

const FaqContent: React.FC<FaqContentProps> = ({ children, isOpen }) => (
  <div className={`faq-content ${isOpen ? "max-h-[600px]" : "max-h-0"}`}>
    {children}
  </div>
);

export { FaqWrapper, FaqItem, FaqTrigger, FaqContent };
