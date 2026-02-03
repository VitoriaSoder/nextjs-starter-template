'use client';

import { DisclosureGroup as HeroDisclosureGroup, DisclosureGroupProps } from '@heroui/react';

export const DisclosureGroup = ({ children, ...props }: DisclosureGroupProps) => {
  return <HeroDisclosureGroup {...props}>{children}</HeroDisclosureGroup>;
};
