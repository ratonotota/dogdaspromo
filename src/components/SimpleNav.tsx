import React from 'react';
import { Instagram } from 'lucide-react';
import officialMascot from '../assets/Images_fixed/mascote.jpg';

export const SimpleNav: React.FC = () => {
  return (
    <nav className="w-full max-w-md mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <img
          src={officialMascot}
          alt="Dog das Promo"
          referrerPolicy="no-referrer"
          className="w-8 h-8 rounded-full object-cover ring-1 ring-emerald-500/40 shadow-sm"
        />
        <span className="font-display font-extrabold text-sm tracking-tight text-white">
          DOG DAS PROMO
        </span>
      </div>

      <div className="flex items-center">
        <a
          href="https://www.instagram.com/dogdaspromo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-pink-400 transition-colors px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-sm"
        >
          <Instagram className="w-3.5 h-3.5 text-pink-400" />
          <span>Instagram</span>
        </a>
      </div>
    </nav>
  );
};
