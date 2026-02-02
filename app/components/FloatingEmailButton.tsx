'use client';

import Button from './Button';

export default function FloatingEmailButton() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:build@deepnodestudios.com';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:left-auto md:right-8 md:bottom-8 z-50 md:w-auto">
      <div className="flex justify-center md:justify-end p-4 md:p-0">
        <Button
          variant="primary"
          size="lg"
          onClick={handleEmailClick}
          className="w-full md:w-auto shadow-2xl hover:scale-105"
        >
          Send us an email
        </Button>
      </div>
    </div>
  );
}
