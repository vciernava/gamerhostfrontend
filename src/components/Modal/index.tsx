"use client";
import React, {
  ComponentType,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import PrimaryButton from "../PrimaryButton";
import { IconAlertHexagon, TablerIconsProps } from "@tabler/icons-react";

const ModalContainer = ({
  autoOpen = false,
  displayButton = true,
  buttonText = "Zobrazit modal",
  modalColor = "#F43F5E",
  modalIcon: ModalIcon = IconAlertHexagon,
  children,
}: {
  autoOpen?: boolean;
  displayButton?: boolean;
  buttonText?: string;
  modalColor?: string;
  modalIcon?: ComponentType<TablerIconsProps>;
  children: ReactNode;
}) => {
  const [modalOpen, setModalOpen] = useState(autoOpen);
  const [bodyOverflow, setBodyOverflow] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setModalOpen(true);
    setBodyOverflow("hidden");
  };

  const closeModal = () => {
    const modal = modalRef.current;
    modal?.classList.add("animate-fadeOut");
    setTimeout(() => {
      setModalOpen(false);
      setBodyOverflow("");
    }, 250);
  };

  const handleModalClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      document.addEventListener("keydown", handleEscape);

      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <div>
      {displayButton && (
        <PrimaryButton onClick={openModal}>{buttonText}</PrimaryButton>
      )}

      {modalOpen && (
        <div
          className="modal-container fixed left-0 top-0 z-50 h-screen w-full overflow-hidden bg-black/80"
          ref={modalRef}
          onClick={handleModalClick}
        >
          <div className="modal-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-12 py-8">
            <div className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-4">
              <ModalIcon color={modalColor} />
            </div>
            <button className="absolute right-0 top-0 m-4" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export const ModalHeader = ({ children }: { children: ReactNode }) => {
  return <div className="mb-2 text-xl font-bold text-black">{children}</div>;
};

export const ModalContent = ({ children }: { children: ReactNode }) => {
  return <div className="text-base text-secondary-600">{children}</div>;
};

export default ModalContainer;
