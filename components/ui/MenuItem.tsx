'use client';

import { MenuItem as HeroMenuItem, MenuItemProps } from '@heroui/react';

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <HeroMenuItem {...props}>{children}</HeroMenuItem>;
};
