'use client';

import { Separator as HeroSeparator } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Separator = (props: ComponentProps<typeof HeroSeparator>) => {
  return <HeroSeparator {...props} />;
};
