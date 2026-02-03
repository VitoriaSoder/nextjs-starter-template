'use client';

import { ButtonGroup as HeroButtonGroup, ButtonGroupProps } from '@heroui/react';

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <HeroButtonGroup {...props}>{children}</HeroButtonGroup>;
};
