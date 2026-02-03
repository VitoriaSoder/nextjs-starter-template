'use client';

import { CloseButton as HeroCloseButton, CloseButtonProps } from '@heroui/react';

export const CloseButton = ({ children, ...props }: CloseButtonProps) => {
  return <HeroCloseButton {...props}>{children}</HeroCloseButton>;
};
