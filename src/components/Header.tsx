
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-sage-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-clay-800">CLAYFUL HEARTS</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Home</a>
            <a href="#collections" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Collections</a>
            <a href="#artisans" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Artisans</a>
            <a href="#about" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">About</a>
            <a href="#contact" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Contact</a>
          </nav>

          {/* Search, Cart, and User */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-clay-700 hover:text-terracotta-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-clay-700 hover:text-terracotta-500 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-2">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/account')}>
                    <User className="w-4 h-4 mr-2" />
                    My Account
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={() => navigate('/auth')} 
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
              >
                Sign In
              </Button>
            )}
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-clay-700 block transition-all duration-300 ease-out h-0.5 w-6 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-clay-700 block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-clay-700 block transition-all duration-300 ease-out h-0.5 w-6 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sage-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Home</a>
              <a href="#collections" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Collections</a>
              <a href="#artisans" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Artisans</a>
              <a href="#about" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">About</a>
              <a href="#contact" className="text-clay-700 hover:text-terracotta-500 transition-colors font-medium">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
