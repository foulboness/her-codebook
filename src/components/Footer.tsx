import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-20 border-t border-[#EAE5DE] bg-[#F7F4EF] text-stone-600">
      {/* Decorative Ribbon Divider */}
      <div className="flex items-center justify-center -mt-3.5">
        <div className="bg-[#FAF8F5] px-4 py-1 rounded-full border border-[#EAE5DE] flex items-center gap-2 text-stone-400 text-xs shadow-2xs">
          <span>✿</span>
          <span className="font-serif italic text-stone-600 text-[13px]">“Write code like poetry, build with gentle intent.”</span>
          <span>✿</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center space-y-3">
        <p className="font-serif text-lg sm:text-xl text-stone-800 font-normal">
          A little guide for curious minds
        </p>

        <p className="text-sm font-sans text-stone-600">
          Made with <span className="text-rose-500">♡</span> by <span className="font-medium text-stone-800">foulboness</span>
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-sans text-stone-500">
          <span>© 2026 Her Codebook · All rights reserved.</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 font-mono text-[11px]">
            Volume 1.0 • Autumn Edition
          </span>
        </div>
      </div>
    </footer>
  );
};
