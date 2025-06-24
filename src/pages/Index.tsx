
import Header from '../components/Header';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import ShoppingExperience from '../components/ShoppingExperience';
import Artisans from '../components/Artisans';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Collections />
      <ShoppingExperience />
      <Artisans />
      <Footer />
    </div>
  );
};

export default Index;
