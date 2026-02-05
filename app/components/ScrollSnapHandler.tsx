'use client';

import { useEffect, useRef } from 'react';

export default function ScrollSnapHandler() {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWheelTimeRef = useRef(0);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Scroll container'ı bul (main element)
    scrollContainerRef.current = document.querySelector('main');

    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current) return;

      // Carousel içindeyse dikey scroll'u engelle
      const target = e.target as HTMLElement;
      const isInCarousel = target.closest('[data-carousel]');
      if (isInCarousel) {
        // Yatay scroll yapılıyorsa dikey scroll'u engelle
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          return; // Yatay scroll'a izin ver, dikey scroll'u engelleme
        }
      }

      // Eğer zaten scroll animasyonu devam ediyorsa, yeni scroll'u engelle
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      // Çok hızlı scroll'ları filtrele (debounce)
      const now = Date.now();
      if (now - lastWheelTimeRef.current < 150) {
        e.preventDefault();
        return;
      }
      lastWheelTimeRef.current = now;

      const sections = document.querySelectorAll('section[id]');
      if (sections.length === 0) return;

      const container = scrollContainerRef.current;
      const containerHeight = container.clientHeight;
      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
      const scrollThreshold = 80; // Minimum scroll miktarı

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
        const viewportCenter = containerHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        // Section viewport'un ortasında veya yakınındaysa
        if (sectionTop <= viewportCenter + 100 && rect.bottom >= viewportCenter - 100) {
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
          const containerRect = container.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top;
          const distance = Math.abs(relativeTop);
          if (distance < minDistance && relativeTop >= -containerHeight / 2 && relativeTop <= containerHeight) {
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
          e.stopPropagation();
          
          // Önceki animasyonu iptal et
          if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          
          isScrollingRef.current = true;

          // CSS scroll-snap ile uyumlu olması için doğrudan scroll pozisyonunu ayarla
          const targetRect = targetSection.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollTop = container.scrollTop;
          const targetScrollTop = scrollTop + targetRect.top - containerRect.top;

          // Smooth scroll için requestAnimationFrame kullan
          const startScrollTop = container.scrollTop;
          const distance = targetScrollTop - startScrollTop;
          const duration = 500; // ms - biraz daha hızlı
          let startTime: number | null = null;

          const animateScroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (ease-in-out)
            const ease = progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            container.scrollTop = startScrollTop + distance * ease;

            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(animateScroll);
            } else {
              isScrollingRef.current = false;
              animationFrameRef.current = null;
            }
          };

          animationFrameRef.current = requestAnimationFrame(animateScroll);

          // Güvenlik için timeout
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
            if (animationFrameRef.current !== null) {
              cancelAnimationFrame(animationFrameRef.current);
              animationFrameRef.current = null;
            }
          }, duration + 200);
        }
      }
    };

    // Wheel event'ini dinle
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return null;
}
