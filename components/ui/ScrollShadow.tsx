'use client';

import { ScrollShadow as HeroScrollShadow, ScrollShadowProps } from '@heroui/react';

export const ScrollShadow = ({ children, ...props }: ScrollShadowProps) => {
  return <HeroScrollShadow {...props}>{children}</HeroScrollShadow>;
};
