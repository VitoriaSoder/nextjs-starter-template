'use client';

import { TagGroup as HeroTagGroup, TagGroupProps } from '@heroui/react';

export const TagGroup = ({ children, ...props }: TagGroupProps) => {
  return <HeroTagGroup {...props}>{children}</HeroTagGroup>;
};
