'use client';

import { Slider as HeroSlider, SliderProps } from '@heroui/react';

export const Slider = ({ children, ...props }: SliderProps) => {
  return <HeroSlider {...props}>{children}</HeroSlider>;
};
