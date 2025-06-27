
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
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
              📞 Get in Touch with Us
            </h1>
            <p className="text-xl text-clay-600 mb-4">
              We're always here to help you!
            </p>
            <p className="text-lg text-clay-700">
              Whether you have a question about a product, your order, delivery, or just want to say hello — feel free to reach out.
              Our team (and our friendly AI assistant MittiBot) is ready to assist you.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-clay-800 mb-8 text-center">
              📬 Contact Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-terracotta-600" />
                  <h3 className="text-xl font-semibold text-clay-800">Customer Care Email</h3>
                </div>
                <p className="text-lg text-terracotta-600 font-medium">
                  📧 support@clayfulhearts.com
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-terracotta-600" />
                  <h3 className="text-xl font-semibold text-clay-800">Phone / WhatsApp</h3>
                </div>
                <p className="text-lg text-terracotta-600 font-medium mb-2">
                  📱 +91 78341 58756
                </p>
                <p className="text-sm text-clay-600">
                  (Available: Mon–Sat, 9:00 AM – 6:00 PM IST)
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-terracotta-600" />
                  <h3 className="text-xl font-semibold text-clay-800">Live Chat Support</h3>
                </div>
                <p className="text-lg text-clay-700">
                  💬 Chat with MittiBot 24/7 — just tap the chat icon!
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-sage-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-terracotta-600" />
                  <h3 className="text-xl font-semibold text-clay-800">Head Office Address</h3>
                </div>
                <div className="text-clay-700">
                  <p className="font-medium">🏢 Clayful Hearts world</p>
                  <p>123 Artisan Lane,</p>
                  <p>Chennai, Tamil Nadu – 600001, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sage-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold text-clay-800 mb-6 text-center">
              🤝 Let's Stay Connected:
            </h2>
            <p className="text-center text-clay-700 mb-6">
              Follow us on social media for the latest collections, artisan stories, and behind-the-scenes magic!
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://instagram.com/clayful_hearts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-sage-200 hover:shadow-md transition-shadow"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
                <span className="text-clay-700">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/clayful_hearts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-sage-200 hover:shadow-md transition-shadow"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
                <span className="text-clay-700">Facebook</span>
              </a>
              <a 
                href="https://www.pinterest.com/clayful_hearts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-sage-200 hover:shadow-md transition-shadow"
              >
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">P</span>
                </div>
                <span className="text-clay-700">Pinterest</span>
              </a>
            </div>
          </div>

          <div className="text-center bg-terracotta-50 rounded-lg p-8 mb-8">
            <p className="text-lg text-clay-800 mb-2 font-medium">
              Your feedback means the world to us.
            </p>
            <p className="text-clay-600">
              We aim to respond within 24 hours on working days.
            </p>
          </div>

          <div className="bg-gradient-to-r from-terracotta-100 to-sage-100 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-clay-800 mb-4 text-center">
              🏺 Behind the Craft
            </h2>
            <p className="text-lg text-clay-700 text-center mb-6">
              Watch exclusive videos of our artisans at work, sharing their techniques, stories, and the passion that drives their craft.
              Get a closer look at how every piece is molded with care and tradition — from raw clay to stunning creations.
            </p>
            <div className="text-center">
              <a 
                href="https://www.youtube.com/watch?v=y7gBRjx38DI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                🎥 Watch Videos
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
