
import { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

interface ReviewsSectionProps {
  productId: number;
}

const ReviewsSection = ({ productId }: ReviewsSectionProps) => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      userName: "Anita M.",
      rating: 5,
      comment: "Absolutely beautiful vase! The craftsmanship is exceptional and it looks perfect in my living room. Priya's work is truly artistic.",
      date: "2024-01-15",
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      userName: "Rajesh K.",
      rating: 4,
      comment: "Good quality clay work. Delivery was quick and packaging was excellent. Slightly smaller than expected but overall satisfied.",
      date: "2024-01-10",
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      userName: "Meera S.",
      rating: 5,
      comment: "This vase exceeded my expectations! The traditional techniques used are evident in every detail. Highly recommend!",
      date: "2024-01-05",
      helpful: 15,
      verified: true
    }
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  });

  const handleSubmitReview = () => {
    console.log('Submitting review:', newReview);
    // Handle review submission
    setNewReview({ rating: 5, comment: '' });
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="bg-sage-50 rounded-xl p-6">
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-clay-800">{averageRating.toFixed(1)}</div>
            <div className="flex items-center justify-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">{reviews.length} reviews</div>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = reviews.filter(r => r.rating === rating).length;
              const percentage = (count / reviews.length) * 100;
              return (
                <div key={rating} className="flex items-center space-x-2 mb-1">
                  <span className="text-sm w-8">{rating}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Write Review */}
      <div className="border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-clay-800 mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setNewReview({ ...newReview, rating })}
                  className="p-1"
                >
                  <Star
                    className={`w-6 h-6 ${rating <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
            <Textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Share your experience with this product..."
              rows={4}
            />
          </div>
          
          <Button onClick={handleSubmitReview} className="bg-terracotta-600 hover:bg-terracotta-700">
            Submit Review
          </Button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <h3 className="font-semibold text-clay-800">Customer Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-clay-800">{review.userName}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3">{review.comment}</p>
            
            <div className="flex items-center space-x-4 text-sm">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600">
                <ThumbsDown className="w-4 h-4" />
                <span>Report</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
