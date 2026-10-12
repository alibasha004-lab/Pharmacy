import React from 'react';
import { 
  Pill, 
  Baby, 
  Sparkles, 
  Activity, 
  ShieldAlert, 
  HeartPulse, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface CategoriesProps {
  lang: Language;
  content: TranslationContent['categories'];
  phoneNumber: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  lang,
  content,
  phoneNumber,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return Pill;
      case 'Baby':
        return Baby;
      case 'Sparkles':
        return Sparkles;
      case 'Activity':
        return Activity;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'HeartPulse':
        return HeartPulse;
      default:
        return Pill;
    }
  };

  const createCategoryWhatsAppUrl = (categoryTitle: string) => {
    const text = lang === 'ar'
      ? `مرحباً صيدلية أيلين، أود الاستفسار عن توفر منتجات من قسم: ${categoryTitle}`
      : `Hello Aylin Pharmacy, I would like to inquire about products in: ${categoryTitle}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0055A4] text-xs font-bold uppercase tracking-wider mb-3">
            {lang === 'ar' ? 'أقسام الصيدلية المتكاملة' : 'Pharmacy Departments'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
            {content.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F4F4F]/80">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-3xl p-7 border border-slate-200 hover:border-[#0055A4]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#0055A4] border border-slate-200/80 flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6 text-[#0055A4] group-hover:text-[#FFDD00] transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-[#2F4F4F]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0055A4] mb-2 group-hover:text-[#0055A4]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2F4F4F]/80 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <a
                    href={createCategoryWhatsAppUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white group-hover:bg-[#FFDD00] border border-slate-300 group-hover:border-amber-400 text-xs font-bold text-[#2F4F4F] group-hover:text-black transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>{content.inquireBtn}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery / In-stock reminder */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0055A4] flex items-center justify-center text-[#FFDD00] shrink-0 font-bold">
              Rx
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0055A4]">
                {lang === 'ar' ? 'تبحث عن دواء معين غير متوفر عادة؟' : 'Looking for a specific or rare medication?'}
              </h4>
              <p className="text-xs text-[#2F4F4F]/80">
                {lang === 'ar' 
                  ? 'نوفر خدمة تأمين الأدوية الخاصة والنادرة خلال 24 ساعة عبر موزعينا المعتمدين.' 
                  : 'We can source specialized and rare medications within 24 hours from licensed distributors.'}
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحبا صيدلية أيلين، أود السؤال عن توفير دواء خاص' : 'Hello Aylin Pharmacy, I want to inquire about sourcing a special medication')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#0055A4] hover:bg-[#003B73] text-white font-bold text-xs flex items-center gap-1.5 shadow"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طلب توفير دواء' : 'Request Medicine Sourcing'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
