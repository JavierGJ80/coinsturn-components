import React from 'react';
import './index.css';
export interface CarouselProps {
    title: string;
    body: string;
    titleColor?: string;
    bodyColor?: string;
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
