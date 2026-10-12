import React, { useState } from 'react';
import { X, Phone, Check, RefreshCw, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface PhoneConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currentPhoneNumber: string;
  onSavePhoneNumber: (newNumber: string) => void;
}

export const PhoneConfigModal: React.FC<PhoneConfigModalProps> = ({
  isOpen,
  onClose,
  lang,
  currentPhoneNumber,
  onSavePhoneNumber,
}) => {
  const [phoneNumber, setPhoneNumber] = useState(currentPhoneNumber);

  if (!isOpen) return null;

  const handleSave = () => {
    onSavePhoneNumber(phoneNumber.trim() || 'YOUR_9-DIGIT_NUMBER_HERE');
    onClose();
  };

  const handleReset = () => {
    setPhoneNumber('YOUR_9-DIGIT_NUMBER_HERE');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0055A4] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Phone className="w-5 h-5 text-[#FFDD00]" />
            <h3 className="text-base font-bold">
              {lang === 'ar' ? 'إعداد رقم الواتساب والهاتف' : 'Configure WhatsApp & Phone'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-[#2F4F4F]">
            {lang === 'ar'
              ? 'يمكنك وضع رقم هاتفك الفعلي هنا (مثلاً: 966501234567) لتحديث جميع روابط الواتساب في الموقع فوراً.'
              : 'Set your real pharmacy WhatsApp number (e.g. 966501234567 or 18005550199) to update all WhatsApp buttons live.'}
          </p>

          <div>
            <label className="block text-xs font-bold text-[#2F4F4F] mb-1.5 uppercase tracking-wider">
              {lang === 'ar' ? 'رقم الواتساب (مع رمز الدولة بدون +)' : 'WhatsApp Phone Number (with Country Code)'}
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 966501234567"
              className="w-full px-4 py-2.5 text-sm font-mono rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055A4]/40"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPhoneNumber('966501234567')}
              className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-mono"
            >
              +966 Sample
            </button>
            <button
              type="button"
              onClick={() => setPhoneNumber('971501234567')}
              className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-mono"
            >
              +971 Sample
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{lang === 'ar' ? 'افتراضي' : 'Reset Placeholder'}</span>
            </button>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              {lang === 'ar' 
                ? 'الرابط المطلوب بالمواصفات: wa.me/YOUR_9-DIGIT_NUMBER_HERE?text=...' 
                : 'Standard format specified: wa.me/YOUR_9-DIGIT_NUMBER_HERE?text=...'}
            </span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl"
          >
            {lang === 'ar' ? 'إلغاء' : 'Cancel'}
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-xs font-bold text-white bg-[#0055A4] hover:bg-[#003B73] rounded-xl flex items-center gap-1.5 shadow"
          >
            <Check className="w-4 h-4" />
            <span>{lang === 'ar' ? 'حفظ وتطبيق' : 'Save & Apply'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
