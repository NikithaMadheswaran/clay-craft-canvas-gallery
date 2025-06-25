
const Artisans = () => {
  const artisans = [
    {
      name: "Priya Sharma",
      location: "Rajasthan",
      specialty: "Traditional Pottery",
      experience: "15 years",
      image: "/lovable-uploads/6c0ecae0-eea3-41fc-bd35-bed84ca82c57.png",
      story: "Priya learned the art of pottery from her grandmother and has been creating beautiful terracotta pieces that reflect the rich heritage of Rajasthan.",
      featured: true
    },
    {
      name: "Ramesh Kumar",
      location: "Gujarat",
      specialty: "Clay Sculptures",
      experience: "20 years",
      image: "/lovable-uploads/3df689e7-6db4-4576-b706-e1f5cdf3742d.png",
      story: "Master sculptor Ramesh creates intricate clay figurines and decorative pieces, bringing stories to life through his skilled hands."
    },
    {
      name: "Anita Devi",
      location: "West Bengal",
      specialty: "Terracotta Art",
      experience: "12 years",
      image: "/lovable-uploads/84b180b3-b1c3-4c45-9136-fe7df62a8cca.png",
      story: "Anita specializes in Bengal's traditional terracotta art, creating beautiful decorative items that showcase the region's artistic legacy."
    }
  ];

  return (
    <section id="artisans" className="py-20 bg-clay-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-clay-800 mb-6">
            Meet Our Master Artisans
          </h2>
          <p className="text-xl text-clay-600 max-w-3xl mx-auto leading-relaxed">
            Behind every piece is a story of dedication, skill, and passion. Meet the talented artisans 
            who breathe life into clay with their experienced hands and creative souls.
          </p>
        </div>

        {/* Featured Artisan */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={artisans[0].image}
                  alt={artisans[0].name}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-terracotta-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured Artisan
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-serif font-bold text-clay-800 mb-2">
                    {artisans[0].name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sage-600 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {artisans[0].location}
                    </span>
                    <span>•</span>
                    <span>{artisans[0].experience} experience</span>
                  </div>
                  <div className="bg-sage-100 rounded-lg px-4 py-2 inline-block mb-4">
                    <span className="text-sage-800 font-medium text-sm">{artisans[0].specialty}</span>
                  </div>
                </div>
                <p className="text-clay-600 text-lg leading-relaxed mb-6">
                  {artisans[0].story}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                    View Collection
                  </button>
                  <a
                    href="https://www.youtube.com/watch?v=y7gBRjx38DI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-sage-300 hover:border-sage-400 text-sage-700 px-6 py-3 rounded-full font-medium transition-colors inline-block"
                  >
                    Watch Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Artisans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artisans.slice(1).map((artisan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-serif font-semibold">{artisan.name}</h4>
                  <p className="text-sm opacity-90">{artisan.location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-dusty-100 text-dusty-800 px-3 py-1 rounded-full text-sm font-medium">
                    {artisan.specialty}
                  </span>
                  <span className="text-sage-600 text-sm">{artisan.experience}</span>
                </div>
                <p className="text-clay-600 mb-4 leading-relaxed">
                  {artisan.story}
                </p>
                <button className="text-terracotta-600 hover:text-terracotta-700 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Behind the Craft Section */}
        <div className="mt-16 bg-gradient-to-r from-terracotta-500 to-clay-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-serif font-bold mb-6">Behind the Craft</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Watch exclusive videos of our artisans at work, sharing their techniques, stories, 
            and the passion that drives their craft.
          </p>
          <a
            href="https://www.youtube.com/watch?v=y7gBRjx38DI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-terracotta-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors inline-block"
          >
            🎥 Watch Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Artisans;
