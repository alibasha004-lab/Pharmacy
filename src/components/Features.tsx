import React from 'react';
import { 
  Zap, 
  UserCheck, 
  Boxes, 
  ArrowRight, 
  ArrowLeft,
  Check,
  MessageCircle
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface FeaturesProps {
  lang: Language;
  content: TranslationContent['features'];
  whatsAppUrl: string;
}

export const Features: React.FC<FeaturesProps> = ({
  lang,
  content,
  whatsAppUrl,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const cards = [
    {
      id: 'fast-rx',
      title: content.card1Title,
      desc: content.card1Desc,
      badge: content.card1Badge,
      icon: Zap,
      iconColor: 'text-[#0055A4]',
      badgeBg: 'bg-blue-100 text-[#0055A4]',
      highlights: isRtl 
        ? ['تجهيز مسبق في 15 دقيقة', 'إمكانية إرفاق صورة الوصفة', 'استلام فوري دون انتظار']
        : ['15-minute prep ahead', 'Photo attachment support', 'Zero wait in-store pickup'],
    },
    {
      id: 'expert-advice',
      title: content.card2Title,
      desc: content.card2Desc,
      badge: content.card2Badge,
      icon: UserCheck,
      iconColor: 'text-blue-600',
      badgeBg: 'bg-amber-100 text-amber-900',
      highlights: isRtl 
        ? ['استشارات مجانية حول الجرعات', 'فحص تداخلات الأدوية', 'صيادلة مرخصون ومعتمدون']
        : ['Free dosage consultation', 'Drug interaction checks', 'Certified licensed pharmacists'],
    },
    {
      id: 'wide-products',
      title: content.card3Title,
      desc: content.card3Desc,
      badge: content.card3Badge,
      icon: Boxes,
      iconColor: 'text-[#0055A4]',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      highlights: isRtl 
        ? ['أدوية أصلية مضمونة', 'منتجات عناية الأم والطفل', 'مستحضرات صيدلانية وتجميلية']
        : ['100% authentic medicines', 'Mother & baby care essentials', 'Dermo-cosmetics & wellness'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0055A4] text-xs font-bold uppercase tracking-wider mb-3">
            {lang === 'ar' ? 'خدماتنا الأساسية' : 'Core Capabilities'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
            {content.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F4F4F]/80">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* 3 Key Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#0055A4]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top card bar with Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 group-hover:bg-[#0055A4] flex items-center justify-center shadow-xs transition-colors duration-300">
                      <Icon className={`w-7 h-7 ${card.iconColor} group-hover:text-[#FFDD00] transition-colors duration-300`} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${card.badgeBg}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0055A4] group-hover:text-[#0055A4] mb-3">
                    {card.title}
                  </h3>

                  {/* Description from prompt */}
                  <p className="text-sm leading-relaxed text-[#2F4F4F]/90 mb-6 font-normal">
                    {card.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-slate-200/60 text-xs sm:text-sm text-[#2F4F4F]/85">
                    {card.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#FFDD00] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200/60 text-xs sm:text-sm font-bold text-[#0055A4] group-hover:text-blue-700 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    {lang === 'ar' ? 'طلب هذه الخدمة عبر الواتساب' : 'Request via WhatsApp'}
                  </span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
