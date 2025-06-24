
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const OrderConfirmation = () => {
  const location = useLocation();
  const { product, orderDetails, paymentMethod, orderId } = location.state || {};

  if (!product || !orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-clay-800 mb-4">Order not found</h2>
          <Link to="/">
            <Button className="bg-terracotta-600 hover:bg-terracotta-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-clay-800 mb-2">
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-gray-600">Thank you for choosing Clayful Hearts</p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Order ID:</span>
                <Badge variant="outline" className="font-mono">{orderId}</Badge>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex space-x-4 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-clay-800">{product.title}</h3>
                    <p className="text-sm text-sage-600">by {product.artisan}</p>
                    <p className="text-lg font-bold text-terracotta-600">₹{product.price}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total Paid:</span>
                  <span className="text-terracotta-600">₹{product.price}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Payment Method:</span>
                  <Badge className={paymentMethod === 'cod' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}>
                    {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Delivery Address
                </h4>
                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                  <p className="font-semibold">{orderDetails.fullName}</p>
                  <p>{orderDetails.address}</p>
                  <p>{orderDetails.city}, {orderDetails.state} - {orderDetails.pincode}</p>
                  {orderDetails.landmark && <p className="text-gray-600">Near: {orderDetails.landmark}</p>}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-500" />
                    {orderDetails.mobile}
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    {orderDetails.email}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Expected Delivery</h4>
                <p className="text-sm text-gray-600">3-5 business days</p>
                <p className="text-sm text-green-600 font-medium">Free delivery included</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-terracotta-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-terracotta-600" />
                </div>
                <h4 className="font-semibold mb-2">Order Processing</h4>
                <p className="text-sm text-gray-600">We'll carefully package your handcrafted item</p>
              </div>
              <div>
                <div className="bg-sage-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-sage-600" />
                </div>
                <h4 className="font-semibold mb-2">Shipping</h4>
                <p className="text-sm text-gray-600">Your order will be dispatched within 24-48 hours</p>
              </div>
              <div>
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-sm text-gray-600">Safe delivery to your doorstep in 3-5 days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="max-w-4xl mx-auto mt-8 text-center space-y-4">
          <div className="space-x-4">
            <Link to="/">
              <Button variant="outline" className="border-terracotta-300 text-terracotta-700">
                Continue Shopping
              </Button>
            </Link>
            <Button className="bg-terracotta-600 hover:bg-terracotta-700">
              Track Your Order
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Questions? Contact us at support@clayfulhearts.com or call +91-9876543210
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
