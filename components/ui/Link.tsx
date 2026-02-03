'use client';

import { Link as HeroLink, LinkProps } from '@heroui/react';

export const Link = ({ children, ...props }: LinkProps) => {
  return <HeroLink {...props}>{children}</HeroLink>;
};
