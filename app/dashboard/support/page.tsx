'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  MessageSquare, 
  Send, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  User,
  Mail,
  Phone
} from 'lucide-react';

// Support request types
const supportTypes = [
  { value: 'technical', label: 'دعم تقني', description: 'مشاكل في الموقع أو التطبيق' },
  { value: 'events', label: 'الفعاليات والمناسبات', description: 'استفسارات حول الفعاليات أو تنظيم مناسبة' },
  { value: 'family', label: 'شؤون عائلية', description: 'استفسارات عامة حول العائلة والأنساب' },
  { value: 'financial', label: 'الدعم المالي', description: 'طلبات المساعدة المالية والدعم' },
  { value: 'membership', label: 'العضوية والانتساب', description: 'طلبات الانضمام وتحديث البيانات' },
  { value: 'suggestions', label: 'اقتراحات وملاحظات', description: 'اقتراحات لتطوير الخدمات' },
  { value: 'complaints', label: 'شكاوى', description: 'تقديم شكوى أو ملاحظة سلبية' },
  { value: 'other', label: 'أخرى', description: 'استفسارات أخرى غير مصنفة' }
];

// Priority levels
const priorityLevels = [
  { value: 'low', label: 'منخفضة', color: 'text-green-600' },
  { value: 'medium', label: 'متوسطة', color: 'text-yellow-600' },
  { value: 'high', label: 'عالية', color: 'text-red-600' },
  { value: 'urgent', label: 'عاجلة', color: 'text-red-800' }
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    priority: 'medium',
    description: '',
    contactMethod: 'email',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'عنوان الطلب مطلوب';
    }

    if (!formData.type) {
      newErrors.type = 'نوع الطلب مطلوب';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'وصف الطلب مطلوب';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'وصف الطلب يجب أن يكون 10 أحرف على الأقل';
    }

    if (formData.contactMethod === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب عند اختيار التواصل عبر الهاتف';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Support request submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit support request:', error);
      setErrors({ general: 'فشل في إرسال الطلب. حاول مرة أخرى.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      type: '',
      priority: 'medium',
      description: '',
      contactMethod: 'email',
      phone: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <Card>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  تم إرسال طلبك بنجاح
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  شكراً لك على تواصلك معنا. تم استلام طلبك وسيتم الرد عليك في أقرب وقت ممكن.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 font-medium mb-2">تفاصيل الطلب:</p>
                  <div className="text-right space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">العنوان:</span> {formData.title}</p>
                    <p><span className="font-medium">النوع:</span> {supportTypes.find(t => t.value === formData.type)?.label}</p>
                    <p><span className="font-medium">الأولوية:</span> {priorityLevels.find(p => p.value === formData.priority)?.label}</p>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-8">
                  رقم الطلب: #SR{Date.now().toString().slice(-6)}
                </p>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={resetForm}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    إرسال طلب جديد
                  </button>
                  <button
                    onClick={() => window.location.href = '/dashboard'}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    العودة للرئيسية
                  </button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">طلب الدعم والمساعدة</h1>
            <p className="text-gray-600">نحن هنا لمساعدتك. اختر نوع الطلب واكتب استفسارك وسنتواصل معك قريباً</p>
          </div>
        </AnimatedSection>

        {/* Support Types Overview */}
        <AnimatedSection delay={200}>
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">أنواع الدعم المتاحة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {supportTypes.slice(0, 4).map((type) => (
                  <div key={type.value} className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">{type.label}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Support Request Form */}
        <AnimatedSection delay={400}>
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">إرسال طلب دعم</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.general && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-right">
                    {errors.general}
                  </div>
                )}

                {/* Request Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    عنوان الطلب *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="اكتب عنواناً مختصراً لطلبك"
                    dir="rtl"
                  />
                  {errors.title && <p className="text-red-500 text-sm mt-1 text-right">{errors.title}</p>}
                </div>

                {/* Request Type */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    نوع الطلب *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right ${
                      errors.type ? 'border-red-500' : 'border-gray-300'
                    }`}
                    dir="rtl"
                  >
                    <option value="">اختر نوع الطلب</option>
                    {supportTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label} - {type.description}
                      </option>
                    ))}
                  </select>
                  {errors.type && <p className="text-red-500 text-sm mt-1 text-right">{errors.type}</p>}
                </div>

                {/* Priority Level */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    مستوى الأولوية
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right"
                    dir="rtl"
                  >
                    {priorityLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    طريقة التواصل المفضلة
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleChange}
                        className="ml-2"
                      />
                      <Mail className="w-4 h-4 ml-1" />
                      البريد الإلكتروني
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleChange}
                        className="ml-2"
                      />
                      <Phone className="w-4 h-4 ml-1" />
                      الهاتف
                    </label>
                  </div>
                </div>

                {/* Phone Number (if phone contact selected) */}
                {formData.contactMethod === 'phone' && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-right ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="أدخل رقم هاتفك"
                      dir="rtl"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1 text-right">{errors.phone}</p>}
                  </div>
                )}

                {/* Request Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    وصف الطلب *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none text-right ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="اكتب تفاصيل طلبك أو استفسارك بوضوح..."
                    dir="rtl"
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1 text-right">{errors.description}</p>}
                  <p className="text-gray-500 text-sm mt-1 text-right">
                    {formData.description.length}/500 حرف
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 ml-2 animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 ml-2" />
                        إرسال الطلب
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    إعادة تعيين
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection delay={600}>
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">معلومات التواصل</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 text-sm">support@khudairi-family.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">الهاتف</h3>
                  <p className="text-gray-600 text-sm">+966 11 123 4567</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">الدردشة المباشرة</h3>
                  <p className="text-gray-600 text-sm">متاحة من 9 ص إلى 9 م</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}