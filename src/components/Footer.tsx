import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  ShieldCheck, 
  Heart,
  FileCode2
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface FooterProps {
  lang: Language;
  content: TranslationContent['footer'];
  whatsAppUrl: string;
  phoneNumber: string;
  onOpenExportHtml: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  content,
  whatsAppUrl,
  phoneNumber,
  onOpenExportHtml,
}) => {
  return (
    <footer id="contact" className="bg-[#002D57] text-white pt-16 pb-12 border-t-4 border-[#FFDD00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4] flex items-center justify-center border-2 border-[#FFDD00]">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute w-2 h-6 bg-[#FFDD00] rounded-xs"></div>
                  <div className="absolute h-2 w-6 bg-[#FFDD00] rounded-xs"></div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  AYLIN <span className="text-[#FFDD00]">Pharmacy</span>
                </span>
                <span className="block text-xs text-blue-200">
                  {lang === 'ar' ? 'صيدلية أيلين - صحتك أمانتنا' : 'Your Trusted Neighborhood Pharmacy'}
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-200/90 leading-relaxed max-w-sm">
              {content.about}
            </p>

            <div className="flex items-center gap-2 text-xs text-blue-300 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#FFDD00]" />
              <span>{content.license}</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-900/60 hover:bg-[#FFDD00] text-white hover:text-black flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-900/60 hover:bg-[#FFDD00] text-white hover:text-black flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-900/60 hover:bg-[#FFDD00] text-white hover:text-black flex items-center justify-center transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#FFDD00] uppercase tracking-wider">
              {content.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-200">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'خدماتنا الصيدلانية' : 'Key Services'}
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'طريقة الطلب والوصفات' : 'How to Order via WhatsApp'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'أقسام المنتجات والرعاية' : 'Healthcare Products'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'الموقع وساعات الدوام' : 'Location & Operating Hours'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-[#FFDD00] uppercase tracking-wider">
              {content.customerCare}
            </h4>
            
            <div className="space-y-3 text-sm text-blue-100">
              <a
                href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/40 hover:bg-blue-900/80 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#FFDD00] shrink-0" />
                <div>
                  <div className="text-xs text-blue-300">{lang === 'ar' ? 'رقم الهاتف المباشر' : 'Direct Phone Line'}</div>
                  <div className="font-bold text-white font-mono">{phoneNumber}</div>
                </div>
              </a>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/40 hover:bg-blue-900/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-blue-300">{lang === 'ar' ? 'طلب فوري عبر الواتساب' : 'Instant WhatsApp Service'}</div>
                  <div className="font-bold text-white font-mono">{phoneNumber}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/40">
                <Clock className="w-5 h-5 text-[#FFDD00] shrink-0" />
                <div className="text-xs">
                  <div><strong className="text-white">{lang === 'ar' ? 'السبت - الخميس:' : 'Sat - Thu:'}</strong> 9:00 AM - 11:30 PM</div>
                  <div><strong className="text-white">{lang === 'ar' ? 'الجمعة:' : 'Friday:'}</strong> 2:00 PM - 11:30 PM</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenExportHtml}
                className="text-xs py-2 px-3 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border border-amber-400/40 inline-flex items-center gap-2"
              >
                <FileCode2 className="w-3.5 h-3.5 text-[#FFDD00]" />
                <span>{lang === 'ar' ? 'تصدير وحفظ ملف index.html المستقل' : 'Export Standalone Single-File index.html'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <div>
            {content.rights}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">{content.privacy}</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">{content.terms}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
