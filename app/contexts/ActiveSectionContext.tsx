'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('what-is-deepnode');

  useEffect(() => {
    const scrollContainer = document.querySelector('main') as HTMLElement;
    const sections = document.querySelectorAll('section[id]');

    if (!scrollContainer || sections.length === 0) return;

    const updateActiveSection = () => {
      const containerScrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      const viewportCenter = containerScrollTop + containerHeight / 2;

      let activeId = '';
      let minDistance = Infinity;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionCenter = sectionTop + sectionHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (sectionTop <= viewportCenter && sectionTop + sectionHeight >= viewportCenter) {
          if (distance < minDistance) {
            minDistance = distance;
            activeId = section.id;
          }
        }
      });

      if (!activeId) {
        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop = sectionElement.offsetTop;
          const distance = Math.abs(sectionTop - containerScrollTop);
          if (distance < minDistance) {
            minDistance = distance;
            activeId = section.id;
          }
        });
      }

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    const initialTimeout = setTimeout(() => {
      updateActiveSection();
    }, 100);

    scrollContainer.addEventListener('scroll', updateActiveSection, { passive: true });
    
    const observerOptions = {
      root: scrollContainer,
      rootMargin: '-30% 0px -30% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let maxIntersection = 0;
      let mostVisibleSection = '';

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection && maxIntersection > 0.3) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      clearTimeout(initialTimeout);
      scrollContainer.removeEventListener('scroll', updateActiveSection);
      observer.disconnect();
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
}
