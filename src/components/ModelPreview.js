import React, { useEffect, useRef, useState } from 'react';

export default function ModelPreview({ src, poster, alt = '3D preview', style }) {
  const loadedRef = useRef(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.onload = () => setIsSupported(true);
    document.head.appendChild(script);
  }, []);

  if (!src) {
    return poster ? <img src={poster} alt={alt} style={style} /> : null;
  }

  return isSupported ? (
    <model-viewer src={src} ar camera-controls poster={poster} style={style}></model-viewer>
  ) : (
    poster ? <img src={poster} alt={alt} style={style} /> : null
  );
}


