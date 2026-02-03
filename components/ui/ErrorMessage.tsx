'use client';

import { ErrorMessage as HeroErrorMessage, ErrorMessageProps } from '@heroui/react';

export const ErrorMessage = ({ children, ...props }: ErrorMessageProps) => {
  return <HeroErrorMessage {...props}>{children}</HeroErrorMessage>;
};
