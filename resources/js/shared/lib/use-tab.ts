import { useEffect, useState } from 'react';

function getIsTab() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 1024;
}

export function useIsTab() {
  const [isTab, setIsTab] = useState(getIsTab());

  useEffect(() => {
    function handleResize() {
      setIsTab(getIsTab());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTab;
}
