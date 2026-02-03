'use client';

import { Form as HeroForm, FormProps } from '@heroui/react';

export const Form = ({ children, ...props }: FormProps) => {
  return <HeroForm {...props}>{children}</HeroForm>;
};
