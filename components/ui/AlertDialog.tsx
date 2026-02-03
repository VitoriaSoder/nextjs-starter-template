'use client';

import { AlertDialog as HeroAlertDialog, AlertDialogProps } from '@heroui/react';

export const AlertDialog = ({ children, ...props }: AlertDialogProps) => {
  return <HeroAlertDialog {...props}>{children}</HeroAlertDialog>;
};
