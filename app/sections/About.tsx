'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';
import { Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <SectionContainer id="about" background="light">
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              من نحن
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              عائلة الخضيري هي إحدى العائلات العريقة التي تتميز بتاريخها الطويل وتراثها الغني، 
              وتسعى للحفاظ على قيمها الأصيلة وتقاليدها العربية الأصيلة.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نعمل على توثيق تاريخ العائلة وربط أفرادها في مختلف أنحاء العالم، 
              والحفاظ على الروابط الاجتماعية القوية التي تميز عائلتنا الكريمة.
            </p>
          </div>

          <Card className="bg-white shadow-lg border-0">
            <div className="text-center p-6">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون عائلة متماسكة ومترابطة تحافظ على تراثها وقيمها الأصيلة، 
                وتنقل هذا التراث العريق للأجيال القادمة بكل فخر واعتزاز.
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
