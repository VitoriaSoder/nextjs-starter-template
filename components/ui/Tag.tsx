'use client';

import { Tag as HeroTag } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Tag = ({ children, ...props }: ComponentProps<typeof HeroTag>) => {
  return <HeroTag {...props}>{children}</HeroTag>;
};
