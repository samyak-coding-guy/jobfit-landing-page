
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-jobfit-blue">JobFit<span className="text-jobfit-purple">AI</span></span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="font-medium text-gray-600 hover:text-jobfit-blue transition-colors">Features</a>
          <a href="#how-it-works" className="font-medium text-gray-600 hover:text-jobfit-blue transition-colors">How It Works</a>
          <a href="#testimonials" className="font-medium text-gray-600 hover:text-jobfit-blue transition-colors">Testimonials</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="font-medium">Sign In</Button>
          <Button className="bg-jobfit-blue hover:bg-blue-700">Get Started</Button>
        </div>
        
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a href="#features" className="font-medium text-gray-600 hover:text-jobfit-blue transition-colors py-2">Features</a>
          <a href="#how-it-works" className="font-medium text-gray-600 hover:text-jobfit-blue transition-colors py-2">How It Works</a>
          <a href="#testimonials" className="font-medium text-gray-600 hover:text-jobfit-blue transition-colors py-2">Testimonials</a>
          <hr className="my-2 border-gray-200" />
          <Button variant="ghost" className="justify-center">Sign In</Button>
          <Button className="bg-jobfit-blue hover:bg-blue-700 w-full justify-center">Get Started</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
