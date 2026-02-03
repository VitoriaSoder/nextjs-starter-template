'use client';

import { Button as HeroButton, ButtonProps } from '@heroui/react';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <HeroButton {...props}>{children}</HeroButton>;
};
