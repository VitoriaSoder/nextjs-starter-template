'use client';

import { Fieldset as HeroFieldset, FieldsetProps } from '@heroui/react';

export const Fieldset = ({ children, ...props }: FieldsetProps) => {
  return <HeroFieldset {...props}>{children}</HeroFieldset>;
};
