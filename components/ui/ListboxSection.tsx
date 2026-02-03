'use client';

import { ListBoxSection as HeroListboxSection } from '@heroui/react';
import type { ComponentProps } from 'react';

export const ListboxSection = ({ children, ...props }: ComponentProps<typeof HeroListboxSection>) => {
  return <HeroListboxSection {...props}>{children}</HeroListboxSection>;
};
