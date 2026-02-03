'use client';

import { MenuSection as HeroMenuSection, MenuSectionProps } from '@heroui/react';

export const MenuSection = ({ children, ...props }: MenuSectionProps) => {
  return <HeroMenuSection {...props}>{children}</HeroMenuSection>;
};
