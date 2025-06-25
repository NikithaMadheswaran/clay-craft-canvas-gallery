
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star, ShoppingCart, Truck, CreditCard, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Main content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-clay-800 mb-4">
              🏺 Welcome to ClayCraft World – Where Every Piece Tells a Story!
            </h1>
            <p className="text-xl text-clay-600">
              Looking for something beautifully handmade, full of warmth and tradition? You're in the right place!
            </p>
          </div>

          <div className="bg-sage-50 rounded-lg p-8 mb-8">
            <p className="text-lg text-clay-700 leading-relaxed mb-6">
              At Clayful Hearts World, we bring you one-of-a-kind clay creations — from charming pottery and decorative vases to playful clay toys and soulful home decor.
            </p>
            <p className="text-lg text-clay-700 leading-relaxed">
              Each item is handcrafted with love by skilled artisans, and carefully delivered to your door. Whether you're shopping for yourself or someone special, you'll find something that speaks to your heart.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-clay-800 mb-8 text-center">
              🌟 Here's What You'll Love:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <ShoppingCart className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Wide Range of Products</h3>
                  <p className="text-clay-600">A wide range of authentic clay products</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <Star className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Real Reviews</h3>
                  <p className="text-clay-600">Real reviews and ratings from happy customers</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <Heart className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Detailed Product Info</h3>
                  <p className="text-clay-600">Material, size, color, style, and more</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <ShoppingCart className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Easy Shopping</h3>
                  <p className="text-clay-600">Buy Now & Add to Cart for easy shopping</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <Truck className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Free Delivery</h3>
                  <p className="text-clay-600">Free delivery on select products</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <CreditCard className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Flexible Payments</h3>
                  <p className="text-clay-600">Cash on Delivery & Secure Online Payments</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <Bot className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">24/7 Support</h3>
                  <p className="text-clay-600">24/7 support from our friendly AI Chatbot (MittiBot)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-sage-200">
                <User className="w-6 h-6 text-terracotta-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-clay-800">Personal Account</h3>
                  <p className="text-clay-600">Create your account to save address, track orders & more!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-terracotta-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold text-clay-800 mb-4">
              💬 Got Questions?
            </h2>
            <p className="text-lg text-clay-700 leading-relaxed">
              Our AI assistant MittiBot is always here to help — whether you need product info, help with your order, or just a little clay inspiration.
            </p>
          </div>

          <div className="text-center bg-gradient-to-r from-terracotta-100 to-sage-100 rounded-lg p-8">
            <p className="text-xl text-clay-800 mb-4 font-medium">
              Discover handmade treasures. Support local artists. Fill your space with stories molded from earth and heart.
            </p>
            <p className="text-2xl font-serif font-bold text-terracotta-600 mb-6">
              🎨 Start exploring — your next favorite piece is waiting!
            </p>
            <Button asChild className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 text-lg">
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
