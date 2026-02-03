'use client';

import { RadioGroup as HeroRadioGroup, RadioGroupProps } from '@heroui/react';

export const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  return <HeroRadioGroup {...props}>{children}</HeroRadioGroup>;
};
