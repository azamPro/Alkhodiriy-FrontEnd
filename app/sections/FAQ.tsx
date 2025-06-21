'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';
import AccordionItem from '@/components/AccordionItem';
import { faqData } from '@/lib/data';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <SectionContainer id="faq" background="light">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            إجابات على أهم الأسئلة حول عائلة الخضيري وتاريخها
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="divide-y divide-gray-200">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  title={faq.question}
                  content={faq.answer}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
