'use client';

import { Skeleton as HeroSkeleton } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Skeleton = (props: ComponentProps<typeof HeroSkeleton>) => {
  return <HeroSkeleton {...props} />;
};
