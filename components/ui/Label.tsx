'use client';

import { Label as HeroLabel, LabelProps } from '@heroui/react';

export const Label = ({ children, ...props }: LabelProps) => {
  return <HeroLabel {...props}>{children}</HeroLabel>;
};
