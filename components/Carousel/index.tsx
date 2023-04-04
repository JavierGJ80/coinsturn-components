import React, { useState, useEffect } from 'react';
import './index.css';

export interface CarouselProps {
  title: string;
  body: string;
  titleColor?: string;
  bodyColor?: string;
}

const Carousel: React.FC<CarouselProps> = ({ title, body, titleColor = 'yellow', bodyColor = 'white' }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className={`carousel-text${active ? ' active' : ' start'}`} onClick={() => setActive(!active)}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <h2 style={{ color: titleColor, fontSize: '24px', fontWeight: 'bold', marginRight: '10px' }}>{title}</h2>
            <p style={{ color: bodyColor, fontSize: '20px', margin: 0 }}>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
