'use client';

import { Accordion as HeroAccordion, AccordionProps } from '@heroui/react';

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return <HeroAccordion {...props}>{children}</HeroAccordion>;
};
