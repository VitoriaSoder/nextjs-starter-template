'use client';

import { Text as HeroText, TextProps } from '@heroui/react';

export const Text = ({ children, ...props }: TextProps) => {
  return <HeroText {...props}>{children}</HeroText>;
};
