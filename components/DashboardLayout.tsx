'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Home, 
  Users, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  User,
  TreePine
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface UserData {
  id: number;
  name: string;
  email: string;
}

const sidebarItems = [
  {
    name: 'الرئيسية',
    href: '/dashboard',
    icon: <Home className="w-5 h-5" />
  },
  {
    name: 'شجرة العائلة',
    href: '/dashboard/family-tree',
    icon: <TreePine className="w-5 h-5" />
  },
  {
    name: 'الفعاليات',
    href: '/dashboard/events',
    icon: <Calendar className="w-5 h-5" />
  },
  {
    name: 'طلب دعم',
    href: '/dashboard/support',
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    name: 'الإعدادات',
    href: '/dashboard/settings',
    icon: <Settings className="w-5 h-5" />
  }
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('authToken');
    const storedUserData = localStorage.getItem('userData');
    
    if (!token || !storedUserData) {
      // Redirect to login if not authenticated
      router.push('/auth/login');
      return;
    }

    try {
      const user = JSON.parse(storedUserData);
      setUserData(user);
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/auth/login');
    }
  }, [router]);

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Redirect to home page
    router.push('/');
  };

  // Show loading while checking authentication
  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحقق من صحة تسجيل الدخول...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <img 
              src="/images/family logo.webp" 
              alt="شعار عائلة الخضيري" 
              className="w-8 h-8 object-contain ml-3"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const sib = e.currentTarget.nextElementSibling;
                if (sib instanceof HTMLElement) {
                  sib.style.display = 'block';
                }
              }}
            />
            <span 
              className="text-gray-600 text-sm font-bold hidden"
              style={{ display: 'none' }}
            >
              الخضيري
            </span>
            <h2 className="text-xl font-bold text-gray-800">عائلة الخضيري</h2>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center ml-3">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{userData.name}</p>
              <p className="text-gray-600 text-sm">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors duration-300
                    ${pathname === item.href 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }
                  `}
                >
                  {item.icon}
                  <span className="mr-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-colors duration-300"
          >
            <LogOut className="w-5 h-5" />
            <span className="mr-3">تسجيل الخروج</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:mr-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}