'use client';

import { Tooltip as HeroTooltip, TooltipProps } from '@heroui/react';

export const Tooltip = ({ children, ...props }: TooltipProps) => {
  return <HeroTooltip {...props}>{children}</HeroTooltip>;
};
