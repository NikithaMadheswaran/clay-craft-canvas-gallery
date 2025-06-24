import { useState, useEffect } from 'react';
import { User, Package, Heart, MapPin, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/ProtectedRoute';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const UserAccount = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: ''
    }
  });

  useEffect(() => {
    if (user) {
      setUserInfo(prev => ({
        ...prev,
        email: user.email || '',
        name: user.user_metadata?.full_name || ''
      }));
    }
  }, [user]);

  const orders = [
    {
      id: '#ORD001',
      date: '2024-01-15',
      items: 'Handwoven Clay Vase + 2 more',
      total: '₹1,299',
      status: 'Delivered',
      tracking: 'Your order has been delivered'
    },
    {
      id: '#ORD002',
      date: '2024-01-10',
      items: 'Traditional Terra Pot Set',
      total: '₹649',
      status: 'In Transit',
      tracking: 'Expected delivery: Jan 20, 2024'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      title: 'Decorative Clay Bowls',
      price: '₹399',
      image: '/lovable-uploads/b664ad01-692c-4c6b-900a-ffeb6549dc38.png'
    },
    {
      id: 2,
      title: 'Artisan Clay Sculpture',
      price: '₹1,299',
      image: '/lovable-uploads/5b05f15f-6546-4b79-b1ea-06486222d10e.png'
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Rustic Clay Planters',
      price: '₹549',
      reason: 'Based on your recent pottery purchases',
      image: '/lovable-uploads/db7ef9e7-48f5-4a1b-a842-9a149d42c11e.png'
    }
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-clay-800 mb-2">My Account</h1>
            <p className="text-gray-600">Welcome back, {userInfo.name || user?.email}</p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:inline">Addresses</span>
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">For You</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input 
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input 
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input 
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button className="bg-terracotta-600 hover:bg-terracotta-700">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="mt-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-clay-800">Order History</h2>
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-clay-800">{order.id}</h3>
                          <p className="text-gray-600">{order.items}</p>
                          <p className="text-sm text-gray-500">Ordered on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-terracotta-600">{order.total}</p>
                          <p className={`text-sm px-2 py-1 rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">{order.tracking}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wishlist" className="mt-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-clay-800">My Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="font-semibold text-clay-800 mb-2">{item.title}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-terracotta-600 font-bold">{item.price}</span>
                          <Button size="sm" className="bg-terracotta-600 hover:bg-terracotta-700">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Address</CardTitle>
                  <CardDescription>Manage your delivery addresses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                      <Input 
                        value={userInfo.address.street}
                        onChange={(e) => setUserInfo({
                          ...userInfo, 
                          address: {...userInfo.address, street: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <Input 
                        value={userInfo.address.city}
                        onChange={(e) => setUserInfo({
                          ...userInfo, 
                          address: {...userInfo.address, city: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <Input 
                        value={userInfo.address.state}
                        onChange={(e) => setUserInfo({
                          ...userInfo, 
                          address: {...userInfo.address, state: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <Input 
                        value={userInfo.address.pincode}
                        onChange={(e) => setUserInfo({
                          ...userInfo, 
                          address: {...userInfo.address, pincode: e.target.value}
                        })}
                      />
                    </div>
                  </div>
                  <Button className="bg-terracotta-600 hover:bg-terracotta-700">Save Address</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-clay-800">Recommended for You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="font-semibold text-clay-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.reason}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-terracotta-600 font-bold">{item.price}</span>
                          <Button size="sm" className="bg-terracotta-600 hover:bg-terracotta-700">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default UserAccount;
