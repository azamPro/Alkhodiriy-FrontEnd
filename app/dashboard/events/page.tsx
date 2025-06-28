'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

// Mock data for events
const eventsData = [
  {
    id: 1,
    title: 'الاجتماع السنوي للعائلة',
    description: 'اجتماع سنوي لجميع أفراد عائلة الخضيري لمناقشة الأمور المهمة والتخطيط للعام القادم.',
    date: '2025-03-15',
    time: '19:00',
    location: 'قاعة الملك فهد - الرياض',
    attendees: 150,
    status: 'قادم',
    category: 'اجتماع'
  },
  {
    id: 2,
    title: 'زفاف محمد الخضيري',
    description: 'دعوة لحضور حفل زفاف ابن عمنا محمد بن عبدالله الخضيري.',
    date: '2025-04-20',
    time: '20:30',
    location: 'قصر الأفراح - جدة',
    attendees: 300,
    status: 'قادم',
    category: 'زفاف'
  },
  {
    id: 3,
    title: 'ملتقى الشباب العائلي',
    description: 'ملتقى خاص بشباب العائلة لمناقشة المبادرات والمشاريع الشبابية.',
    date: '2025-02-28',
    time: '16:00',
    location: 'مركز الملك عبدالعزيز - الدمام',
    attendees: 80,
    status: 'قادم',
    category: 'ملتقى'
  },
  {
    id: 4,
    title: 'لقاء العائلة الشهري',
    description: 'لقاء شهري لأفراد العائلة في منطقة الرياض.',
    date: '2025-01-25',
    time: '18:00',
    location: 'استراحة العائلة - الرياض',
    attendees: 45,
    status: 'منتهي',
    category: 'لقاء'
  }
];

export default function EventsPage() {
  const upcomingEvents = eventsData.filter(event => event.status === 'قادم');
  const pastEvents = eventsData.filter(event => event.status === 'منتهي');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الفعاليات والأحداث</h1>
          <p className="text-gray-600 mt-2">
            تابع جميع فعاليات وأحداث عائلة الخضيري القادمة والسابقة
          </p>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">الفعاليات القادمة</h2>
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} مدعو</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <Badge className="bg-green-100 text-green-800">{event.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm">تأكيد الحضور</Button>
                    <Button variant="outline" size="sm">المزيد من التفاصيل</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">الفعاليات السابقة</h2>
          <div className="grid gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="opacity-75">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} حضر</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <Badge variant="secondary">{event.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {eventsData.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500">لا توجد فعاليات متاحة حالياً</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}