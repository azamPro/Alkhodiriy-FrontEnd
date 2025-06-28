'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  Shield
} from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'محمد الخضيري',
    email: 'mohammed@khudairi.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    joinDate: '2024-01-15',
    bio: 'عضو فعال في عائلة الخضيري، مهتم بالحفاظ على التراث العائلي والمشاركة في الفعاليات.'
  });

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setProfileData(prev => ({
          ...prev,
          name: user.name || prev.name,
          email: user.email || prev.email,
          phone: user.phone || prev.phone
        }));
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }
  }, []);

  const handleSave = () => {
    // Save profile data to localStorage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const updatedUserData = { ...userData, ...profileData };
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    
    setIsEditing(false);
    alert('تم حفظ البيانات بنجاح!');
  };

  const handleCancel = () => {
    // Reset to original data
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setProfileData(prev => ({
          ...prev,
          name: user.name || prev.name,
          email: user.email || prev.email,
          phone: user.phone || prev.phone
        }));
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }
    setIsEditing(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <AnimatedSection>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">الملف الشخصي</h1>
            <p className="text-gray-600 dark:text-gray-400">إدارة معلوماتك الشخصية وإعدادات حسابك</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <AnimatedSection delay={200}>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 lg:col-span-1">
              <div className="p-6 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto">
                    <User className="w-12 h-12 text-gray-600 dark:text-gray-300" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {profileData.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  عضو في عائلة الخضيري
                </p>
                
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                  <Calendar className="w-4 h-4 ml-1" />
                  انضم في {new Date(profileData.joinDate).toLocaleDateString('ar-SA')}
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">نبذة شخصية</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {profileData.bio}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* Profile Information */}
          <AnimatedSection delay={400}>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 lg:col-span-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">المعلومات الشخصية</h3>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300"
                    >
                      <Edit3 className="w-4 h-4 ml-2" />
                      تعديل
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                      >
                        <Save className="w-4 h-4 ml-2" />
                        حفظ
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <X className="w-4 h-4 ml-2" />
                        إلغاء
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4 ml-2" />
                      الاسم الكامل
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:text-gray-200"
                        dir="rtl"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
                        {profileData.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4 ml-2" />
                      البريد الإلكتروني
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:text-gray-200"
                        dir="rtl"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
                        {profileData.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Phone className="w-4 h-4 ml-2" />
                      رقم الهاتف
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:text-gray-200"
                        dir="rtl"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
                        {profileData.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MapPin className="w-4 h-4 ml-2" />
                      الموقع
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right dark:bg-gray-700 dark:text-gray-200"
                        dir="rtl"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
                        {profileData.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    نبذة شخصية
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none text-right dark:bg-gray-700 dark:text-gray-200"
                      dir="rtl"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                      {profileData.bio}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>

        {/* Security Section */}
        <AnimatedSection delay={600}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">الأمان والخصوصية</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-right">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">تغيير كلمة المرور</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">تحديث كلمة المرور الخاصة بك</p>
                </button>

                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-right">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">إعدادات الخصوصية</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">إدارة من يمكنه رؤية معلوماتك</p>
                </button>

                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-right">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">سجل النشاط</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">عرض سجل تسجيل الدخول والأنشطة</p>
                </button>

                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-right">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">تحميل البيانات</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">تحميل نسخة من بياناتك الشخصية</p>
                </button>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}