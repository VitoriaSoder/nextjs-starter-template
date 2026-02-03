'use client';

import { Surface as HeroSurface, SurfaceProps } from '@heroui/react';

export const Surface = ({ children, ...props }: SurfaceProps) => {
  return <HeroSurface {...props}>{children}</HeroSurface>;
};
