'use client';

import { useState } from 'react';
import { Menu, X, Home, Heart, Plus } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'الرئيسية',
      href: '#hero',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'الدعم',
      href: '#support',
      icon: <Heart className="w-5 h-5" />
    },
    {
      name: 'إنشاء بطاقة',
      href: '#create-card',
      icon: <Plus className="w-5 h-5" />
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 font-arabic-primary">
              عائلة الخضيري
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-reverse space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 font-arabic-secondary"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-reverse space-x-3 w-full text-right px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}