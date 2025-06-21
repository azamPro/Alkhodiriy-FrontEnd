'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';

export default function StructureSection() {
  return (
    <SectionContainer id="structure">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            الهيكل التنظيمي
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تنظيم عائلي يضمن التواصل الفعال والحفاظ على التراث العائلي
          </p>
        </div>

        <Card className="overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-gray-800 font-bold">المسؤولية</th>
                  <th className="py-4 px-6 text-gray-800 font-bold">الاسم</th>
                  <th className="py-4 px-6 text-gray-800 font-bold">الوصف</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">كبير العائلة</td>
                  <td className="py-4 px-6">عبدالله الخضيري</td>
                  <td className="py-4 px-6 text-gray-600">الإشراف العام على شؤون العائلة</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">أمين السر</td>
                  <td className="py-4 px-6">محمد الخضيري</td>
                  <td className="py-4 px-6 text-gray-600">توثيق الأحداث والمراسلات</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">أمين الصندوق</td>
                  <td className="py-4 px-6">فاطمة الخضيري</td>
                  <td className="py-4 px-6 text-gray-600">إدارة الشؤون المالية للعائلة</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">منسق الفعاليات</td>
                  <td className="py-4 px-6">نورا الخضيري</td>
                  <td className="py-4 px-6 text-gray-600">تنظيم التجمعات والمناسبات</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </AnimatedSection>
    </SectionContainer>
  );
}
