'use client';

import { TextField as HeroTextField } from '@heroui/react';
import type { ComponentProps } from 'react';

export const TextField = ({ children, ...props }: ComponentProps<typeof HeroTextField>) => {
  return <HeroTextField {...props}>{children}</HeroTextField>;
};
