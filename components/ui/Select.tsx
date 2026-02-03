'use client';

import { Select as HeroSelect } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Select = ({ children, ...props }: ComponentProps<typeof HeroSelect>) => {
  return <HeroSelect {...props}>{children}</HeroSelect>;
};
