'use client';

import { Header as HeroHeader, HeaderProps } from '@heroui/react';

export const Header = ({ children, ...props }: HeaderProps) => {
  return <HeroHeader {...props}>{children}</HeroHeader>;
};
