import { useEffect, useState } from 'react';

function useImagePreloader(image: string) {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoad(true);
    };
    img.src = image;
  }, [image]);

  return isLoad;
}

export default useImagePreloader;
