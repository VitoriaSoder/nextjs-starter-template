'use client';

import { Popover as HeroPopover, PopoverProps } from '@heroui/react';

export const Popover = ({ children, ...props }: PopoverProps) => {
  return <HeroPopover {...props}>{children}</HeroPopover>;
};
