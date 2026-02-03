'use client';

import { Tabs as HeroTabs } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Tabs = ({ children, ...props }: ComponentProps<typeof HeroTabs>) => {
  return <HeroTabs {...props}>{children}</HeroTabs>;
};
