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
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/images/family logo.webp" 
                  alt="شعار عائلة الخضيري" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Hide the broken img
                    e.currentTarget.style.display = 'none';
                    // Show fallback text
                    const sib = e.currentTarget.nextElementSibling;
                    if (sib instanceof HTMLElement) {
                      sib.style.display = 'block';
                    }
                  }}
                />
                <span 
                  className="text-gray-600 text-sm font-bold hidden"
                  style={{ display: 'none' }}
                >
                  الخضيري
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
                  className={`relative text-gray-600 hover:text-gray-900 transition-all duration-300 font-arabic-secondary font-medium px-2 py-2 text-lg ${
                    pathname === item.href 
                      ? 'text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-800 after:rounded-full' 
                      : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gray-400 hover:after:rounded-full hover:after:scale-x-0 hover:after:animate-pulse'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-gray-600 hover:text-gray-900 transition-all duration-300 font-arabic-secondary font-medium px-2 py-2 text-lg ${
                    pathname === item.href 
                      ? 'text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-800 after:rounded-full' 
                      : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gray-400 hover:after:rounded-full hover:after:scale-x-0 hover:after:animate-pulse'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Auth Buttons - Left Side */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <Link 
              href="/auth/login"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-arabic-secondary font-medium px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50"
            >
              تسجيل الدخول
            </Link>
            <Link 
              href="/auth/signup"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg font-arabic-secondary font-medium hover:bg-gray-700 transition-colors duration-300"
            >
              إنشاء حساب
            </Link>
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
                    className={`block w-full text-right px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary font-medium text-lg ${
                      pathname === item.href ? 'text-gray-900 font-semibold bg-gray-50' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-right px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary font-medium text-lg ${
                      pathname === item.href ? 'text-gray-900 font-semibold bg-gray-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <Link 
                  href="/auth/login"
                  className="block w-full text-right px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-300 font-arabic-secondary font-medium border border-gray-300 rounded-lg mx-4 hover:border-gray-400"
                >
                  تسجيل الدخول
                </Link>
                <Link 
                  href="/auth/signup"
                  className="block w-full text-right px-4 py-3 bg-gray-800 text-white rounded-lg font-arabic-secondary font-medium hover:bg-gray-700 transition-colors duration-300 mx-4"
                >
                  إنشاء حساب
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}