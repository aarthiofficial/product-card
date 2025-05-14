import { Product } from '../models/Product';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { addToCart, increment, decrement } from '../redux/cartSlice';
import { useFavorites } from '../hooks/useFavorites';

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const quantity = cart[product.id] || 1;
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(product.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded p-4 shadow-md transition-all">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="text-lg font-semibold dark:text-white mt-2">{product.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.description}</p>

      <div className="flex items-center gap-2 mt-2">
        <button onClick={() => dispatch(decrement(product.id))}>➖</button>
        <span className="px-2">{quantity}</span>
        <button onClick={() => dispatch(increment(product.id))}>➕</button>
        <button
          onClick={() => dispatch(addToCart(product.id))}
          className="ml-auto bg-blue-500 text-white px-2 py-1 rounded"
        >
          Add to Cart
        </button>
        <button onClick={() => toggleFavorite(product.id)}>{isFav ? '❤️' : '🤍'}</button>
      </div>
    </div>
  );
};
