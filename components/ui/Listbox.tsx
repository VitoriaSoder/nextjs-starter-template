'use client';

import { ListBox as HeroListbox } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Listbox = ({ children, ...props }: ComponentProps<typeof HeroListbox>) => {
  return <HeroListbox {...props}>{children}</HeroListbox>;
};
