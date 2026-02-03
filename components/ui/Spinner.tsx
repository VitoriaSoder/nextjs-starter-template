'use client';

import { Spinner as HeroSpinner } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Spinner = (props: ComponentProps<typeof HeroSpinner>) => {
  return <HeroSpinner {...props} />;
};
