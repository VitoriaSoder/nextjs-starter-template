'use client';

import { Dropdown as HeroDropdown, DropdownProps } from '@heroui/react';

export const Dropdown = ({ children, ...props }: DropdownProps) => {
  return <HeroDropdown {...props}>{children}</HeroDropdown>;
};
