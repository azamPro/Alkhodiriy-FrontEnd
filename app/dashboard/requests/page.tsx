'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Send, Clock, CheckCircle, XCircle } from 'lucide-react';

// Mock data for existing requests
const existingRequests = [
  {
    id: 1,
    title: 'طلب دعم تقني للموقع',
    description: 'أواجه مشكلة في تسجيل الدخول للموقع',
    type: 'الفريق التقني',
    status: 'قيد المراجعة',
    date: '2025-01-28',
    priority: 'متوسط'
  },
  {
    id: 2,
    title: 'اقتراح فعالية جديدة',
    description: 'اقتراح تنظيم رحلة عائلية لجميع أفراد العائلة',
    type: 'فريق الفعاليات',
    status: 'مكتمل',
    date: '2025-01-25',
    priority: 'منخفض'
  },
  {
    id: 3,
    title: 'طلب تحديث البيانات الشخصية',
    description: 'أريد تحديث رقم الهاتف والعنوان في ملفي الشخصي',
    type: 'الإدارة العامة',
    status: 'مرفوض',
    date: '2025-01-20',
    priority: 'عالي'
  }
];

const requestTypes = [
  'الفريق التقني',
  'فريق الفعاليات',
  'الإدارة العامة',
  'لجنة التعليم',
  'لجنة الدعم الاجتماعي',
  'مجلس الأمناء',
  'أخرى'
];

export default function RequestsPage() {
  const [showNewRequest, setShowNewRequest] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    priority: 'متوسط'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Request submitted:', formData);
    // Reset form and hide it
    setFormData({ title: '', description: '', type: '', priority: 'متوسط' });
    setShowNewRequest(false);
    // Show success message (you can implement toast notification here)
    alert('تم إرسال طلبك بنجاح!');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'قيد المراجعة':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />{status}</Badge>;
      case 'مكتمل':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />{status}</Badge>;
      case 'مرفوض':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'عالي':
        return <Badge variant="destructive">{priority}</Badge>;
      case 'متوسط':
        return <Badge variant="outline">{priority}</Badge>;
      case 'منخفض':
        return <Badge variant="secondary">{priority}</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">الطلبات والاستفسارات</h1>
            <p className="text-gray-600 mt-2">
              أرسل طلباتك واستفساراتك للفرق المختصة في صندوق العائلة
            </p>
          </div>
          <Button 
            onClick={() => setShowNewRequest(!showNewRequest)}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            طلب جديد
          </Button>
        </div>

        {/* New Request Form */}
        {showNewRequest && (
          <Card>
            <CardHeader>
              <CardTitle>إرسال طلب جديد</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">عنوان الطلب *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="أدخل عنوان الطلب"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">الفريق المختص *</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الفريق المختص" />
                      </SelectTrigger>
                      <SelectContent>
                        {requestTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="priority">الأولوية</Label>
                  <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="عالي">عالي</SelectItem>
                      <SelectItem value="متوسط">متوسط</SelectItem>
                      <SelectItem value="منخفض">منخفض</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">تفاصيل الطلب *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="اكتب تفاصيل طلبك هنا..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    إرسال الطلب
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowNewRequest(false)}
                  >
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Existing Requests */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">طلباتك السابقة</h2>
          <div className="grid gap-4">
            {existingRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{request.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>تاريخ الإرسال: {request.date}</span>
                        <span>الفريق: {request.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getPriorityBadge(request.priority)}
                      {getStatusBadge(request.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{request.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {existingRequests.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500">لم ترسل أي طلبات بعد</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}