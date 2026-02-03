'use client';

import { Avatar as HeroAvatar, AvatarProps } from '@heroui/react';

export const Avatar = ({ children, ...props }: AvatarProps) => {
  return <HeroAvatar {...props}>{children}</HeroAvatar>;
};
