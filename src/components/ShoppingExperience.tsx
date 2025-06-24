
import { ShoppingCart, Star, MessageCircle, Truck, User, CreditCard } from 'lucide-react';

const ShoppingExperience = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-terracotta-600" />,
      title: "Product Details That Matter",
      description: "Material type, color options, dimensions, art style, and artisan info - everything you need to know",
      items: ["Material Type", "Color Options", "Dimensions & Shape", "Art Style", "Brand/Artisan Info"]
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Customer Reviews & Ratings",
      description: "Real reviews from verified buyers with star ratings and detailed comments",
      items: ["Real buyer reviews", "Star ratings", "Comment sections", "Verified purchases"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-sage-600" />,
      title: "Live Support with MittiBot",
      description: "Your smart clay companion available 24/7 for all your queries",
      items: ["Product queries", "Delivery updates", "Personalized suggestions", "Custom requests"]
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Delivery & Payment Options",
      description: "Flexible delivery and secure payment methods for your convenience",
      items: ["Free delivery on eligible items", "Cash on Delivery", "UPI, Cards, Net Banking", "Order tracking"]
    },
    {
      icon: <User className="w-8 h-8 text-purple-600" />,
      title: "Personal Account Benefits",
      description: "Create your account to manage everything in one place",
      items: ["Save delivery details", "Track orders", "View purchase history", "Personalized recommendations"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Easy Cart & Checkout",
      description: "Seamless shopping experience from cart to delivery",
      items: ["One-click add to cart", "Detailed order preview", "Multiple payment options", "Instant order updates"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sage-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-clay-800 mb-6">
            🛍️✨ Welcome to a Seamless Shopping Experience
          </h2>
          <p className="text-xl text-clay-600 max-w-4xl mx-auto leading-relaxed">
            At our ClayCraft store, we bring you more than just beautiful handmade products — we offer a 
            customer-first experience designed for your comfort, trust, and joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-clay-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-terracotta-100 to-sage-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-clay-800 mb-4">
              💡 Start exploring, reviewing, and enjoying your journey
            </h3>
            <p className="text-xl text-clay-600 mb-6">
              Let your space tell a handmade story — crafted for you, by heart.
            </p>
            <button className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingExperience;
