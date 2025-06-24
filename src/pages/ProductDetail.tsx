
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductInfo from '../components/ProductInfo';
import ProductActions from '../components/ProductActions';
import ProductTabs from '../components/ProductTabs';
import MittiBot from '../components/MittiBot';

const ProductDetail = () => {
  const { id } = useParams();
  const [showChatbot, setShowChatbot] = useState(false);

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
      "/lovable-uploads/342f8213-862c-412a-8e68-db9ddc82a926.png",
      "/lovable-uploads/b5144753-24b1-4f71-8022-e3a1da33f664.png",
      "/lovable-uploads/b664ad01-692c-4c6b-900a-ffeb6549dc38.png"
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
          <ProductImageGallery images={product.images} title={product.title} />

          {/* Product Info and Actions */}
          <div className="space-y-6">
            <ProductInfo
              title={product.title}
              artisan={product.artisan}
              rating={product.rating}
              reviewCount={product.reviewCount}
              price={product.price}
              originalPrice={product.originalPrice}
              details={product.details}
            />

            <ProductActions
              product={product}
              onChatbot={() => setShowChatbot(true)}
            />
          </div>
        </div>

        {/* Product Tabs */}
        <ProductTabs
          description={product.description}
          features={product.features}
          productId={product.id}
          reviewCount={product.reviewCount}
        />
      </div>

      {showChatbot && <MittiBot onClose={() => setShowChatbot(false)} />}
      <Footer />
    </div>
  );
};

export default ProductDetail;
