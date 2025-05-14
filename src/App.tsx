import { useProducts } from './api/productService';
import { ProductCard } from './components/ProductCard';
import { useTheme } from './theme/useTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();

function InnerApp() {
  const { data, isLoading, isError } = useProducts();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <button onClick={toggleTheme} className="mb-4 text-xl">
        {theme === 'dark' ? '🌙' : '🌞'}
      </button>
      {isLoading && <p className="text-center text-white">Loading...</p>}
      {isError && <p className="text-center text-red-500">Error loading products</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <InnerApp />
      </QueryClientProvider>
    </Provider>
  );
}
