import { useEffect, useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const updated = prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return { favorites, toggleFavorite };
};
