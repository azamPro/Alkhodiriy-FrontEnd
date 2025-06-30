'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionContainer from '@/components/SectionContainer';
// import Card from '@/components/Card';
// import { Heart } from 'lucide-react';

// export default function AboutSection() {
//   return (
//     <SectionContainer id="about" background="light">
//       <AnimatedSection>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//               من نحن
//             </h2>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               عائلة الخضيري هي إحدى العائلات العريقة التي تتميز بتاريخها الطويل وتراثها الغني، 
//               وتسعى للحفاظ على قيمها الأصيلة وتقاليدها العربية الأصيلة.
//             </p>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               نعمل على توثيق تاريخ العائلة وربط أفرادها في مختلف أنحاء العالم، 
//               والحفاظ على الروابط الاجتماعية القوية التي تميز عائلتنا الكريمة.
//             </p>
//           </div>

//           <Card className="bg-white shadow-lg border-0">
//             <div className="text-center p-6">
//               <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Heart className="w-8 h-8 text-gray-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 أن نكون عائلة متماسكة ومترابطة تحافظ على تراثها وقيمها الأصيلة، 
//                 وتنقل هذا التراث العريق للأجيال القادمة بكل فخر واعتزاز.
//               </p>
//             </div>
//           </Card>
//         </div>
//       </AnimatedSection>
//     </SectionContainer>
//   );
// }


export default function AboutSection() {
  return (
    <SectionContainer id="about" background="light">
      <AnimatedSection>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            تعريف بأسرة الخضيري
          </h2>
          <p>
            يرجع نسب الأسرة في سدير والقصيم من آل (بو حسين) إلى العنبر بن عمرو بن تميم، وقد عاشوا منذ عصر متقدم في حوطة سدير، حيث توجد قارة بلعنبر وهي أكمة جبل منقطع في رأسه بئر ماء وحولها الضياع والنخيل. ومنها نخيل الحوطة والجنوبية موطن الأسرة كما وصفها الهمداني: «ثم تمضي في بطن الفقي، وهو وادٍ كثير النخيل والآبار فتلقى قارة بلعنبر...». أما تسلسل الأسرة في القرون الأربعة الأخيرة فقد انحدرت من ثلاثة إخوة هم: مانع وربيعة وسيف أبناء محمد بن عثمان من آل بو حسين.
          </p>
          <p>
            مانع هو جد أسرة الخضيري في حوطة سدير والجنوبية، واسمه غلب على عقبه بعدما تقاسم الأملاك مع أخويه فكان نصيبه أرضاً تعرف باسم الخضيري وهي سبعة عشر بئرًا. أما ربيعة فهو جد الربيعة المعروفين في المجمعة، ومنهم الضاوي في حرمة. ويقال إن سيف لا ولد له، وله بئر لازالت تعرف باسمه في أرض الخضيري.
          </p>
          <div>
            <p>وقد تفرعت أسرة الخضيري إلى ثلاثة فروع:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>آل علي وهم الخضيري في حوطة سدير والجنوبية (بعضهم رحل إلى الزبير).</li>
              <li>آل عبدالمحسن وقد انتقلوا جميعًا إلى الزبير.</li>
              <li>آل سليمان وهم الخضيري في القصيم، انتقل جدهم سليمان بن حمد في منتصف القرن الثاني عشر الهجري وجاور الحميدي صاحب الشقة، وابتدع فيها بئر الحوطة
                .</li>
            </ul>
          </div>
          <p>
            اليوم ينتشر أبناء الأسرة في مناطق المملكة من الرياض والقصيم إلى الدمام ورفحاء وطريف، إضافة إلى الزبير ودير الزور، ويشغلون مناصب مختلفة من العلماء والقضاة ورجال الأعمال والموظفين.
          </p>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}
