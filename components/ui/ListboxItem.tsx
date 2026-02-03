'use client';

import { ListBoxItem as HeroListboxItem } from '@heroui/react';
import type { ComponentProps } from 'react';

export const ListboxItem = ({ children, ...props }: ComponentProps<typeof HeroListboxItem>) => {
  return <HeroListboxItem {...props}>{children}</HeroListboxItem>;
};
