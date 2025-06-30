// 'use client';

// import AnimatedSection from '@/components/AnimatedSection';
// import SectionContainer from '@/components/SectionContainer';
// import Card from '@/components/Card';
// import { foundingMembers, boardMembers } from '@/lib/data';

// export default function MembersSection() {
//   return (
//     <SectionContainer id="members" background="light">
//       <AnimatedSection>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             تشكيل الصندوق
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             صندوق عائلة الخضيري هو كيان نظامي رسمي مسجل، يمتلك سجلًا تجاريًا وحسابًا بنكيًا، 
//             ويهدف إلى تنظيم العمل العائلي بشكل قانوني وفعّال، شبيه بالجمعيات الخيرية 
//             ولكن خاص بالأسرة، مما يسمح بتنفيذ البرامج والمبادرات بغطاء رسمي وتحت إشراف موثوق.
//           </p>
//         </div>

//         {/* المؤسسون */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//             الأعضاء المؤسسون
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {foundingMembers.map((member, index) => (
//               <AnimatedSection key={index} delay={index * 150}>
//                 <Card hover className="text-center">
//                   <h4 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h4>
//                   <p className="text-gray-600">{member.role}</p>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>

//         {/* مجلس الأمناء */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//             مجلس الأمناء
//           </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//             {boardMembers.map((member, index) => (
//               <AnimatedSection key={index} delay={index * 150}>
//                 <Card hover className="text-center">
//                   <h4 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h4>
//                   <p className="text-gray-600">{member.role}</p>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </AnimatedSection>
//     </SectionContainer>
//   );
// }


'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';

export default function MembersSection() {
  return (
    <SectionContainer id="members" background="light">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            تشكيل الصندوق
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            صندوق عائلة الخضيري هو كيان نظامي رسمي مسجل، يمتلك سجلًا تجاريًا وحسابًا بنكيًا، 
            ويهدف إلى تنظيم العمل العائلي بشكل قانوني وفعّال، شبيه بالجمعيات الخيرية 
            ولكن خاص بالأسرة، مما يسمح بتنفيذ البرامج والمبادرات بغطاء رسمي وتحت إشراف موثوق.
          </p>
        </div>

        {/* Founding Members - Static */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            الأعضاء المؤسسون
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'إبراهيم بن صالح بن حمد بن عبدالله بن سليمان',
              'إبراهيم بن صالح بن محمد بن خضير بن محمد',
              'حمد بن سليمان بن محمد بن خضير بن محمد',
              'سليمان بن صالح بن عبدالله بن سليمان بن عبدالله',
              'سليمان بن علي بن سليمان بن عبدالله بن محمد',
              'صالح بن عبدالرحمن بن علي بن حمود بن عبدالله',
              'عبدالعزيز بن صالح بن محمد بن سليمان بن عبدالله',
              'عبدالعزيز بن علي بن عبدالله بن صالح بن محمد',
              'علي بن محمد بن خضير بن محمد بن خضير',
              'محمد بن عبدالله بن علي بن صالح بن محمد',
            ].map((name, index) => (
              <Card key={index} hover className="text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-2">{name}</h4>
              </Card>
            ))}
          </div>
        </div>

        {/* Board of Trustees - Static */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            مجلس الأمناء
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                عبدالعزيز بن علي بن عبدالله بن صالح بن محمد
              </h4>
              <p className="text-gray-600">رئيسًا</p>
            </Card>
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                عبدالعزيز بن صالح بن محمد بن سليمان بن عبدالله
              </h4>
              <p className="text-gray-600">نائبًا للرئيس</p>
            </Card>
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                أحمد بن إبراهيم بن صالح بن محمد بن خضير
              </h4>
            </Card>
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                عبدالله بن صالح بن عبدالرحمن بن علي بن حمود
              </h4>
            </Card>
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                أحمد بن محمد بن علي بن سليمان بن عبدالله
              </h4>
            </Card>
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                عبدالله بن صالح بن عبدالله بن سليمان بن عبدالله
              </h4>
            </Card>
            <Card hover className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                عبدالله بن حمد بن سليمان بن محمد بن خضير
              </h4>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
