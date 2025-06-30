'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TreePine } from 'lucide-react';

export default function FamilyTreePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">شجرة العائلة</h1>
          <p className="text-gray-600 mt-2">
            استكشف شجرة عائلة الخضيري وتعرف على الأنساب والروابط العائلية
          </p>
        </div>

        <Card className="min-h-[600px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreePine className="w-6 h-6" />
              شجرة عائلة الخضيري
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <TreePine className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  شجرة العائلة قيد التطوير
                </h3>
                <p className="text-gray-500">
                  سيتم عرض شجرة العائلة التفاعلية هنا قريباً
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}