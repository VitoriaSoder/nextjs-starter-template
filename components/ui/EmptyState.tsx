'use client';

import { EmptyState as HeroEmptyState, EmptyStateProps } from '@heroui/react';

export const EmptyState = ({ children, ...props }: EmptyStateProps) => {
  return <HeroEmptyState {...props}>{children}</HeroEmptyState>;
};
