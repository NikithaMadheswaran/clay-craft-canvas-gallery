
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ReviewsSection from './ReviewsSection';

interface ProductTabsProps {
  description: string;
  features: string[];
  productId: number;
  reviewCount: number;
}

const ProductTabs = ({ description, features, productId, reviewCount }: ProductTabsProps) => {
  return (
    <div className="mt-16">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({reviewCount})</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-clay-800 mb-4">About This Product</h3>
            <p className="text-gray-700 mb-6">{description}</p>
            <h4 className="font-semibold text-clay-800 mb-3">Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-8">
          <ReviewsSection productId={productId} />
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
  );
};

export default ProductTabs;
