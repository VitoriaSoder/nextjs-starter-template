'use client';

import { Checkbox as HeroCheckbox, CheckboxProps } from '@heroui/react';

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return <HeroCheckbox {...props}>{children}</HeroCheckbox>;
};
