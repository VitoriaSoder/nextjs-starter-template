'use client';

import { Calendar as HeroCalendar, CalendarProps } from '@heroui/react';

export const Calendar = ({ children, ...props }: CalendarProps) => {
  return <HeroCalendar {...props}>{children}</HeroCalendar>;
};
