'use client';

import { useEffect } from 'react';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import Activities from './sections/Activities';
import MembersSection from './sections/Members';
import StructureSection from './sections/Structure';
import HistorySection from './sections/History';
import FAQSection from './sections/FAQ';
import ContactSection from './sections/Contact';
import Footer from '../components/Footer';
import ComingSoon from './soon/page';


export default function Home() {

  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* <ComingSoon /> */}
      
      
    </main>
  );
}