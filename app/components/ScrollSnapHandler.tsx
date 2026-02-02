'use client';

import { useEffect, useRef } from 'react';

export default function ScrollSnapHandler() {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Çok hızlı scroll'ları filtrele (debounce)
      const now = Date.now();
      if (now - lastWheelTimeRef.current < 50) {
        return;
      }
      lastWheelTimeRef.current = now;

      // Eğer zaten scroll animasyonu devam ediyorsa, yeni scroll'u engelle
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const sections = document.querySelectorAll('section[id]');
      if (sections.length === 0) return;

      const windowHeight = window.innerHeight;
      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
      const scrollThreshold = 30; // Minimum scroll miktarı

      // Çok küçük scroll hareketlerini yok say
      if (Math.abs(e.deltaY) < scrollThreshold) {
        return;
      }

      // Hangi section'da olduğumuzu bul
      let currentSectionIndex = -1;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionCenter = sectionTop + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        // Section viewport'un ortasında veya yakınındaysa
        if (sectionTop <= viewportCenter && rect.bottom >= viewportCenter) {
          if (distance < minDistance) {
            minDistance = distance;
            currentSectionIndex = index;
          }
        }
      });

      // Eğer section bulunamazsa, en yakın section'ı bul
      if (currentSectionIndex === -1) {
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance && rect.top >= -windowHeight / 2) {
            minDistance = distance;
            currentSectionIndex = index;
          }
        });
      }

      // İlk veya son section'da değilsek snap yap
      if (currentSectionIndex >= 0) {
        let targetSection: Element | null = null;

        if (scrollDirection === 'down' && currentSectionIndex < sections.length - 1) {
          targetSection = sections[currentSectionIndex + 1];
        } else if (scrollDirection === 'up' && currentSectionIndex > 0) {
          targetSection = sections[currentSectionIndex - 1];
        }

        if (targetSection) {
          e.preventDefault();
          isScrollingRef.current = true;

          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // Scroll animasyonu bittiğinde flag'i sıfırla
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }
      }
    };

    // Wheel event'ini dinle
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return null;
}
