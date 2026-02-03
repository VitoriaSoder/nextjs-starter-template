'use client';

import { InputGroup as HeroInputGroup, InputGroupProps } from '@heroui/react';

export const InputGroup = ({ children, ...props }: InputGroupProps) => {
  return <HeroInputGroup {...props}>{children}</HeroInputGroup>;
};
