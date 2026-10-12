import React, { useState } from 'react';
import { 
  MessageSquare, 
  Camera, 
  PackageCheck, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  Send, 
  CheckCircle,
  FileText,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface HowToOrderProps {
  lang: Language;
  content: TranslationContent['howToOrder'];
  whatsAppUrl: string;
  phoneNumber: string;
}

export const HowToOrder: React.FC<HowToOrderProps> = ({
  lang,
  content,
  whatsAppUrl,
  phoneNumber,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Interactive in-page Prescription / WhatsApp Message Generator
  const [patientName, setPatientName] = useState('');
  const [medicationList, setMedicationList] = useState('');
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [prescriptionAttached, setPrescriptionAttached] = useState(false);

  const steps = [
    {
      num: '01',
      title: content.step1Title,
      desc: content.step1Desc,
      icon: MessageSquare,
      color: 'bg-[#FFDD00] text-black',
    },
    {
      num: '02',
      title: content.step2Title,
      desc: content.step2Desc,
      icon: Camera,
      color: 'bg-[#0055A4] text-white',
    },
    {
      num: '03',
      title: content.step3Title,
      desc: content.step3Desc,
      icon: PackageCheck,
      color: 'bg-emerald-600 text-white',
    },
  ];

  // Build custom WhatsApp link with current form values
  const buildCustomWhatsAppUrl = () => {
    let text = '';
    if (lang === 'ar') {
      text = `مرحباً صيدلية أيلين، أود تقديم طلب جديد:\n`;
      if (patientName.trim()) text += `👤 الاسم: ${patientName.trim()}\n`;
      text += `📦 نوع الطلب: ${deliveryType === 'pickup' ? 'استلام من الصيدلية' : 'توصيل للمنزل'}\n`;
      if (medicationList.trim()) text += `💊 الأدوية المطلوبة:\n${medicationList.trim()}\n`;
      if (prescriptionAttached) text += `📸 أرفق لكم صورة الوصفة الطبية في المحادثة.\n`;
      text += `شكراً جزيلاً!`;
    } else {
      text = `Hello Aylin Pharmacy, I would like to place an order:\n`;
      if (patientName.trim()) text += `👤 Name: ${patientName.trim()}\n`;
      text += `📦 Order Type: ${deliveryType === 'pickup' ? 'In-store Pickup' : 'Home Delivery'}\n`;
      if (medicationList.trim()) text += `💊 Required Medications:\n${medicationList.trim()}\n`;
      if (prescriptionAttached) text += `📸 I am attaching my prescription photo right here in this chat.\n`;
      text += `Thank you!`;
    }
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="how-to-order" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            {lang === 'ar' ? 'طلب سريع ومريح' : 'Fast & Seamless Flow'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
            {content.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F4F4F]/80">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* 3 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step indicator number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#0055A4]/20">
                      {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0055A4] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#2F4F4F]/85">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0055A4]">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'ar' ? 'خطوة موثوقة ومضمونة' : 'Certified Pharmacy Process'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive In-Page WhatsApp Order Composer Tool */}
        <div className="bg-white rounded-3xl border-2 border-[#0055A4]/20 p-6 sm:p-10 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0055A4] bg-blue-50 px-2.5 py-1 rounded-md mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0055A4]" />
                {lang === 'ar' ? 'مساعد الطلب التفاعلي' : 'Interactive Order Composer'}
              </div>
              <h3 className="text-2xl font-bold text-[#0055A4]">
                {lang === 'ar' ? 'جهّز رسالة طلبك للواتساب الآن' : 'Prepare Your WhatsApp Order Now'}
              </h3>
              <p className="text-xs sm:text-sm text-[#2F4F4F]/80 mt-1">
                {lang === 'ar' 
                  ? 'اكتب أسماء الأدوية أو ارفع صورة الوصفة واضغط إرسال لفتح محادثة واتساب مباشرة' 
                  : 'Type medications or attach your prescription photo and send directly to our pharmacy.'}
              </p>
            </div>
            
            {/* Quick direct CTA */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFDD00] hover:bg-[#ebd000] text-black font-extrabold text-sm shrink-0 shadow-md border border-amber-300"
            >
              <Send className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>{content.orderNowBtn}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Form inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2F4F4F] uppercase tracking-wider mb-1.5">
                  {lang === 'ar' ? 'الاسم الكريم (اختياري)' : 'Patient / Contact Name (Optional)'}
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder={lang === 'ar' ? 'مثال: محمد العمري' : 'e.g. John Doe'}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4]/30 focus:border-[#0055A4]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2F4F4F] uppercase tracking-wider mb-1.5">
                  {lang === 'ar' ? 'طريقة الاستلام' : 'Delivery Preference'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      deliveryType === 'pickup'
                        ? 'bg-[#0055A4] text-white border-[#0055A4]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lang === 'ar' ? 'استلام من الفرع' : 'In-Store Pickup'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      deliveryType === 'delivery'
                        ? 'bg-[#0055A4] text-white border-[#0055A4]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lang === 'ar' ? 'توصيل للمنزل' : 'Home Delivery'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2F4F4F] uppercase tracking-wider mb-1.5">
                  {lang === 'ar' ? 'قائمة الأدوية أو الاستفسار' : 'Medications / Products List'}
                </label>
                <textarea
                  rows={3}
                  value={medicationList}
                  onChange={(e) => setMedicationList(e.target.value)}
                  placeholder={lang === 'ar' ? 'اكتب أسماء الأدوية أو المستلزمات هنا...' : 'Type medication names or health questions here...'}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4]/30 focus:border-[#0055A4]"
                />
              </div>
            </div>

            {/* Right Column: Prescription image simulation & Live WhatsApp Message preview */}
            <div className="flex flex-col justify-between space-y-4">
              {/* Prescription photo simulation toggle */}
              <div className="border-2 border-dashed border-slate-300 hover:border-[#0055A4] rounded-2xl p-4 text-center bg-slate-50 transition-colors">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Upload className="w-5 h-5 text-[#0055A4]" />
                  <span className="text-xs font-bold text-[#0055A4]">
                    {lang === 'ar' ? 'صورة الوصفة الطبية' : 'Prescription Photo'}
                  </span>
                </div>
                <p className="text-xs text-[#2F4F4F]/70 mb-3">
                  {lang === 'ar' ? 'يمكنك إرفاق الصورة في محادثة الواتساب فور فتحها' : 'Attach your photo in WhatsApp when chat opens.'}
                </p>
                <button
                  type="button"
                  onClick={() => setPrescriptionAttached(!prescriptionAttached)}
                  className={`text-xs font-bold py-1.5 px-3 rounded-lg border transition-all ${
                    prescriptionAttached
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {prescriptionAttached 
                    ? (lang === 'ar' ? '✓ سيتم إرسال تنبيه بالوصفة' : '✓ Prescription note enabled') 
                    : (lang === 'ar' ? '+ أضف إشعار بأن لدي وصفة طبية' : '+ Mention prescription photo in message')}
                </button>
              </div>

              {/* WhatsApp message live box */}
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs space-y-2">
                <div className="flex items-center justify-between text-emerald-800 font-bold">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {lang === 'ar' ? 'معاينة نص الرسالة' : 'WhatsApp Message Preview'}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                    {phoneNumber}
                  </span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-emerald-100 text-[#2F4F4F] font-mono text-[11px] leading-relaxed whitespace-pre-line max-h-24 overflow-y-auto">
                  {lang === 'ar'
                    ? `مرحباً صيدلية أيلين، أود تقديم طلب جديد:\n${patientName ? `👤 الاسم: ${patientName}\n` : ''}📦 نوع الطلب: ${deliveryType === 'pickup' ? 'استلام من الصيدلية' : 'توصيل للمنزل'}\n${medicationList ? `💊 الأدوية: ${medicationList}\n` : ''}${prescriptionAttached ? `📸 مرفق صورة الوصفة الطبية.` : ''}`
                    : `Hello Aylin Pharmacy, I would like to place an order:\n${patientName ? `👤 Name: ${patientName}\n` : ''}📦 Type: ${deliveryType === 'pickup' ? 'In-store Pickup' : 'Home Delivery'}\n${medicationList ? `💊 Medications: ${medicationList}\n` : ''}${prescriptionAttached ? `📸 Attaching prescription photo.` : ''}`}
                </div>
              </div>

              {/* Submit CTA button */}
              <a
                href={buildCustomWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'ar' ? 'إرسال هذه الرسالة عبر الواتساب الآن' : 'Send Prepared Order to WhatsApp'}</span>
              </a>

            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{content.secureNotice}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
