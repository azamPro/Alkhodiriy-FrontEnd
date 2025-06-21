'use client';

import { useEffect } from 'react';
// import { 
//   ChevronDown, 
//   Users, 
//   Target, 
//   Award, 
//   Building, 
//   TrendingUp, 
//   Globe,
//   Heart,
//   Star,
//   ArrowLeft,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Phone,
//   Mail,
//   MapPin,
//   HomeIcon,
//   BookOpen,
//   Camera
// } from 'lucide-react';

// import AnimatedSection from '@/components/AnimatedSection';
// import SectionContainer from '@/components/SectionContainer';
// import Card from '@/components/Card';
// import AccordionItem from '@/components/AccordionItem';
// import ContactForm from '@/components/ContactForm';

// import { familyActivities, familyMembers, familyHistory, faqData } from '@/lib/data';

import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import Activities from './sections/Activities';
import MembersSection from './sections/Members';
import StructureSection from './sections/Structure';
import HistorySection from './sections/History';
import FAQSection from './sections/FAQ';
import ContactSection from './sections/Contact';
import Footer from '../components/Footer';


export default function Home() {
  // const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* <section id="hero" className="min-h-screen bg-gradient-to-bl from-gray-50 via-white to-gray-100 bg-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-50/90 via-white/95 to-gray-100/90"></div>
        <div className="relative section-container flex items-center justify-center min-h-screen text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-shadow">
              عائلة الخضيري
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              تراث عريق وأصالة متجذرة
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              نحن نفتخر بتراثنا العائلي العريق ونسعى للحفاظ على قيمنا وتقاليدنا 
              ونقلها للأجيال القادمة بكل فخر واعتزاز
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                تعرف على العائلة
                <ArrowLeft className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>
 */}
 <HeroSection />

      {/* About Section */}
      {/* <SectionContainer id="about" background="light">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                من نحن
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                عائلة الخضيري هي إحدى العائلات العريقة التي تتميز بتاريخها الطويل وتراثها الغني، 
                وتسعى للحفاظ على قيمها الأصيلة وتقاليدها العربية الأصيلة.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نعمل على توثيق تاريخ العائلة وربط أفرادها في مختلف أنحاء العالم، 
                والحفاظ على الروابط الاجتماعية القوية التي تميز عائلتنا الكريمة.
              </p>
            </div>
            
            <Card className="bg-white shadow-lg border-0">
              <div className="text-center p-6">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون عائلة متماسكة ومترابطة تحافظ على تراثها وقيمها الأصيلة، 
                  وتنقل هذا التراث العريق للأجيال القادمة بكل فخر واعتزاز.
                </p>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </SectionContainer> */}

      <AboutSection />


      {/* Family Activities Section */}
      {/* <SectionContainer id="activities">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              أنشطة العائلة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقوم بمجموعة من الأنشطة التي تهدف إلى الحفاظ على تراث العائلة وتقوية الروابط بين أفرادها
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyActivities.map((activity, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card hover className="text-center h-full">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer> */}
      <Activities />

      {/* Family Members Section */}
      {/* <SectionContainer id="members" background="light">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              أفراد العائلة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نفتخر بأفراد عائلتنا الكرام الذين يحملون اسم الخضيري بكل عز وفخر
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card hover className="text-center">
                  <div className="mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">
                    {member.position}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </SectionContainer>
 */}
      <MembersSection />
      {/* Family Structure Section */}
      {/* <SectionContainer id="structure">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              هيكل العائلة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تنظيم عائلي يضمن التواصل الفعال والحفاظ على التراث العائلي
            </p>
          </div>
          
          <Card className="overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full text-right">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 text-gray-800 font-bold">المسؤولية</th>
                    <th className="py-4 px-6 text-gray-800 font-bold">الاسم</th>
                    <th className="py-4 px-6 text-gray-800 font-bold">الوصف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium">كبير العائلة</td>
                    <td className="py-4 px-6">عبدالله الخضيري</td>
                    <td className="py-4 px-6 text-gray-600">الإشراف العام على شؤون العائلة</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium">أمين السر</td>
                    <td className="py-4 px-6">محمد الخضيري</td>
                    <td className="py-4 px-6 text-gray-600">توثيق الأحداث والمراسلات</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium">أمين الصندوق</td>
                    <td className="py-4 px-6">فاطمة الخضيري</td>
                    <td className="py-4 px-6 text-gray-600">إدارة الشؤون المالية للعائلة</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">منسق الفعاليات</td>
                    <td className="py-4 px-6">نورا الخضيري</td>
                    <td className="py-4 px-6 text-gray-600">تنظيم التجمعات والمناسبات</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </AnimatedSection>
      </SectionContainer> */}
      <StructureSection />

      {/* Family History Section */}
      {/* <SectionContainer id="history" background="pattern">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              تاريخ العائلة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              محطات مهمة في تاريخ عائلة الخضيري وإنجازاتها عبر السنين
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {familyHistory.map((event, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 ml-6">
                      <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                        {event.year}
                      </div>
                    </div>
                    <Card className="flex-1" hover>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer> */}

<HistorySection />

      {/* FAQ Section */}
      {/* <SectionContainer id="faq" background="light">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              إجابات على أهم الأسئلة حول عائلة الخضيري وتاريخها
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="divide-y divide-gray-200">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    title={faq.question}
                    content={faq.answer}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </SectionContainer> */}
      <FAQSection />

      {/* Contact Section */}
      {/* <SectionContainer id="contact">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              تواصل معنا
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن سعداء بتواصلكم معنا ومشاركتكم في الحفاظ على تراث عائلة الخضيري
            </p>
          </div>
          
          <Card className="shadow-lg border-0">
            <ContactForm />
          </Card>
        </AnimatedSection>
      </SectionContainer> */}
      <ContactSection />
      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">عائلة الخضيري</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                تراث عريق وأصالة متجذرة نفتخر بها ونحافظ عليها
              </p>
              <div className="flex space-x-reverse space-x-4">
                <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
                <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
                <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
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
      </footer> */}
      <Footer />
    </main>
  );
}