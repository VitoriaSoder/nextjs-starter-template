'use client';

import { DateField as HeroDateField } from '@heroui/react';
import type { ComponentProps } from 'react';

export const DateField = ({ children, ...props }: ComponentProps<typeof HeroDateField>) => {
  return <HeroDateField {...props}>{children}</HeroDateField>;
};
