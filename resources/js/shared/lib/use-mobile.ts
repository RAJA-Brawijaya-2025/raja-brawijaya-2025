import { useEffect, useState } from 'react';

function getIsMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    function handleResize() {
      setIsMobile(getIsMobile());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
