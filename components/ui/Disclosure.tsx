'use client';

import { Disclosure as HeroDisclosure, DisclosureProps } from '@heroui/react';

export const Disclosure = ({ children, ...props }: DisclosureProps) => {
  return <HeroDisclosure {...props}>{children}</HeroDisclosure>;
};
