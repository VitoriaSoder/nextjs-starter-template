'use client';

import { DateInputGroup as HeroDateInputGroup, DateInputGroupProps } from '@heroui/react';

export const DateInputGroup = ({ children, ...props }: DateInputGroupProps) => {
  return <HeroDateInputGroup {...props}>{children}</HeroDateInputGroup>;
};
