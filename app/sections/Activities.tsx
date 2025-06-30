// 'use client';
// import AnimatedSection from '@/components/AnimatedSection';
// import SectionContainer from '@/components/SectionContainer';
// import Card from '@/components/Card';
// import { familyActivities } from '@/lib/data';

// export default function Activities() {
//   return (
//           <SectionContainer id="activities">
//         <AnimatedSection>
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//               أنشطة العائلة
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               نقوم بمجموعة من الأنشطة التي تهدف إلى الحفاظ على تراث العائلة وتقوية الروابط بين أفرادها
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {familyActivities.map((activity, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <Card hover className="text-center h-full">
//                   <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
//                     {activity.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-4">
//                     {activity.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {activity.description}
//                   </p>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </AnimatedSection>
//       </SectionContainer>

//   );
// }

'use client';
import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';

export default function Activities() {
  return (
    <SectionContainer id="activities">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            الأنشطة التجارية لأفراد الأسرة
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اشتهرت الأسرة بالتجارة وبرز من أبنائها تجارٌ كثيرون، ومن أبرز الأنشطة التجارية ما يلي:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card hover className="text-center h-full">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">دوفت</h3>
            <p className="text-gray-600 leading-relaxed">
              للعم: إبراهيم بن صالح بن محمد بن خضير وأبناؤه
            </p>
          </Card>

          <Card hover className="text-center h-full">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">أرض القصيم للمفارش</h3>
            <p className="text-gray-600 leading-relaxed">
              للعم: حمد بن سليمان بن محمد بن خضير وأبناؤه
            </p>
          </Card>

          <Card hover className="text-center h-full">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">جزيرة الطفل</h3>
            <p className="text-gray-600 leading-relaxed">
              للعم: علي بن محمد بن خضير وأبناؤه
            </p>
          </Card>

          <Card hover className="text-center h-full">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">تطبيق مسمار</h3>
            <p className="text-gray-600 leading-relaxed">
              لابن العم: خالد بن عبدالرحمن بن عبدالعزيز
            </p>
          </Card>

          <Card hover className="text-center h-full">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">وادي حلفا</h3>
            <p className="text-gray-600 leading-relaxed">
              لابن العم: عبدالله بن عبدالرحمن بن عبدالله
            </p>
          </Card>

          <Card hover className="text-center h-full">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600 text-2xl">
              📦
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">معصرة الخيرات</h3>
            <p className="text-gray-600 leading-relaxed">
              لابن العم: تميم بن سليمان بن صالح بن عبدالله
            </p>
          </Card>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
