'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { forgotPassword } from '@/lib/auth-api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await forgotPassword({ email });
      console.log('Password reset email sent:', response);
      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to send reset email:', error);
      setErrors({ general: 'فشل في إرسال رابط إعادة تعيين كلمة المرور. حاول مرة أخرى.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-gray-50 via-white to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
              <ArrowLeft className="w-5 h-5 ml-2" />
              العودة للرئيسية
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              تم إرسال الرابط بنجاح
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني:
            </p>
            
            <p className="text-gray-800 font-medium mb-6 bg-gray-50 p-3 rounded-lg">
              {email}
            </p>
            
            <p className="text-gray-600 text-sm mb-8">
              يرجى التحقق من صندوق الوارد وصندوق الرسائل غير المرغوب فيها. 
              الرابط صالح لمدة 24 ساعة.
            </p>

            <div className="space-y-4">
              <Link 
                href="/auth/login"
                className="block w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
              >
                العودة لتسجيل الدخول
              </Link>
              
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setEmail('');
                  setErrors({});
                }}
                className="block w-full text-gray-600 hover:text-gray-800 py-2 transition-colors duration-300"
              >
                إرسال لبريد إلكتروني آخر
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-50 via-white to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            نسيت كلمة المرور؟
          </h2>
          <p className="text-gray-600">
            أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور
          </p>
        </div>

        {/* Forgot Password Form */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-right">
                {errors.general}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors duration-300 text-right ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="rtl"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري الإرسال...' : 'إرسال رابط إعادة التعيين'}
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="mt-6 text-center">
            <Link 
              href="/auth/login" 
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-300"
            >
              العودة لتسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}