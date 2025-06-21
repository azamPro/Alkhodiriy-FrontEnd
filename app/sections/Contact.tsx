'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            تواصل معنا
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن سعداء بتواصلكم معنا ومشاركتكم في الحفاظ على تراث عائلة الخضيري
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <ContactForm />
        </Card>
      </AnimatedSection>
    </SectionContainer>
  );
}
