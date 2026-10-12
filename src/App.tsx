/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowToOrder } from './components/HowToOrder';
import { Categories } from './components/Categories';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { PhoneConfigModal } from './components/PhoneConfigModal';
import { StandaloneHtmlExporter } from './components/StandaloneHtmlExporter';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [phoneNumber, setPhoneNumber] = useState('YOUR_9-DIGIT_NUMBER_HERE');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isPhoneConfigOpen, setIsPhoneConfigOpen] = useState(false);
  const [isExportHtmlOpen, setIsExportHtmlOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync RTL / LTR attribute on html tag whenever language changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    root.setAttribute('lang', lang);
    if (lang === 'ar') {
      root.classList.add('font-arabic');
      root.classList.remove('font-latin');
      document.title = 'صيدلية أيلين | AYLIN Pharmacy - صيدليتك الموثوقة للصحة والعافية';
    } else {
      root.classList.add('font-latin');
      root.classList.remove('font-arabic');
      document.title = 'AYLIN Pharmacy | صيدلية أيلين - Your Trusted Neighborhood Pharmacy';
    }
  }, [lang]);

  // Show / hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const currentContent = translations[lang];

  // Base WhatsApp URL with preset message
  const whatsAppMessage = lang === 'ar'
    ? 'مرحبا صيدلية أيلين، أود تقديم طلب جديد.'
    : 'Hello Aylin Pharmacy, I would like to place an order.';
  
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-white text-[#2F4F4F] flex flex-col ${lang === 'ar' ? 'font-arabic' : 'font-latin'}`}>
      
      {/* Top Header */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        content={currentContent.header}
        whatsAppUrl={whatsAppUrl}
        onOpenPhoneConfig={() => setIsPhoneConfigOpen(true)}
        onOpenExportHtml={() => setIsExportHtmlOpen(true)}
        phoneNumber={phoneNumber}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          content={currentContent.hero}
          whatsAppUrl={whatsAppUrl}
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
        />

        {/* Key Features (3 cards) */}
        <Features
          lang={lang}
          content={currentContent.features}
          whatsAppUrl={whatsAppUrl}
        />

        {/* How to Order (3 steps + interactive tool) */}
        <HowToOrder
          lang={lang}
          content={currentContent.howToOrder}
          whatsAppUrl={whatsAppUrl}
          phoneNumber={phoneNumber}
        />

        {/* Product Categories / Catalog */}
        <Categories
          lang={lang}
          content={currentContent.categories}
          phoneNumber={phoneNumber}
        />

        {/* Location & Hours Section (Map + schedule) */}
        <LocationHours
          lang={lang}
          content={currentContent.locationHours}
          whatsAppUrl={whatsAppUrl}
          phoneNumber={phoneNumber}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        content={currentContent.footer}
        whatsAppUrl={whatsAppUrl}
        phoneNumber={phoneNumber}
        onOpenExportHtml={() => setIsExportHtmlOpen(true)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#0055A4] border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95"
          aria-label="WhatsApp Order"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="text-xs sm:text-sm whitespace-nowrap drop-shadow-xs">
            {lang === 'ar' ? 'اطلب عبر الواتساب' : 'WhatsApp Order'}
          </span>
        </a>
      </div>

      {/* Prescription Preparation Modal */}
      <WhatsAppModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        lang={lang}
        content={currentContent.orderModal}
        phoneNumber={phoneNumber}
      />

      {/* WhatsApp Number Config Modal */}
      <PhoneConfigModal
        isOpen={isPhoneConfigOpen}
        onClose={() => setIsPhoneConfigOpen(false)}
        lang={lang}
        currentPhoneNumber={phoneNumber}
        onSavePhoneNumber={(newNum) => setPhoneNumber(newNum)}
      />

      {/* Standalone HTML Exporter Modal */}
      <StandaloneHtmlExporter
        isOpen={isExportHtmlOpen}
        onClose={() => setIsExportHtmlOpen(false)}
        lang={lang}
        phoneNumber={phoneNumber}
      />

    </div>
  );
}
