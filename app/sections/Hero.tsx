'use client';

import { ChevronDown, ArrowLeft } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-bl from-gray-50 via-white to-gray-100 bg-pattern relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/90 via-white/95 to-gray-100/90"></div>
      <div className="relative section-container flex items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-shadow">
            عائلة الخضيري
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            تراث عريق وأصالة متجذرة
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            نحن نفتخر بتراثنا العائلي العريق ونسعى للحفاظ على قيمنا وتقاليدنا 
            ونقلها للأجيال القادمة بكل فخر واعتزاز
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-primary flex items-center justify-center"
            >
              تعرف على العائلة
              <ArrowLeft className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
}