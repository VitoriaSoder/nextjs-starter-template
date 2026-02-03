'use client';

import { Switch as HeroSwitch, SwitchProps } from '@heroui/react';

export const Switch = ({ children, ...props }: SwitchProps) => {
  return <HeroSwitch {...props}>{children}</HeroSwitch>;
};
