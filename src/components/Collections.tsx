
import ProductCard from './ProductCard';

const Collections = () => {
  const featuredProducts = [
    {
      title: "Handwoven Clay Vase",
      price: "2,499",
      originalPrice: "3,299",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=300&fit=crop",
      artisan: "Priya Sharma",
      isNew: true
    },
    {
      title: "Traditional Terra Pot Set",
      price: "1,899",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      artisan: "Ramesh Kumar"
    },
    {
      title: "Decorative Clay Bowls",
      price: "899",
      originalPrice: "1,199",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      artisan: "Anita Devi"
    },
    {
      title: "Artisan Clay Sculpture",
      price: "4,999",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop",
      artisan: "Vikram Singh",
      isNew: true
    },
    {
      title: "Rustic Clay Planters",
      price: "1,299",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
      artisan: "Maya Patel"
    },
    {
      title: "Heritage Clay Dinnerware",
      price: "3,499",
      originalPrice: "4,199",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      artisan: "Suresh Yadav"
    }
  ];

  const categories = [
    { name: "Pottery", count: 45, image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=300&h=200&fit=crop", color: "terracotta" },
    { name: "Decorative", count: 32, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop", color: "sage" },
    { name: "Toys & Games", count: 28, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop", color: "dusty" },
    { name: "Dinnerware", count: 38, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop", color: "clay" }
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-clay-800 mb-6">
            Our Curated Collections
          </h2>
          <p className="text-xl text-clay-600 max-w-3xl mx-auto leading-relaxed">
            Discover handcrafted treasures that blend traditional artistry with contemporary appeal. 
            Each piece is carefully selected from our network of skilled artisans across India.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-serif font-semibold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-serif font-bold text-clay-800">Featured Pieces</h3>
            <button className="text-terracotta-600 hover:text-terracotta-700 font-medium transition-colors">
              View All Collections →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onAddToCart={() => console.log('Added to cart:', product.title)}
              />
            ))}
          </div>
        </div>

        {/* Mood Shopping Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-serif font-bold text-clay-800 mb-8 text-center">
            Shop by Mood
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 transition-colors">
                <span className="text-4xl">🧘</span>
              </div>
              <h4 className="text-xl font-serif font-semibold text-clay-800 mb-2">Calming Corner</h4>
              <p className="text-clay-600">Serene pieces for meditation and relaxation</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta-200 transition-colors">
                <span className="text-4xl">🏡</span>
              </div>
              <h4 className="text-xl font-serif font-semibold text-clay-800 mb-2">Rustic Charm</h4>
              <p className="text-clay-600">Warm, earthy pieces for cozy homes</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-24 h-24 bg-dusty-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-dusty-200 transition-colors">
                <span className="text-4xl">🎉</span>
              </div>
              <h4 className="text-xl font-serif font-semibold text-clay-800 mb-2">Festive Feels</h4>
              <p className="text-clay-600">Vibrant pieces for celebrations and joy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
