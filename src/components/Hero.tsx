import React from 'react';
import { 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  Upload, 
  CheckCircle2, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface HeroProps {
  lang: Language;
  content: TranslationContent['hero'];
  whatsAppUrl: string;
  onOpenUploadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  content,
  whatsAppUrl,
  onOpenUploadModal,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#F0F6FC] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background blurs & geometric pharmacy shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#FFDD00]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 -ml-20 w-80 h-80 bg-[#0055A4]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-[#0055A4]/20 text-[#0055A4] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0055A4]" />
              <span>{content.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0055A4] tracking-tight leading-[1.2] mb-6">
              {content.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#2F4F4F]/90 font-normal leading-relaxed mb-8 max-w-2xl">
              {content.subheadline}
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Primary CTA - Order via WhatsApp */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FFDD00] hover:bg-[#eecf00] text-black font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border-2 border-amber-400"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                <span>{content.orderCta}</span>
              </a>

              {/* Secondary CTA - Fast Prescription Upload Helper */}
              <button
                onClick={onOpenUploadModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0055A4] font-bold text-base border-2 border-[#0055A4]/30 hover:border-[#0055A4] shadow-sm transition-all"
              >
                <Upload className="w-5 h-5 text-[#0055A4]" />
                <span>{lang === 'ar' ? 'إرسال وصفة طبية' : 'Send Prescription'}</span>
              </button>
            </div>

            {/* Delivery & Reassurance Note */}
            <div className="flex items-center gap-2 text-sm text-[#2F4F4F]/80 font-medium bg-amber-50/80 border border-amber-200/60 px-3.5 py-2 rounded-lg">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{content.deliveryNotice}</span>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full pt-8 mt-6 border-t border-slate-200">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#0055A4]">{content.stat1Value}</div>
                <div className="text-xs sm:text-sm text-[#2F4F4F]/70 font-medium">{content.stat1Label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#0055A4]">{content.stat2Value}</div>
                <div className="text-xs sm:text-sm text-[#2F4F4F]/70 font-medium">{content.stat2Label}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#0055A4]">{content.stat3Value}</div>
                <div className="text-xs sm:text-sm text-[#2F4F4F]/70 font-medium">{content.stat3Label}</div>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Interactive Preview (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/80 overflow-hidden">
                
                {/* Brand Header Banner */}
                <div className="bg-[#0055A4] -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 p-6 text-white mb-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FFDD00] flex items-center justify-center font-bold text-black text-xl">
                        Rx
                      </div>
                      <div>
                        <div className="font-extrabold text-base tracking-wide">
                          AYLIN PHARMACY
                        </div>
                        <div className="text-xs text-blue-200">
                          {lang === 'ar' ? 'صيدلية أيلين - خدمة سريعة' : 'Neighborhood Health Desk'}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      {lang === 'ar' ? 'متاح الآن' : 'Active'}
                    </span>
                  </div>
                </div>

                {/* Prescription Card Preview */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F0F6FC] border border-blue-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0055A4] text-white flex items-center justify-center shrink-0">
                      <Upload className="w-5 h-5 text-[#FFDD00]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0055A4]">
                        {lang === 'ar' ? 'ارفع وصفتك عبر الواتساب' : 'WhatsApp Prescription Flow'}
                      </h4>
                      <p className="text-xs text-[#2F4F4F]/80 mt-0.5">
                        {lang === 'ar' 
                          ? 'التقط صورة للوصفة أو اكتب قائمة الأدوية وسنحضرها فوراً' 
                          : 'Snap prescription photo or type medicine names for quick pickup.'}
                      </p>
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-[#2F4F4F]">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{lang === 'ar' ? 'صرف دقيق للوصفات الطبية المعتمدة' : 'Accurate prescription fulfillment'}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{lang === 'ar' ? 'استشارة مجانية بخصوص الجرعات والتفاعلات' : 'Complimentary pharmacist dosage check'}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{lang === 'ar' ? 'إشعار فوري عند اكتمال تجهيز طلبك' : 'Instant ready-for-pickup SMS / WhatsApp alert'}</span>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <button
                    onClick={onOpenUploadModal}
                    className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#0055A4] hover:bg-[#004482] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  >
                    <Upload className="w-4 h-4 text-[#FFDD00]" />
                    <span>{lang === 'ar' ? 'تجربة إرسال الوصفة الطبية' : 'Test Prescription Uploader'}</span>
                  </button>

                  <a
                    href="tel:+966123456789"
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-[#2F4F4F] font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#0055A4]" />
                    <span>{lang === 'ar' ? 'اتصال مباشر بالصيدلي: 6789 345 12 966+' : 'Direct Call: +966 12 345 6789'}</span>
                  </a>

                </div>

                {/* Floating Satisfaction badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#2F4F4F]/70">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0055A4]" />
                    <span>{lang === 'ar' ? 'تجهيز سريع بدون انتظار' : 'Fast Zero-Wait Pickup'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-[#0055A4]">
                    <HeartHandshake className="w-4 h-4 text-[#FFDD00]" />
                    <span>{lang === 'ar' ? 'صحة عائلتك أولويتنا' : 'Patient-First Care'}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
