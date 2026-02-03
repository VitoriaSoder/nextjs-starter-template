'use client';

import { NumberField as HeroNumberField } from '@heroui/react';
import type { ComponentProps } from 'react';

export const NumberField = ({ children, ...props }: ComponentProps<typeof HeroNumberField>) => {
  return <HeroNumberField {...props}>{children}</HeroNumberField>;
};
