'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';
import { familyHistory } from '@/lib/data';

export default function HistorySection() {
  return (
    <SectionContainer id="history" background="pattern">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            تاريخ العائلة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            محطات مهمة في تاريخ عائلة الخضيري وإنجازاتها عبر السنين
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {familyHistory.map((event, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 ml-6">
                    <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                      {event.year}
                    </div>
                  </div>
                  <Card className="flex-1" hover>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
