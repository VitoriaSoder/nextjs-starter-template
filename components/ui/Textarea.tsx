'use client';

import { TextArea as HeroTextarea } from '@heroui/react';
import type { ComponentProps } from 'react';

export const Textarea = ({ children, ...props }: ComponentProps<typeof HeroTextarea>) => {
  return <HeroTextarea {...props}>{children}</HeroTextarea>;
};
