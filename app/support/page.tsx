'use client';

import Navbar from '../../components/Navbar';
import ContactSection from '../sections/Contact';
import Footer from '../../components/Footer';

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gradient-to-bl from-gray-50 via-white to-gray-100 py-16">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              الدعم والمساعدة
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في أي استفسار أو طلب دعم. تواصل معنا وسنكون سعداء بخدمتك
            </p>
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}