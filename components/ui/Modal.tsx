'use client';

import { Modal as HeroModal, ModalProps } from '@heroui/react';

export const Modal = ({ children, ...props }: ModalProps) => {
  return <HeroModal {...props}>{children}</HeroModal>;
};
