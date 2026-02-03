'use client';

import { Chip as HeroChip, ChipProps } from '@heroui/react';

export const Chip = ({ children, ...props }: ChipProps) => {
  return <HeroChip {...props}>{children}</HeroChip>;
};
