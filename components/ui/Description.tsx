'use client';

import { Description as HeroDescription, DescriptionProps } from '@heroui/react';

export const Description = ({ children, ...props }: DescriptionProps) => {
  return <HeroDescription {...props}>{children}</HeroDescription>;
};
