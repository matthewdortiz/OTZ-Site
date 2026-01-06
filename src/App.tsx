import { Router } from './components/Router';
import { useEffect } from 'react';
import faviconImg from 'figma:asset/175ef9c37b5530325437f7966a6f530739cadb92.png';

export default function App() {
  useEffect(() => {
    // Set the favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingLinks = document.querySelectorAll('link[rel*="icon"]');
      existingLinks.forEach(link => link.remove());
      
      // Add new favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = faviconImg;
      document.head.appendChild(link);
      
      // Also add apple-touch-icon for iOS devices
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = faviconImg;
      document.head.appendChild(appleTouchIcon);
    };
    
    setFavicon();
  }, []);

  return <Router />;
}