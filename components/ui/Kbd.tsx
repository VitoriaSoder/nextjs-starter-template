'use client';

import { Kbd as HeroKbd, KbdProps } from '@heroui/react';

export const Kbd = ({ children, ...props }: KbdProps) => {
  return <HeroKbd {...props}>{children}</HeroKbd>;
};
