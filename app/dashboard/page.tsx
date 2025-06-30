'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bell, 
  Calendar, 
  Users, 
  MessageSquare, 
  ChevronRight, 
  Clock,
  MapPin,
  Heart,
  Star,
  Gift
} from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';

// Dummy data for news and invitations
const latestNews = [
  {
    id: 1,
    title: 'إعلان عن اللقاء السنوي لعائلة الخضيري 2025',
    content: 'يسر مجلس أمناء صندوق عائلة الخضيري دعوتكم لحضور اللقاء السنوي الذي سيقام في مدينة الرياض...',
    date: '2025-01-28',
    type: 'announcement',
    priority: 'high',
    author: 'مجلس الأمناء'
  },
  {
    id: 2,
    title: 'تهنئة بمناسبة زواج المهندس فهد الخضيري',
    content: 'نتقدم بأحر التهاني والتبريكات للمهندس فهد بن محمد الخضيري بمناسبة زواجه المبارك...',
    date: '2025-01-25',
    type: 'celebration',
    priority: 'medium',
    author: 'لجنة المناسبات'
  },
  {
    id: 3,
    title: 'إطلاق منصة التواصل الرقمية للعائلة',
    content: 'تم إطلاق المنصة الرقمية الجديدة لتسهيل التواصل بين أفراد العائلة ومشاركة الأخبار والفعاليات...',
    date: '2025-01-20',
    type: 'update',
    priority: 'medium',
    author: 'الفريق التقني'
  }
];

const upcomingInvitations = [
  {
    id: 1,
    title: 'حفل زفاف نورا الخضيري',
    description: 'ندعوكم لحضور حفل زفاف ابنتنا نورا بنت عبدالله الخضيري',
    date: '2025-02-15',
    time: '19:00',
    location: 'قاعة الفخامة - الرياض',
    type: 'wedding',
    rsvpRequired: true
  },
  {
    id: 2,
    title: 'ملتقى الشباب العائلي',
    description: 'ملتقى خاص بشباب العائلة لمناقشة المبادرات والمشاريع المستقبلية',
    date: '2025-02-08',
    time: '16:00',
    location: 'مركز الملك عبدالعزيز الثقافي',
    type: 'meeting',
    rsvpRequired: true
  },
  {
    id: 3,
    title: 'رحلة عائلية ترفيهية',
    description: 'رحلة عائلية إلى منتجع الدرعية للعائلات والأطفال',
    date: '2025-02-22',
    time: '09:00',
    location: 'منتجع الدرعية',
    type: 'trip',
    rsvpRequired: true
  }
];

const quickStats = [
  {
    title: 'أفراد العائلة',
    value: '1,247',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-blue-500'
  },
  {
    title: 'الفعاليات القادمة',
    value: '8',
    icon: <Calendar className="w-6 h-6" />,
    color: 'bg-green-500'
  },
  {
    title: 'الإشعارات الجديدة',
    value: '12',
    icon: <Bell className="w-6 h-6" />,
    color: 'bg-orange-500'
  },
  {
    title: 'الطلبات المعلقة',
    value: '5',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'bg-purple-500'
  }
];

const getNewsIcon = (type: string) => {
  switch (type) {
    case 'announcement':
      return <Bell className="w-5 h-5" />;
    case 'celebration':
      return <Gift className="w-5 h-5" />;
    case 'update':
      return <Star className="w-5 h-5" />;
    default:
      return <Bell className="w-5 h-5" />;
  }
};

const getInvitationIcon = (type: string) => {
  switch (type) {
    case 'wedding':
      return <Heart className="w-5 h-5" />;
    case 'meeting':
      return <Users className="w-5 h-5" />;
    case 'trip':
      return <MapPin className="w-5 h-5" />;
    default:
      return <Calendar className="w-5 h-5" />;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function DashboardHome() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">مرحباً بك في منصة عائلة الخضيري</h1>
                <p className="text-gray-200 text-lg">
                  {currentTime.toLocaleDateString('ar-SA', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">
                  {currentTime.toLocaleTimeString('ar-SA', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
                <p className="text-gray-200">التوقيت المحلي</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Stats */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} text-white p-3 rounded-lg ml-4`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-600">{stat.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest News */}
          <AnimatedSection delay={400}>
            <Card className="h-fit">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">آخر الأخبار</h2>
                  <Link 
                    href="/dashboard/news" 
                    className="text-gray-600 hover:text-gray-800 flex items-center text-sm"
                  >
                    عرض الكل
                    <ChevronRight className="w-4 h-4 mr-1" />
                  </Link>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {latestNews.map((news) => (
                  <div key={news.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <div className="text-gray-600 ml-2">
                          {getNewsIcon(news.type)}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(news.priority)}`}>
                          {news.priority === 'high' ? 'عاجل' : news.priority === 'medium' ? 'مهم' : 'عادي'}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 ml-1" />
                        {new Date(news.date).toLocaleDateString('ar-SA')}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{news.content}</p>
                    <p className="text-gray-500 text-xs mt-2">بواسطة: {news.author}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Upcoming Invitations */}
          <AnimatedSection delay={600}>
            <Card className="h-fit">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">الدعوات القادمة</h2>
                  <Link 
                    href="/dashboard/events" 
                    className="text-gray-600 hover:text-gray-800 flex items-center text-sm"
                  >
                    عرض الكل
                    <ChevronRight className="w-4 h-4 mr-1" />
                  </Link>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {upcomingInvitations.map((invitation) => (
                  <div key={invitation.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="text-gray-600 ml-2">
                          {getInvitationIcon(invitation.type)}
                        </div>
                        <h3 className="font-semibold text-gray-800">{invitation.title}</h3>
                      </div>
                      {invitation.rsvpRequired && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          يتطلب تأكيد الحضور
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{invitation.description}</p>
                    <div className="space-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1" />
                        {new Date(invitation.date).toLocaleDateString('ar-SA')} - {invitation.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 ml-1" />
                        {invitation.location}
                      </div>
                    </div>
                    {invitation.rsvpRequired && (
                      <div className="mt-3 flex gap-2">
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                          سأحضر
                        </button>
                        <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                          لن أحضر
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Quick Actions */}
        <AnimatedSection delay={800}>
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">الإجراءات السريعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  href="/dashboard/family-tree"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-gray-300"
                >
                  <Users className="w-8 h-8 text-blue-600 ml-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">شجرة العائلة</h3>
                    <p className="text-gray-600 text-sm">استعراض أفراد العائلة</p>
                  </div>
                </Link>

                <Link 
                  href="/dashboard/events"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-gray-300"
                >
                  <Calendar className="w-8 h-8 text-green-600 ml-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">الفعاليات</h3>
                    <p className="text-gray-600 text-sm">تصفح الفعاليات القادمة</p>
                  </div>
                </Link>

                <Link 
                  href="/dashboard/support"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-gray-300"
                >
                  <MessageSquare className="w-8 h-8 text-orange-600 ml-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">طلب دعم</h3>
                    <p className="text-gray-600 text-sm">إرسال طلب مساعدة</p>
                  </div>
                </Link>

                <Link 
                  href="/dashboard/profile"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-gray-300"
                >
                  <Users className="w-8 h-8 text-purple-600 ml-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">الملف الشخصي</h3>
                    <p className="text-gray-600 text-sm">تحديث بياناتك</p>
                  </div>
                </Link>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}