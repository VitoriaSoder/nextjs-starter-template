'use client';

import { CheckboxGroup as HeroCheckboxGroup, CheckboxGroupProps } from '@heroui/react';

export const CheckboxGroup = ({ children, ...props }: CheckboxGroupProps) => {
  return <HeroCheckboxGroup {...props}>{children}</HeroCheckboxGroup>;
};
