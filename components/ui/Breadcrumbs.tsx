'use client';

import { Breadcrumbs as HeroBreadcrumbs, BreadcrumbsProps } from '@heroui/react';

export const Breadcrumbs = ({ children, ...props }: BreadcrumbsProps) => {
  return <HeroBreadcrumbs {...props}>{children}</HeroBreadcrumbs>;
};
