'use client';

import { FieldError as HeroFieldError, FieldErrorProps } from '@heroui/react';

export const FieldError = ({ children, ...props }: FieldErrorProps) => {
  return <HeroFieldError {...props}>{children}</HeroFieldError>;
};
