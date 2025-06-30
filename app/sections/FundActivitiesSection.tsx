'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';

export default function FundActivitiesSection() {
  const activities = [
    'تعزيز صلة الرحم من خلال اللقاءات والاجتماعات والتواصل.',
    'بث روح التكافل بين أفراد الأسرة.',
    'التآلف والرحمة بين أفراد العائلة.',
    'إصلاح ذات البين.',
    'التعاون على البر والتقوى من خلال البرامج والمسابقات واللقاءات التوعوية.',
    'المساهمة في تنظيم أوجه الإحسان بين أفراد العائلة من خلال تبني مبادرات وبرامج لسد احتياج أبناء الأسرة.',
    'المساهمة في تعليم وتدريب وتطوير أفراد العائلة.',
  ];

  return (
    <SectionContainer id="fund-activities" background="light">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            أعمال الصندوق
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تندرج أعمال الصندوق تحت البنود التالية:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <Card
              key={index}
              hover
              className="flex items-center justify-center text-center h-full min-h-[150px]"
            >
              <p className="text-gray-700 text-lg leading-relaxed px-4">{item}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
