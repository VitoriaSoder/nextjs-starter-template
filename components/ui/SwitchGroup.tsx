'use client';

import { SwitchGroup as HeroSwitchGroup, SwitchGroupProps } from '@heroui/react';

export const SwitchGroup = ({ children, ...props }: SwitchGroupProps) => {
  return <HeroSwitchGroup {...props}>{children}</HeroSwitchGroup>;
};
