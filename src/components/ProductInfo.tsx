
import { Star } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProductDetails {
  material: string;
  dimensions: string;
  pieces: string;
  artStyle: string;
  colorOptions: string[];
  shape: string;
}

interface ProductInfoProps {
  title: string;
  artisan: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice: string;
  details: ProductDetails;
}

const ProductInfo = ({ 
  title, 
  artisan, 
  rating, 
  reviewCount, 
  price, 
  originalPrice, 
  details 
}: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Badge variant="secondary" className="text-sage-600">by {artisan}</Badge>
          <Badge className="bg-terracotta-100 text-terracotta-700">Handcrafted</Badge>
        </div>
        <h1 className="text-3xl font-serif font-bold text-clay-800 mb-4">{title}</h1>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">({reviewCount} reviews)</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-6">
          <span className="text-3xl font-bold text-terracotta-600">₹{price}</span>
          <span className="text-xl text-gray-500 line-through">₹{originalPrice}</span>
          <Badge className="bg-green-100 text-green-700">25% OFF</Badge>
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-sage-50 rounded-xl p-6">
        <h3 className="font-semibold text-clay-800 mb-4">Product Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="font-medium">Material:</span> {details.material}</div>
          <div><span className="font-medium">Dimensions:</span> {details.dimensions}</div>
          <div><span className="font-medium">Pieces:</span> {details.pieces}</div>
          <div><span className="font-medium">Art Style:</span> {details.artStyle}</div>
          <div><span className="font-medium">Shape:</span> {details.shape}</div>
        </div>
      </div>

      {/* Color Options */}
      <div>
        <h3 className="font-semibold text-clay-800 mb-3">Color Options</h3>
        <div className="flex space-x-2">
          {details.colorOptions.map((color, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-terracotta-500 transition-colors"
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
