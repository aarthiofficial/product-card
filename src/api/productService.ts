import { useQuery } from '@tanstack/react-query';
import { Product } from '../models/Product';

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const useProducts = () => {
  return useQuery<Product[], Error>(['products'], fetchProducts);
};
