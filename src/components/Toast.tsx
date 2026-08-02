import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start space-x-3 p-4 rounded-xl bg-[#111217] border border-[#f5bd5e]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-l-4 border-l-[#f5bd5e] text-white animate-slideInRight"
        >
          <div className="text-[#f5bd5e] mt-0.5 shrink-0">
            {toast.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-red-400" />
            ) : toast.type === 'info' ? (
              <Sparkles className="w-5 h-5" />
            ) : (
              <CheckCircle2 className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-outfit text-xs uppercase tracking-wider font-bold text-[#f7de98]">
              {toast.title}
            </h4>
            <p className="font-outfit text-xs text-[#d3c4b1] mt-0.5 leading-relaxed">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-[#d3c4b1] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
