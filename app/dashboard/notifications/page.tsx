'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { Bell, Calendar, Users, MessageSquare, Gift, AlertCircle, CheckCircle, Clock, Trash2, BookMarked as MarkAsRead } from 'lucide-react';

// Mock notifications data
const notificationsData = [
  {
    id: 1,
    title: 'دعوة لحضور الاجتماع السنوي',
    message: 'تم دعوتك لحضور الاجتماع السنوي لعائلة الخضيري يوم الجمعة القادم في تمام الساعة 7 مساءً.',
    type: 'event',
    time: '2025-01-28T10:30:00',
    isRead: false,
    priority: 'high'
  },
  {
    id: 2,
    title: 'تحديث في شجرة العائلة',
    message: 'تم إضافة أفراد جدد إلى شجرة العائلة. يمكنك الآن استعراض التحديثات الجديدة.',
    type: 'update',
    time: '2025-01-27T14:15:00',
    isRead: false,
    priority: 'medium'
  },
  {
    id: 3,
    title: 'تهنئة بمناسبة الزواج',
    message: 'تهانينا الحارة للأخ فهد الخضيري بمناسبة زواجه المبارك. نتمنى له حياة سعيدة.',
    type: 'celebration',
    time: '2025-01-26T16:45:00',
    isRead: true,
    priority: 'low'
  },
  {
    id: 4,
    title: 'رد على طلب الدعم',
    message: 'تم الرد على طلب الدعم الخاص بك. يرجى مراجعة الرد في قسم طلبات الدعم.',
    type: 'support',
    time: '2025-01-25T09:20:00',
    isRead: true,
    priority: 'medium'
  },
  {
    id: 5,
    title: 'إعلان مهم من مجلس الأمناء',
    message: 'إعلان مهم من مجلس الأمناء حول التحديثات الجديدة في نظام العضوية.',
    type: 'announcement',
    time: '2025-01-24T11:00:00',
    isRead: true,
    priority: 'high'
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'event':
      return <Calendar className="w-5 h-5" />;
    case 'update':
      return <Bell className="w-5 h-5" />;
    case 'celebration':
      return <Gift className="w-5 h-5" />;
    case 'support':
      return <MessageSquare className="w-5 h-5" />;
    case 'announcement':
      return <AlertCircle className="w-5 h-5" />;
    default:
      return <Bell className="w-5 h-5" />;
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'event':
      return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300';
    case 'update':
      return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
    case 'celebration':
      return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300';
    case 'support':
      return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300';
    case 'announcement':
      return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
    default:
      return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case 'high':
      return <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded-full text-xs font-medium">عالية</span>;
    case 'medium':
      return <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-medium">متوسطة</span>;
    case 'low':
      return <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">منخفضة</span>;
    default:
      return null;
  }
};

const formatTime = (timeString: string) => {
  const date = new Date(timeString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'منذ قليل';
  } else if (diffInHours < 24) {
    return `منذ ${diffInHours} ساعة`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `منذ ${diffInDays} يوم`;
  }
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState('all'); // all, unread, read

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.isRead;
    if (filter === 'read') return notification.isRead;
    return true;
  });

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">الإشعارات</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {unreadCount > 0 ? `لديك ${unreadCount} إشعار غير مقروء` : 'جميع الإشعارات مقروءة'}
              </p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <Bell className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
        </AnimatedSection>

        {/* Filter and Actions */}
        <AnimatedSection delay={200}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      filter === 'all' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    الكل ({notifications.length})
                  </button>
                  <button
                    onClick={() => setFilter('unread')}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      filter === 'unread' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    غير مقروءة ({unreadCount})
                  </button>
                  <button
                    onClick={() => setFilter('read')}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      filter === 'read' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    مقروءة ({notifications.length - unreadCount})
                  </button>
                </div>
                
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors duration-300"
                  >
                    <CheckCircle className="w-4 h-4 ml-2" />
                    تحديد الكل كمقروء
                  </button>
                )}
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Notifications List */}
        <AnimatedSection delay={400}>
          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification, index) => (
                <AnimatedSection key={notification.id} delay={index * 100}>
                  <Card className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md ${
                    !notification.isRead ? 'border-r-4 border-r-blue-500' : ''
                  }`}>
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start flex-1">
                          <div className={`p-2 rounded-lg ml-4 ${getNotificationColor(notification.type)}`}>
                            {getNotificationIcon(notification.type)}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className={`font-semibold ${
                                !notification.isRead 
                                  ? 'text-gray-900 dark:text-gray-100' 
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}>
                                {notification.title}
                              </h3>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                              {getPriorityBadge(notification.priority)}
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Clock className="w-4 h-4 ml-1" />
                              {formatTime(notification.time)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {!notification.isRead && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors duration-300"
                              title="تحديد كمقروء"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                          
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors duration-300"
                            title="حذف الإشعار"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))
            ) : (
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="p-12 text-center">
                  <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-full w-fit mx-auto mb-4">
                    <Bell className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    لا توجد إشعارات
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {filter === 'unread' 
                      ? 'جميع الإشعارات مقروءة' 
                      : filter === 'read' 
                      ? 'لا توجد إشعارات مقروءة'
                      : 'لا توجد إشعارات متاحة'
                    }
                  </p>
                </div>
              </Card>
            )}
          </div>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}