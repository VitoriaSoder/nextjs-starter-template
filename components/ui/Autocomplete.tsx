'use client';

import { Autocomplete as HeroAutocomplete } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Autocomplete = ({ children, ...props }: ComponentProps<typeof HeroAutocomplete>) => {
  return <HeroAutocomplete {...props}>{children}</HeroAutocomplete>;
};
