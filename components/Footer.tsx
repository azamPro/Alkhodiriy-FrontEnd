'use client';

import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaSnapchatGhost, FaTiktok, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">عائلة الخضيري</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              تراث عريق وأصالة متجذرة نفتخر بها ونحافظ عليها
            </p>
            {/* <div className="flex space-x-reverse space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
            </div> */}
                 <div className="flex space-x-reverse space-x-4">
          <a
            href="https://www.snapchat.com/add/initalkhudhiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchatGhost className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/initalkhudhiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@initalkhudhiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
          </a>
        </div>


          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">من نحن</a></li>
              <li><a href="#activities" className="text-gray-300 hover:text-white transition-colors duration-300">أنشطة العائلة</a></li>
              <li><a href="#members" className="text-gray-300 hover:text-white transition-colors duration-300">أفراد العائلة</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">أنشطتنا</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">التراث العائلي</li>
              <li className="text-gray-300">الأنساب والتاريخ</li>
              <li className="text-gray-300">التواصل العائلي</li>
              <li className="text-gray-300">الذكريات والصور</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-3 text-gray-300" />
                <span className="text-gray-300">info@khudairi-family.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-3 text-gray-300" />
                <span className="text-gray-300">+966 11 123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-3 text-gray-300" />
                <span className="text-gray-300">المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 عائلة الخضيري. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
