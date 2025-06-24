
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  artisan: string;
  isNew?: boolean;
  onAddToCart?: () => void;
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  image, 
  artisan, 
  isNew = false,
  onAddToCart 
}: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {isNew && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-sage-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </span>
        </div>
      )}
      
      <Link to="/product/1" className="block">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sage-600 text-sm font-medium">by {artisan}</span>
        </div>
        <Link to="/product/1">
          <h3 className="text-xl font-serif font-semibold text-clay-800 mb-3 group-hover:text-terracotta-600 transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-terracotta-600">₹{price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">₹{originalPrice}</span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-1">(24)</span>
          </div>
        </div>
        
        <div className="mt-4">
          <button 
            onClick={onAddToCart}
            className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Quick Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
