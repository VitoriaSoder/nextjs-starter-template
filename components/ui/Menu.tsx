'use client';

import { Menu as HeroMenu } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Menu = ({ children, ...props }: ComponentProps<typeof HeroMenu>) => {
  return <HeroMenu {...props}>{children}</HeroMenu>;
};
