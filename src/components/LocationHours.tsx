import React, { useMemo } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  CalendarDays,
  AlertCircle
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface LocationHoursProps {
  lang: Language;
  content: TranslationContent['locationHours'];
  whatsAppUrl: string;
  phoneNumber: string;
}

export const LocationHours: React.FC<LocationHoursProps> = ({
  lang,
  content,
  whatsAppUrl,
  phoneNumber,
}) => {
  // Determine if currently open based on local time
  const isOpenNow = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const timeInMinutes = currentHour * 60 + currentMin;

    if (day === 5) {
      // Friday: 2:00 PM (14:00 = 840 min) to 11:30 PM (23:30 = 1410 min)
      return timeInMinutes >= 14 * 60 && timeInMinutes <= 23 * 60 + 30;
    } else {
      // Sat - Thu: 9:00 AM (9:00 = 540 min) to 11:30 PM (23:30 = 1410 min)
      return timeInMinutes >= 9 * 60 && timeInMinutes <= 23 * 60 + 30;
    }
  }, []);

  return (
    <section id="location" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0055A4] text-xs font-bold uppercase tracking-wider mb-3">
            {lang === 'ar' ? 'تفضل بزيارتنا' : 'Visit Our Store'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0055A4] tracking-tight">
            {content.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F4F4F]/80">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* 2-Column Layout: Details on left/right + Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Badge Card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isOpenNow 
                ? 'bg-emerald-50/80 border-emerald-200' 
                : 'bg-amber-50/80 border-amber-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3.5 h-3.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`}></div>
                  <span className={`text-base font-bold ${isOpenNow ? 'text-emerald-800' : 'text-amber-800'}`}>
                    {isOpenNow ? content.openNowBadge : content.closedBadge}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white shadow-xs text-slate-700">
                  {lang === 'ar' ? 'دوام مستمر' : 'Daily Schedule'}
                </span>
              </div>
              <p className="text-xs text-[#2F4F4F]/80 mt-2">
                {lang === 'ar'
                  ? 'الصيادلة متواجدون لخدمتك واستلام الوصفات طوال ساعات العمل الرسمية.'
                  : 'Licensed pharmacists on duty to prepare prescriptions throughout working hours.'}
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#0055A4]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0055A4]">
                    {content.addressHeading}
                  </h3>
                  <p className="text-sm font-semibold text-[#2F4F4F] mt-1">
                    {content.addressText}
                  </p>
                  <p className="text-xs text-[#2F4F4F]/70 mt-1">
                    {content.addressSubtext}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0055A4] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{content.getDirections}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-[#0055A4]">
                  {content.hoursHeading}
                </h3>
              </div>

              {/* Working Hours Table */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#0055A4]" />
                    <span className="text-xs sm:text-sm font-bold text-[#2F4F4F]">
                      {content.hoursWeekdayLabel}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0055A4] px-2.5 py-1 rounded bg-white shadow-xs border border-slate-200">
                    {content.hoursWeekday}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#0055A4]" />
                    <span className="text-xs sm:text-sm font-bold text-[#2F4F4F]">
                      {content.hoursFridayLabel}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0055A4] px-2.5 py-1 rounded bg-white shadow-xs border border-slate-200">
                    {content.hoursFriday}
                  </span>
                </div>
              </div>
            </div>

            {/* Phone & Direct Contact Bar */}
            <div className="bg-[#0055A4] text-white rounded-3xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-base">
                    {content.emergencyHeading}
                  </h4>
                  <p className="text-xs text-blue-100 mt-0.5">
                    {content.emergencyText}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
                  className="py-2.5 px-3 rounded-xl bg-white text-[#0055A4] hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>{content.callPharmacy}</span>
                </a>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#FFDD00] text-black hover:bg-[#ebd000] font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Embedded Google Maps Placeholder (Col 6-12) */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200 shadow-md h-full flex flex-col">
              
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                {/* Google Maps Iframe (Embed) */}
                <iframe
                  title="AYLIN Pharmacy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115984.7214736856!2d46.60226348604739!3d24.71355172288307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x7d6a5c1813b5ff2!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-110"
                ></iframe>

                {/* Overlay Pin Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0055A4] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#FFDD00]" />
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-[#0055A4]">
                        AYLIN Pharmacy | صيدلية أيلين
                      </div>
                      <div className="text-[11px] text-[#2F4F4F]">
                        {lang === 'ar' ? 'مواقف خاصة مجانية أمام الصيدلية' : 'Free front parking spaces available'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#2F4F4F]/70">
                <span>{lang === 'ar' ? '📍 الموقع: المبنى رقم 42، الشارع التجاري الرئيسي' : '📍 Location: Building 42, Main Commercial Blvd'}</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0055A4] hover:underline font-semibold"
                >
                  {lang === 'ar' ? 'عرض على خرائط جوجل ↗' : 'View full map ↗'}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
