'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Gift, 
  Plane,
  Search,
  Filter,
  Plus
} from 'lucide-react';

// Dummy events data
const eventsData = [
  {
    id: 1,
    title: 'حفل زفاف نورا الخضيري',
    description: 'ندعوكم لحضور حفل زفاف ابنتنا نورا بنت عبدالله الخضيري والاحتفال معنا بهذه المناسبة السعيدة',
    date: '2025-02-15',
    time: '19:00',
    location: 'قاعة الفخامة - الرياض',
    type: 'wedding',
    category: 'مناسبات اجتماعية',
    attendees: 250,
    rsvpRequired: true,
    organizer: 'عائلة عبدالله الخضيري',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'ملتقى الشباب العائلي السنوي',
    description: 'ملتقى خاص بشباب العائلة لمناقشة المبادرات والمشاريع المستقبلية وتعزيز التواصل بين الأجيال',
    date: '2025-02-08',
    time: '16:00',
    location: 'مركز الملك عبدالعزيز الثقافي - الظهران',
    type: 'meeting',
    category: 'اجتماعات',
    attendees: 80,
    rsvpRequired: true,
    organizer: 'لجنة الشباب',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'رحلة عائلية ترفيهية',
    description: 'رحلة عائلية إلى منتجع الدرعية للعائلات والأطفال مع أنشطة ترفيهية متنوعة',
    date: '2025-02-22',
    time: '09:00',
    location: 'منتجع الدرعية - الرياض',
    type: 'trip',
    category: 'رحلات',
    attendees: 120,
    rsvpRequired: true,
    organizer: 'لجنة الرحلات',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'حفل تخرج أحمد الخضيري',
    description: 'احتفال بتخرج أحمد بن سعد الخضيري من كلية الطب بجامعة الملك سعود',
    date: '2025-03-05',
    time: '18:00',
    location: 'فندق الفيصلية - الرياض',
    type: 'graduation',
    category: 'مناسبات اجتماعية',
    attendees: 150,
    rsvpRequired: true,
    organizer: 'عائلة سعد الخضيري',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'اجتماع مجلس الأمناء الشهري',
    description: 'اجتماع دوري لمجلس أمناء صندوق عائلة الخضيري لمناقشة الأنشطة والمبادرات',
    date: '2025-02-01',
    time: '20:00',
    location: 'مكتب الصندوق - بريدة',
    type: 'meeting',
    category: 'اجتماعات إدارية',
    attendees: 15,
    rsvpRequired: false,
    organizer: 'مجلس الأمناء',
    status: 'completed'
  },
  {
    id: 6,
    title: 'ورشة عمل التراث العائلي',
    description: 'ورشة عمل لتوثيق التراث العائلي وجمع القصص والذكريات من كبار السن',
    date: '2025-03-12',
    time: '15:00',
    location: 'مركز التراث - القصيم',
    type: 'workshop',
    category: 'تراث وثقافة',
    attendees: 40,
    rsvpRequired: true,
    organizer: 'لجنة التراث',
    status: 'upcoming'
  }
];

const getEventIcon = (type: string) => {
  switch (type) {
    case 'wedding':
      return <Heart className="w-5 h-5" />;
    case 'meeting':
      return <Users className="w-5 h-5" />;
    case 'trip':
      return <Plane className="w-5 h-5" />;
    case 'graduation':
      return <Gift className="w-5 h-5" />;
    case 'workshop':
      return <Calendar className="w-5 h-5" />;
    default:
      return <Calendar className="w-5 h-5" />;
  }
};

const getEventColor = (type: string) => {
  switch (type) {
    case 'wedding':
      return 'bg-pink-100 text-pink-800';
    case 'meeting':
      return 'bg-blue-100 text-blue-800';
    case 'trip':
      return 'bg-green-100 text-green-800';
    case 'graduation':
      return 'bg-purple-100 text-purple-800';
    case 'workshop':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming':
      return 'bg-green-100 text-green-800';
    case 'completed':
      return 'bg-gray-100 text-gray-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function EventsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.status === selectedFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">الفعاليات والمناسبات</h1>
              <p className="text-gray-600">تصفح جميع فعاليات ومناسبات عائلة الخضيري</p>
            </div>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center">
              <Plus className="w-5 h-5 ml-2" />
              إضافة فعالية
            </button>
          </div>
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection delay={200}>
          <Card>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="البحث في الفعاليات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    dir="rtl"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    dir="rtl"
                  >
                    <option value="all">جميع الفعاليات</option>
                    <option value="upcoming">القادمة</option>
                    <option value="completed">المكتملة</option>
                    <option value="cancelled">الملغية</option>
                  </select>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600">{eventsData.filter(e => e.status === 'upcoming').length}</p>
                  <p className="text-blue-800 text-sm">فعاليات قادمة</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">{eventsData.filter(e => e.status === 'completed').length}</p>
                  <p className="text-green-800 text-sm">فعاليات مكتملة</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-purple-600">{eventsData.reduce((sum, e) => sum + e.attendees, 0)}</p>
                  <p className="text-purple-800 text-sm">إجمالي المشاركين</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-orange-600">{eventsData.filter(e => e.rsvpRequired).length}</p>
                  <p className="text-orange-800 text-sm">تتطلب تأكيد حضور</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Events List */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    {/* Event Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ml-3 ${getEventColor(event.type)}`}>
                          {getEventIcon(event.type)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{event.title}</h3>
                          <p className="text-gray-600 text-sm">{event.category}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status === 'upcoming' ? 'قادمة' : event.status === 'completed' ? 'مكتملة' : 'ملغية'}
                      </span>
                    </div>

                    {/* Event Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 ml-2" />
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString('ar-SA', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 ml-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 ml-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 ml-2" />
                        <span className="text-sm">{event.attendees} مشارك متوقع</span>
                      </div>
                    </div>

                    {/* Event Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="text-gray-500 text-sm">منظم بواسطة: {event.organizer}</p>
                      <div className="flex gap-2">
                        {event.rsvpRequired && event.status === 'upcoming' && (
                          <>
                            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                              سأحضر
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                              لن أحضر
                            </button>
                          </>
                        )}
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
                          التفاصيل
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <AnimatedSection delay={400}>
            <Card>
              <div className="p-12 text-center">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">لا توجد فعاليات</h3>
                <p className="text-gray-600">لم يتم العثور على فعاليات تطابق معايير البحث المحددة</p>
              </div>
            </Card>
          </AnimatedSection>
        )}
      </div>
    </DashboardLayout>
  );
}