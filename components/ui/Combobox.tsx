'use client';

import { ComboBox as HeroCombobox } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Combobox = ({ children, ...props }: ComponentProps<typeof HeroCombobox>) => {
  return <HeroCombobox {...props}>{children}</HeroCombobox>;
};
