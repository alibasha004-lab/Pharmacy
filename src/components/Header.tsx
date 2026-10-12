import React, { useState } from 'react';
import { 
  MessageCircle, 
  Globe, 
  Menu, 
  X, 
  Phone, 
  FileCode2, 
  Settings2,
  Clock,
  MapPin
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  content: TranslationContent['header'];
  whatsAppUrl: string;
  onOpenPhoneConfig: () => void;
  onOpenExportHtml: () => void;
  phoneNumber: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  content,
  whatsAppUrl,
  onOpenPhoneConfig,
  onOpenExportHtml,
  phoneNumber,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: content.navHome },
    { href: '#services', label: content.navFeatures },
    { href: '#how-to-order', label: content.navHowToOrder },
    { href: '#products', label: content.navCategories },
    { href: '#location', label: content.navLocation },
    { href: '#contact', label: content.navContact },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top emergency / quick info bar */}
      <div className="bg-[#002D57] text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-200">
              <Clock className="w-3.5 h-3.5 text-[#FFDD00]" />
              {lang === 'ar' 
                ? 'السبت - الخميس: 9:00 ص - 11:30 م | الجمعة: 2:00 م - 11:30 م' 
                : 'Sat - Thu: 9:00 AM - 11:30 PM | Fri: 2:00 PM - 11:30 PM'}
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-[#FFDD00]" />
              {lang === 'ar' ? 'شارع التجاري، حي النخيل' : 'Commercial Blvd, Al-Nakheel'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPhoneConfig}
              className="flex items-center gap-1 text-xs text-blue-200 hover:text-[#FFDD00] transition-colors py-0.5 px-2 rounded bg-blue-900/60 hover:bg-blue-900"
              title={lang === 'ar' ? 'تعديل رقم الواتساب' : 'Configure WhatsApp Number'}
            >
              <Settings2 className="w-3 h-3 text-[#FFDD00]" />
              <span>{lang === 'ar' ? 'الرقم:' : 'Number:'} {phoneNumber.replace('YOUR_9-DIGIT_NUMBER_HERE', 'Default')}</span>
            </button>

            <button
              onClick={onOpenExportHtml}
              className="flex items-center gap-1 text-xs text-amber-200 hover:text-white transition-colors py-0.5 px-2 rounded bg-amber-500/20 hover:bg-amber-500/30"
              title={lang === 'ar' ? 'تصدير كود HTML لملف منفصل' : 'Export Standalone HTML'}
            >
              <FileCode2 className="w-3 h-3 text-[#FFDD00]" />
              <span className="font-medium">{lang === 'ar' ? 'كود HTML' : 'Export HTML'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left side in LTR: Logo & Brand Name */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4] flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:bg-[#004482] transition-transform group-hover:scale-105">
                {/* Custom medical cross with pill symbol */}
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <div className="absolute w-2 h-7 bg-[#FFDD00] rounded-sm"></div>
                  <div className="absolute h-2 w-7 bg-[#FFDD00] rounded-sm"></div>
                  <div className="absolute w-3 h-3 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#0055A4] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-[#0055A4] tracking-tight leading-tight">
                  AYLIN <span className="text-[#FFDD00] bg-[#0055A4] px-1.5 py-0.5 rounded text-sm sm:text-base font-bold ml-0.5 inline-block text-black">Rx</span>
                </span>
                <span className="text-xs font-semibold text-[#2F4F4F]/80">
                  {lang === 'ar' ? 'صيدلية أيلين' : 'AYLIN Pharmacy'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#2F4F4F] hover:text-[#0055A4] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0055A4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side in LTR: Language Switcher & WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher Button */}
              <button
                onClick={onToggleLang}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-[#0055A4]/20 hover:border-[#0055A4] text-sm font-semibold text-[#0055A4] hover:bg-blue-50/70 transition-all focus:outline-none focus:ring-2 focus:ring-[#0055A4]/20"
                aria-label="Switch Language"
                title={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              >
                <Globe className="w-4 h-4 text-[#0055A4]" />
                <span>{content.langToggle}</span>
                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#FFDD00] text-black">
                  {lang === 'en' ? 'EN' : 'AR'}
                </span>
              </button>

              {/* WhatsApp Order Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDD00] hover:bg-[#e6c700] text-black font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 border border-amber-400/40"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span>{content.orderWhatsApp}</span>
              </a>
            </div>

            {/* Mobile Menu & Language trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onToggleLang}
                className="p-2 rounded-lg border border-slate-200 text-xs font-bold text-[#0055A4] bg-slate-50"
                aria-label="Switch language"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#2F4F4F] hover:bg-blue-50 hover:text-[#0055A4]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FFDD00] hover:bg-[#ebd000] text-black font-bold shadow"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                <span>{content.orderWhatsApp}</span>
              </a>

              <button
                onClick={() => {
                  onToggleLang();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#0055A4] text-[#0055A4] font-bold text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{content.langToggle}</span>
              </button>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    onOpenPhoneConfig();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 text-xs py-2 px-3 border border-slate-200 rounded-lg text-slate-600 flex items-center justify-center gap-1.5"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'تعديل الرقم' : 'Config Phone'}</span>
                </button>
                <button
                  onClick={() => {
                    onOpenExportHtml();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 text-xs py-2 px-3 border border-amber-300 bg-amber-50 rounded-lg text-amber-900 flex items-center justify-center gap-1.5 font-medium"
                >
                  <FileCode2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>{lang === 'ar' ? 'تصدير HTML' : 'Export HTML'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
