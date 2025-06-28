'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

// Mock data for news
const newsData = [
  {
    id: 1,
    title: 'اجتماع العائلة السنوي 2025',
    content: 'يسر صندوق عائلة الخضيري دعوتكم لحضور الاجتماع السنوي للعائلة والذي سيقام في الرياض يوم الجمعة القادم.',
    date: '2025-02-15',
    time: '19:00',
    author: 'إدارة الصندوق',
    category: 'إعلان',
    isNew: true
  },
  {
    id: 2,
    title: 'تحديث نظام التسجيل',
    content: 'تم تحديث نظام التسجيل في الموقع ليشمل ميزات جديدة لتسهيل التواصل بين أفراد العائلة.',
    date: '2025-01-28',
    time: '14:30',
    author: 'الفريق التقني',
    category: 'تحديث',
    isNew: false
  },
  {
    id: 3,
    title: 'مبادرة دعم الطلاب',
    content: 'إطلاق مبادرة جديدة لدعم طلاب العائلة في التعليم العالي. للمزيد من التفاصيل يرجى التواصل مع لجنة التعليم.',
    date: '2025-01-25',
    time: '10:15',
    author: 'لجنة التعليم',
    category: 'مبادرة',
    isNew: false
  }
];

export default function NewsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">آخر الأخبار</h1>
          <p className="text-gray-600 mt-2">
            تابع آخر الأخبار والإعلانات المهمة من صندوق عائلة الخضيري
          </p>
        </div>

        <div className="grid gap-6">
          {newsData.map((news) => (
            <Card key={news.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{news.title}</CardTitle>
                      {news.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          جديد
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{news.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{news.author}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{news.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{news.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {newsData.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500">لا توجد أخبار متاحة حالياً</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}