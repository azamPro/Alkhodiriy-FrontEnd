'use client';

import { useState } from 'react';
import { User, Bell, Shield, Globe, Moon, Sun } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ar');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">الإعدادات</h1>
        <p className="text-gray-600">إدارة إعدادات حسابك وتفضيلاتك</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center mb-4">
          <User className="w-5 h-5 text-gray-600 ml-2" />
          <h2 className="text-lg font-semibold text-gray-900">الملف الشخصي</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              الاسم الكامل
            </label>
            <input
              type="text"
              defaultValue="محمد الخضيري"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-right"
              dir="rtl"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              defaultValue="mohammed@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-right"
              dir="rtl"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              defaultValue="+966 50 123 4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-right"
              dir="rtl"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center mb-4">
          <Bell className="w-5 h-5 text-gray-600 ml-2" />
          <h2 className="text-lg font-semibold text-gray-900">الإشعارات</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">إشعارات البريد الإلكتروني</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-700">الإشعارات الفورية</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-700">رسائل SMS</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center mb-4">
          <Shield className="w-5 h-5 text-gray-600 ml-2" />
          <h2 className="text-lg font-semibold text-gray-900">الخصوصية والأمان</h2>
        </div>
        
        <div className="space-y-4">
          <button className="w-full text-right px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            تغيير كلمة المرور
          </button>
          
          <button className="w-full text-right px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            إعدادات الخصوصية
          </button>
          
          <button className="w-full text-right px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            تسجيل الخروج من جميع الأجهزة
          </button>
        </div>
      </div>

      {/* Appearance & Language */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center mb-4">
          <Globe className="w-5 h-5 text-gray-600 ml-2" />
          <h2 className="text-lg font-semibold text-gray-900">المظهر واللغة</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              المظهر
            </label>
            <div className="flex space-x-reverse space-x-4">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center px-4 py-2 rounded-md border ${
                  theme === 'light' 
                    ? 'bg-gray-100 border-gray-400' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Sun className="w-4 h-4 ml-2" />
                فاتح
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center px-4 py-2 rounded-md border ${
                  theme === 'dark' 
                    ? 'bg-gray-100 border-gray-400' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Moon className="w-4 h-4 ml-2" />
                داكن
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              اللغة
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-right"
              dir="rtl"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
          حفظ التغييرات
        </button>
      </div>
    </div>
  );
}