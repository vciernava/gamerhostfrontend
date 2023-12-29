'use client';
import React, { ComponentType, ReactNode, useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import { IconAlertHexagon, TablerIconsProps } from '@tabler/icons-react';

const ModalContainer = ({
  autoOpen = false,
  displayButton = true,
  buttonText = 'Zobrazit modal',
  modalColor = '#F43F5E',
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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    const modal = document.querySelector('.modal-content');
    modal?.classList.add('animate-fadeOut');
    setTimeout(() => {
      setModalOpen(false);
    }, 250);
  };

  return (
    <div>
      {displayButton && (
        <PrimaryButton onClick={openModal}>{buttonText}</PrimaryButton>
      )}

      {modalOpen && (
        <>
          <div className='modal-container absolute top-0 left-0 w-screen h-screen overflow-hidden bg-black/80'>
            <div className='modal-content absolute px-12 py-8 rounded-md bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <div className='absolute z-10 bg-white p-4 rounded-full -left-6 top-1/2 -translate-y-1/2'>
                <ModalIcon color={modalColor} />
              </div>
              <button
                className='absolute top-0 right-0 m-4'
                onClick={closeModal}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-rose-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const ModalHeader = ({ children }: { children: ReactNode }) => {
  return <div className='text-xl font-bold text-black mb-2'>{children}</div>;
};

export const ModalContent = ({ children }: { children: ReactNode }) => {
  return <div className='text-base text-secondary-600'>{children}</div>;
};

export default ModalContainer;
