
import Header from '../components/Header';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Artisans from '../components/Artisans';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Collections />
      <Artisans />
      <Footer />
    </div>
  );
};

export default Index;
