'use client';

import { Card as HeroCard, CardProps } from '@heroui/react';

export const Card = ({ children, ...props }: CardProps) => {
  return <HeroCard {...props}>{children}</HeroCard>;
};
