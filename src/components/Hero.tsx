
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Handcrafted with Love",
      subtitle: "Discover authentic pottery and clay art pieces made by skilled artisans",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=800&fit=crop",
      cta: "Explore Collections"
    },
    {
      title: "Stories in Clay",
      subtitle: "Each piece carries the heritage and soul of traditional craftsmanship",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=1200&h=800&fit=crop",
      cta: "Meet Our Artisans"
    },
    {
      title: "Transform Your Space",
      subtitle: "Bring warmth and character to your home with our unique clay creations",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop",
      cta: "Shop Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
