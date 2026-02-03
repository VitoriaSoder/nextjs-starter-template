'use client';

import { SearchField as HeroSearchField, SearchFieldProps } from '@heroui/react';

export const SearchField = ({ children, ...props }: SearchFieldProps) => {
  return <HeroSearchField {...props}>{children}</HeroSearchField>;
};
