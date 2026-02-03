'use client';

import { InputOTP as HeroInputOTP, InputOTPProps } from '@heroui/react';

export const InputOTP = ({ children, ...props }: InputOTPProps) => {
  return <HeroInputOTP {...props}>{children}</HeroInputOTP>;
};
