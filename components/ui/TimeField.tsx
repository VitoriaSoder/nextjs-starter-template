'use client';

import { TimeField as HeroTimeField } from '@heroui/react';
import type { ComponentProps } from 'react';

export const TimeField = ({ children, ...props }: ComponentProps<typeof HeroTimeField>) => {
  return <HeroTimeField {...props}>{children}</HeroTimeField>;
};
