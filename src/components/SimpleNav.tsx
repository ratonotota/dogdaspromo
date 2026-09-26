import React from 'react';
import { Settings2, Instagram } from 'lucide-react';
import dogMascotAvatar from '../assets/images/dog_mascot_avatar_1790459217536.jpg';

interface SimpleNavProps {
  onOpenSettings: () => void;
}

export const SimpleNav: React.FC<SimpleNavProps> = ({ onOpenSettings }) => {
  return (
    <nav className="w-full max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={dogMascotAvatar}
          alt="Dog das Promo"
          referrerPolicy="no-referrer"
          className="w-7 h-7 rounded-full object-cover ring-1 ring-emerald-500/50"
        />
        <span className="font-display font-extrabold text-sm tracking-tight text-white">
          DOG DAS PROMO
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-medium text-neutral-400 hover:text-pink-400 transition-colors px-2 py-1 rounded-md bg-neutral-900 border border-neutral-800"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>Instagram</span>
        </a>

        <button
          onClick={onOpenSettings}
          title="Editar links de WhatsApp"
          className="p-1.5 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900 rounded-lg transition-colors"
        >
          <Settings2 className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
