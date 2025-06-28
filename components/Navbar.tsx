'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: 'الرئيسية',
      href: '/',
      isExternal: false
    },
    {
      name: 'الدعم',
      href: '/support',
      isExternal: false
    },
    {
      name: 'إنشاء بطاقة',
      href: '#create-card',
      isExternal: true
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isExternal) {
      scrollToSection(item.href);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Right Side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <img 
                  src="/logo-placeholder.png" 
                  alt="شعار العائلة" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                />
                <span 
                  className="text-gray-600 text-sm font-bold hidden"
                  style={{ display: 'none' }}
                >
                  شعار
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              item.isExternal ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-gray-600 hover:text-gray-800 transition-colors duration-300 font-arabic-secondary font-medium px-4 py-2 rounded-lg hover:bg-gray-50 ${
                    pathname === item.href ? 'text-gray-800 bg-gray-100' : ''
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`text-gray-600 hover:text-gray-800 transition-colors duration-300 font-arabic-secondary font-medium px-4 py-2 rounded-lg hover:bg-gray-50 ${
                    pathname === item.href ? 'text-gray-800 bg-gray-100' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Auth Buttons - Left Side */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <button className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-arabic-secondary font-medium px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50">
              تسجيل الدخول
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-arabic-secondary font-medium hover:bg-gray-700 transition-colors duration-300">
              إنشاء حساب
            </button>
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
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                item.isExternal ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-right px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary font-medium ${
                      pathname === item.href ? 'text-gray-800 bg-gray-100' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-right px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary font-medium ${
                      pathname === item.href ? 'text-gray-800 bg-gray-100' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <button className="block w-full text-right px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary font-medium border border-gray-300 rounded-lg mx-4 hover:border-gray-400">
                  تسجيل الدخول
                </button>
                <button className="block w-full text-right px-4 py-3 bg-gray-800 text-white rounded-lg font-arabic-secondary font-medium hover:bg-gray-700 transition-colors duration-300 mx-4">
                  إنشاء حساب
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}