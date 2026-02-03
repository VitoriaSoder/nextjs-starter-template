'use client';

import { Toast as HeroToast, ToastProps } from '@heroui/react';

export const Toast = ({ children, ...props }: ToastProps) => {
  return <HeroToast {...props}>{children}</HeroToast>;
};
