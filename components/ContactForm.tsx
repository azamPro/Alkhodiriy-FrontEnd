'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">تواصل معنا</h3>
          <p className="text-gray-600 leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في التواصل مع عائلة الخضيري. 
            لا تترددوا في التواصل معنا عبر الوسائل التالية.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-lg ml-4">
              <Mail className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">البريد الإلكتروني</h4>
              <p className="text-gray-600">info@khudairi-family.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-lg ml-4">
              <Phone className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">الهاتف</h4>
              <p className="text-gray-600">+966 11 123 4567</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-lg ml-4">
              <MapPin className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">الموقع</h4>
              <p className="text-gray-600">المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              الاسم الكامل *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 text-right ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="أدخل اسمك الكامل"
              dir="rtl"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 text-right">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              البريد الإلكتروني *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 text-right ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="أدخل بريدك الإلكتروني"
              dir="rtl"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 text-right"
              placeholder="أدخل رقم هاتفك"
              dir="rtl"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              الرسالة *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 resize-none text-right ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="اكتب رسالتك هنا..."
              dir="rtl"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1 text-right">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center"
          >
            <Send className="w-5 h-5 ml-2" />
            إرسال الرسالة
          </button>
        </form>
      </div>
    </div>
  );
}