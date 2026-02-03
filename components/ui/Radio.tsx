'use client';

import { Radio as HeroRadio, RadioProps } from '@heroui/react';

export const Radio = ({ children, ...props }: RadioProps) => {
  return <HeroRadio {...props}>{children}</HeroRadio>;
};
