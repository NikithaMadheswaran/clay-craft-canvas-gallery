import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, MessageCircle, Truck, Shield, CreditCard } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import ReviewsSection from '../components/ReviewsSection';
import MittiBot from '../components/MittiBot';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showChatbot, setShowChatbot] = useState(false);
  const navigate = useNavigate();

  // Sample product data - in real app this would come from API/database
  const product = {
    id: 1,
    title: "Handwoven Clay Vase",
    price: "899",
    originalPrice: "1,199",
    artisan: "Priya Sharma",
    rating: 4.5,
    reviewCount: 24,
    images: [
      "/image-uploads/342f8213-862c-412a-8e68-db9ddc82a926.png",
      "/image-uploads/b5144753-24b1-4f71-8022-e3a1da33f664.png",
      "/image-uploads/b664ad01-692c-4c6b-900a-ffeb6549dc38.png"
    ],
    details: {
      material: "Pure Clay",
      dimensions: "12\" H x 8\" W",
      pieces: "1 Piece",
      artStyle: "Traditional Handwoven",
      colorOptions: ["Natural Terracotta", "Glazed Brown", "Earthy Red"],
      shape: "Round Vase"
    },
    description: "A beautiful handwoven clay vase crafted by master artisan Priya Sharma. This piece showcases traditional Indian pottery techniques passed down through generations.",
    features: [
      "100% Natural Clay",
      "Handcrafted by Skilled Artisan",
      "Eco-friendly & Sustainable",
      "Perfect for Home Decoration"
    ]
  };

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
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-terracotta-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/#collections" className="hover:text-terracotta-600">Collections</Link>
          <span className="mx-2">/</span>
          <span className="text-clay-800">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-terracotta-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary" className="text-sage-600">by {product.artisan}</Badge>
                <Badge className="bg-terracotta-100 text-terracotta-700">Handcrafted</Badge>
              </div>
              <h1 className="text-3xl font-serif font-bold text-clay-800 mb-4">{product.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-terracotta-600">₹{product.price}</span>
                <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">25% OFF</Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-sage-50 rounded-xl p-6">
              <h3 className="font-semibold text-clay-800 mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">Material:</span> {product.details.material}</div>
                <div><span className="font-medium">Dimensions:</span> {product.details.dimensions}</div>
                <div><span className="font-medium">Pieces:</span> {product.details.pieces}</div>
                <div><span className="font-medium">Art Style:</span> {product.details.artStyle}</div>
                <div><span className="font-medium">Shape:</span> {product.details.shape}</div>
              </div>
            </div>

            {/* Color Options */}
            <div>
              <h3 className="font-semibold text-clay-800 mb-3">Color Options</h3>
              <div className="flex space-x-2">
                {product.details.colorOptions.map((color, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-terracotta-500 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Buy Actions */}
            <div className="space-y-4">
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
              onClick={() => setShowChatbot(true)}
              variant="outline" 
              className="w-full border-sage-300 text-sage-700 hover:bg-sage-50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with MittiBot - Your Clay Companion
            </Button>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-clay-800 mb-4">About This Product</h3>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <h4 className="font-semibold text-clay-800 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <ReviewsSection productId={product.id} />
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-clay-800 mb-4">Shipping Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Free shipping on orders above ₹500</li>
                    <li>• Standard delivery: 3-5 business days</li>
                    <li>• Express delivery: 1-2 business days (additional charges apply)</li>
                    <li>• Cash on Delivery available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clay-800 mb-4">Returns & Exchanges</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 7-day return policy</li>
                    <li>• Items must be in original condition</li>
                    <li>• Free return pickup available</li>
                    <li>• Refund processed within 5-7 business days</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {showChatbot && <MittiBot onClose={() => setShowChatbot(false)} />}
      <Footer />
    </div>
  );
};

export default ProductDetail;
