'use client';

import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { Users, Search, Filter, TreePine } from 'lucide-react';

export default function FamilyTreePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">شجرة العائلة</h1>
              <p className="text-gray-600">استعراض وتصفح أفراد عائلة الخضيري</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <TreePine className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection delay={200}>
          <Card>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="البحث عن فرد من العائلة..."
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    dir="rtl"
                  />
                </div>
                <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <Filter className="w-5 h-5 ml-2" />
                  تصفية
                </button>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Family Tree Content - Empty State */}
        <AnimatedSection delay={400}>
          <Card className="min-h-[600px]">
            <div className="p-8 flex flex-col items-center justify-center h-full text-center">
              <div className="bg-gray-100 p-8 rounded-full mb-6">
                <TreePine className="w-16 h-16 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">شجرة العائلة قيد التطوير</h2>
              <p className="text-gray-600 mb-8 max-w-md">
                نعمل حالياً على تطوير واجهة تفاعلية لعرض شجرة العائلة بشكل مرئي وسهل التصفح. 
                ستتمكن قريباً من استعراض جميع أفراد العائلة والروابط العائلية بينهم.
              </p>
              
              {/* Placeholder for future features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <h3 className="font-semibold text-gray-800 mb-2">البحث التفاعلي</h3>
                  <p className="text-gray-600 text-sm">البحث عن أفراد العائلة بالاسم أو الفرع</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <TreePine className="w-8 h-8 text-green-600 mb-3 mx-auto" />
                  <h3 className="font-semibold text-gray-800 mb-2">العرض المرئي</h3>
                  <p className="text-gray-600 text-sm">شجرة تفاعلية لعرض الروابط العائلية</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <Search className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
                  <h3 className="font-semibold text-gray-800 mb-2">التصفية المتقدمة</h3>
                  <p className="text-gray-600 text-sm">تصفية حسب الجيل والمنطقة والمهنة</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}