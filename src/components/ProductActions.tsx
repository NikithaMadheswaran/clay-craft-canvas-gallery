
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, MessageCircle, Truck, Shield, CreditCard } from 'lucide-react';
import { Button } from './ui/button';

interface Product {
  title: string;
  price: string;
  images: string[];
  artisan: string;
}

interface ProductActionsProps {
  product: Product;
  onChatbot: () => void;
}

const ProductActions = ({ product, onChatbot }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log('Added to cart:', product.title, 'Quantity:', quantity);
    // Add to cart logic here
  };

  const handleBuyNow = () => {
    navigate('/checkout', { 
      state: { 
        product: {
          title: product.title,
          price: product.price,
          image: product.images[0],
          artisan: product.artisan
        }
      } 
    });
  };

  return (
    <div className="space-y-4">
      {/* Quantity and Buy Actions */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <Button onClick={handleAddToCart} variant="outline" className="flex-1">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Buy Now Button */}
      <Button 
        onClick={handleBuyNow}
        className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-lg py-6"
      >
        🛒 Buy Now – Fast & Simple Checkout!
      </Button>
      
      <div className="text-center text-sm text-gray-600">
        <p>✅ No log-in required • 🚚 Fast & free delivery • 💬 MittiBot support</p>
      </div>

      {/* Delivery & Payment Info */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center space-x-2 text-green-600">
          <Truck className="w-4 h-4" />
          <span>Free delivery on eligible items</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-600">
          <CreditCard className="w-4 h-4" />
          <span>Cash on Delivery available</span>
        </div>
        <div className="flex items-center space-x-2 text-purple-600">
          <Shield className="w-4 h-4" />
          <span>Secure Online Payments (UPI, Cards, Net Banking)</span>
        </div>
      </div>

      {/* AI Assistant Button */}
      <Button 
        onClick={onChatbot}
        variant="outline" 
        className="w-full border-sage-300 text-sage-700 hover:bg-sage-50"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Chat with MittiBot - Your Clay Companion
      </Button>
    </div>
  );
};

export default ProductActions;
