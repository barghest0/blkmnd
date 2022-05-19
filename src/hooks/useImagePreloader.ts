import { useState } from 'react';

function useImagePreloader(image: string) {
  const [isLoad, setIsLoad] = useState(false);
  const img = new Image();
  img.onload = () => {
    setIsLoad(true);
  };
  img.src = image;

  return isLoad;
}

export default useImagePreloader;
