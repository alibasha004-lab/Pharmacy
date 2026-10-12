import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Upload, 
  Check, 
  FileText, 
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  content: TranslationContent['orderModal'];
  phoneNumber: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  lang,
  content,
  phoneNumber,
}) => {
  const [patientName, setPatientName] = useState('');
  const [notes, setNotes] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
      setHasPhoto(true);
    }
  };

  const generateWhatsAppUrl = () => {
    let message = '';
    if (lang === 'ar') {
      message = `مرحباً صيدلية أيلين، أود تقديم طلب وصفة طبية جديدة:\n`;
      if (patientName.trim()) message += `👤 اسم المريض: ${patientName.trim()}\n`;
      if (notes.trim()) message += `📝 تفاصيل الطلب والأدوية:\n${notes.trim()}\n`;
      if (hasPhoto) message += `📸 سأرسل صورة الوصفة الطبية في المحادثة مباشرة الآن.\n`;
      message += `الرجاء تأكيد استلام الطلب وتجهيزه. شكراً!`;
    } else {
      message = `Hello Aylin Pharmacy, I would like to place a prescription order:\n`;
      if (patientName.trim()) message += `👤 Patient Name: ${patientName.trim()}\n`;
      if (notes.trim()) message += `📝 Medications / Notes:\n${notes.trim()}\n`;
      if (hasPhoto) message += `📸 I am sending my prescription photo in this chat now.\n`;
      message += `Please confirm receipt and estimated prep time. Thank you!`;
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0055A4] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-[#FFDD00] uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>AYLIN Rx Care</span>
          </div>

          <h3 className="text-xl font-bold">
            {content.title}
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            {content.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          <div>
            <label className="block text-xs font-bold text-[#2F4F4F] uppercase tracking-wider mb-1">
              {content.nameLabel}
            </label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder={content.namePlaceholder}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4]/30 focus:border-[#0055A4]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2F4F4F] uppercase tracking-wider mb-1">
              {content.notesLabel}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={content.notesPlaceholder}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4]/30 focus:border-[#0055A4]"
            />
          </div>

          {/* Prescription Upload Area */}
          <div>
            <label className="block text-xs font-bold text-[#2F4F4F] uppercase tracking-wider mb-1">
              {content.uploadLabel}
            </label>
            <label className="border-2 border-dashed border-slate-300 hover:border-[#0055A4] bg-slate-50 hover:bg-blue-50/50 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <Upload className="w-7 h-7 text-[#0055A4] mb-1.5" />
              <span className="text-xs font-bold text-[#0055A4]">
                {selectedFileName ? selectedFileName : (lang === 'ar' ? 'اختر صورة من جهازك أو التقط صورة' : 'Select prescription image or take photo')}
              </span>
              <span className="text-[11px] text-[#2F4F4F]/70 mt-0.5">
                {content.uploadHint}
              </span>
            </label>

            {hasPhoto && (
              <div className="mt-2 flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  {lang === 'ar' ? 'تم اختيار الصورة جاهزة للمحادثة' : 'Photo marked for WhatsApp chat'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setHasPhoto(false);
                    setSelectedFileName('');
                  }}
                  className="text-red-500 hover:underline text-[11px]"
                >
                  {lang === 'ar' ? 'إزالة' : 'Remove'}
                </button>
              </div>
            )}
          </div>

          <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-2.5 text-xs text-[#2F4F4F]">
            <ShieldCheck className="w-4 h-4 text-[#0055A4] shrink-0 mt-0.5" />
            <span>
              {lang === 'ar' 
                ? 'ملاحظة: النقر على الزر أدناه سيفتح تطبيق الواتساب مباشرة برقم الصيدلية المعتمد مع كامل البيانات المكتوبة.' 
                : 'Note: Clicking the button below opens WhatsApp directly with our verified pharmacy number and pre-formatted text.'}
            </span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
          >
            {content.cancelBtn}
          </button>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{content.sendBtn}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
