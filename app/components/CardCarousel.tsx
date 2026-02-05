'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CardCarouselProps {
  children: React.ReactNode;
}

export default function CardCarousel({ children }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.clientWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        data-carousel
        className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onWheel={(e) => {
          // Yatay scroll yapılıyorsa dikey scroll'u engelle
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.stopPropagation();
          }
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-start md:flex-shrink md:w-auto"
          >
            {child}
          </div>
        ))}
      </div>
      
      {/* Dots Indicator - sadece mobilde */}
      {totalCards > 1 && (
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-brand-almost-black scale-125'
                  : 'bg-brand-almost-black/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
