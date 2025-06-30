'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Save,
  Edit3,
  Check,
  X
} from 'lucide-react';

export default function SettingsPage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'محمد الخضيري',
    email: 'mohammed@khudairi.com',
    phone: '+966 50 123 4567'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setProfileData({
          name: user.name || 'محمد الخضيري',
          email: user.email || 'mohammed@khudairi.com',
          phone: user.phone || '+966 50 123 4567'
        });
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }

    // Load theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const handleSaveProfile = () => {
    // Save profile data to localStorage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const updatedUserData = { ...userData, ...profileData };
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    
    setIsEditingProfile(false);
    
    // Show success message
    alert('تم حفظ البيانات بنجاح!');
  };

  const handleCancelEdit = () => {
    // Reset to original data
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setProfileData({
          name: user.name || 'محمد الخضيري',
          email: user.email || 'mohammed@khudairi.com',
          phone: user.phone || '+966 50 123 4567'
        });
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }
    setIsEditingProfile(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <AnimatedSection>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">الإعدادات</h1>
            <p className="text-gray-600 dark:text-gray-400">إدارة إعدادات حسابك وتفضيلاتك الشخصية</p>
          </div>
        </AnimatedSection>

        {/* Profile Settings */}
        <AnimatedSection delay={200}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">الملف الشخصي</h2>
                </div>
                {!isEditingProfile ? (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Edit3 className="w-4 h-4 ml-2" />
                    تعديل
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      <Check className="w-4 h-4 ml-2" />
                      حفظ
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <X className="w-4 h-4 ml-2" />
                      إلغاء
                    </button>
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    disabled={!isEditingProfile}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ${
                      isEditingProfile 
                        ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700' 
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
                    }`}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditingProfile}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ${
                      isEditingProfile 
                        ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700' 
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
                    }`}
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditingProfile}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ${
                      isEditingProfile 
                        ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700' 
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
                    }`}
                    dir="rtl"
                  />
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Notification Settings */}
        <AnimatedSection delay={400}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">الإشعارات</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">إشعارات البريد الإلكتروني</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">تلقي الإشعارات عبر البريد الإلكتروني</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.email}
                      onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">الإشعارات الفورية</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">تلقي الإشعارات الفورية في المتصفح</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.push}
                      onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">رسائل SMS</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">تلقي الإشعارات عبر الرسائل النصية</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.sms}
                      onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Privacy & Security */}
        <AnimatedSection delay={600}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">الخصوصية والأمان</h2>
              </div>
              
              <div className="space-y-4">
                <button className="w-full text-right px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200">
                  تغيير كلمة المرور
                </button>
                
                <button className="w-full text-right px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200">
                  إعدادات الخصوصية
                </button>
                
                <button className="w-full text-right px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-gray-200">
                  تسجيل الخروج من جميع الأجهزة
                </button>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Appearance & Language */}
        <AnimatedSection delay={800}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">المظهر واللغة</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    المظهر
                  </label>
                  <div className="flex space-x-reverse space-x-4">
                    <button
                      onClick={() => {
                        setTheme('light');
                        localStorage.setItem('theme', 'light');
                        document.documentElement.classList.remove('dark');
                      }}
                      className={`flex items-center px-4 py-3 rounded-lg border transition-colors duration-300 ${
                        theme === 'light' 
                          ? 'bg-blue-50 dark:bg-blue-900 border-blue-300 dark:border-blue-600 text-blue-800 dark:text-blue-200' 
                          : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Sun className="w-5 h-5 ml-2" />
                      فاتح
                    </button>
                    <button
                      onClick={() => {
                        setTheme('dark');
                        localStorage.setItem('theme', 'dark');
                        document.documentElement.classList.add('dark');
                      }}
                      className={`flex items-center px-4 py-3 rounded-lg border transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'bg-blue-50 dark:bg-blue-900 border-blue-300 dark:border-blue-600 text-blue-800 dark:text-blue-200' 
                          : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Moon className="w-5 h-5 ml-2" />
                      داكن
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    اللغة
                  </label>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">العربية</span>
                      <span className="mr-auto text-gray-500 dark:text-gray-400 text-sm">(اللغة الوحيدة المتاحة)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}