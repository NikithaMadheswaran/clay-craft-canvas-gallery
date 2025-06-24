
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Truck, MessageCircle, ArrowLeft, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import MittiBot from '../components/MittiBot';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showChatbot, setShowChatbot] = useState(false);
  
  // Get product data from location state or use default
  const product = location.state?.product || {
    title: "Handwoven Clay Vase",
    price: "899",
    image: "/lovable-uploads/342f8213-862c-412a-8e68-db9ddc82a926.png",
    artisan: "Priya Sharma"
  };

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed:', { product, formData, paymentMethod });
    // Navigate to order confirmation
    navigate('/order-confirmation', { 
      state: { 
        product, 
        orderDetails: formData, 
        paymentMethod,
        orderId: `CH${Date.now()}`
      } 
    });
  };

  const isFormValid = formData.fullName && formData.email && formData.mobile && 
                     formData.address && formData.city && formData.state && formData.pincode;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Product
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-clay-800 mb-2">
            🛒 Buy Now – Fast & Simple Checkout!
          </h1>
          <p className="text-gray-600">Love what you see? Get it delivered in just a few easy steps</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-clay-800">{product.title}</h3>
                    <p className="text-sm text-sage-600">by {product.artisan}</p>
                    <p className="text-lg font-bold text-terracotta-600">₹{product.price}</p>
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
                    <span>Total:</span>
                    <span className="text-terracotta-600">₹{product.price}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <Truck className="w-4 h-4 mr-2" />
                    Free delivery on eligible items
                  </div>
                  <div className="flex items-center text-blue-600">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Secure payment options
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-terracotta-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                  Choose Your Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">💵</span>
                        <div>
                          <div className="font-semibold">Cash on Delivery</div>
                          <div className="text-sm text-gray-600">Pay when your order arrives</div>
                        </div>
                        <Badge className="ml-auto bg-green-100 text-green-700">Popular</Badge>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">💳</span>
                        <div>
                          <div className="font-semibold">Online Payment</div>
                          <div className="text-sm text-gray-600">UPI, Card, Net Banking</div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Step 2: Delivery Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-terracotta-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                  Enter Your Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Full Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House no, Building, Street, Area"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="Pincode"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="landmark">Landmark (Optional)</Label>
                  <Input
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    placeholder="Nearby landmark for easy delivery"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Place Order */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-terracotta-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                  Place Your Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-sage-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Order Summary:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.title} by {product.artisan} - ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Payment: {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Delivery: {formData.city && formData.state ? `${formData.city}, ${formData.state}` : 'Address to be confirmed'}
                  </p>
                </div>

                <Button 
                  onClick={handlePlaceOrder}
                  disabled={!isFormValid}
                  className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-lg py-6"
                >
                  <span className="text-2xl mr-2">✅</span>
                  Confirm Order - ₹{product.price}
                </Button>

                <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 mr-1" />
                    Fast delivery
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Safe packaging
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="border-sage-200">
              <CardContent className="p-4">
                <Button 
                  onClick={() => setShowChatbot(true)}
                  variant="outline" 
                  className="w-full border-sage-300 text-sage-700 hover:bg-sage-50"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  💬 Need help? Ask our MittiBot anytime during checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {showChatbot && <MittiBot onClose={() => setShowChatbot(false)} />}
      <Footer />
    </div>
  );
};

export default Checkout;
