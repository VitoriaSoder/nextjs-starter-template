'use client';

import { Input as HeroInput, InputProps } from '@heroui/react';

export const Input = ({ children, ...props }: InputProps) => {
  return <HeroInput {...props}>{children}</HeroInput>;
};
