'use client';

import { Alert as HeroAlert, AlertProps } from '@heroui/react';

export const Alert = ({ children, ...props }: AlertProps) => {
  return <HeroAlert {...props}>{children}</HeroAlert>;
};
