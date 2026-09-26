import React from 'react';
import { Instagram, ShieldCheck, Heart, Settings2 } from 'lucide-react';
import dogMascotAvatar from '../assets/images/dog_mascot_avatar_1790459217536.jpg';

interface FooterProps {
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSettings }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pb-16 md:pb-8 pt-12 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src={dogMascotAvatar}
                alt="Dog das Promo"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover ring-1 ring-emerald-500/50"
              />
              <span className="font-display font-extrabold text-base text-white tracking-tight">
                DOG DAS PROMO
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              A comunidade que mais economiza na internet brasileira. Farejamos cupons secretos, promoções relâmpago e bugs de preço diariamente para você não pagar caro.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Seguir no Instagram @dogdaspromo</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3">
              Grupos Oficiais
            </h4>
            <ul className="space-y-2">
              <li><a href="#celular" className="hover:text-emerald-400 transition-colors">Celulares & Tech</a></li>
              <li><a href="#casa" className="hover:text-emerald-400 transition-colors">Dona de Casa & Lar</a></li>
              <li><a href="#fitness" className="hover:text-emerald-400 transition-colors">Fitness & Suplementos</a></li>
              <li><a href="#tenis" className="hover:text-emerald-400 transition-colors">Tênis & Sneakers</a></li>
              <li><a href="#perfume" className="hover:text-emerald-400 transition-colors">Perfumes & Beleza</a></li>
              <li><a href="#plantas" className="hover:text-emerald-400 transition-colors">Plantas & Jardim</a></li>
            </ul>
          </div>

          {/* Legal / Settings */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-3">
              Transparência
            </h4>
            <p className="text-[11px] leading-relaxed mb-3 text-neutral-500">
              Somos um canal independente de curadoria de ofertas e afiliados. Os preços e estoques são definidos exclusivamente pelas lojas parceiras e podem sofrer alteração a qualquer momento.
            </p>
            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 text-[11px] transition-colors"
            >
              <Settings2 className="w-3 h-3" />
              <span>Configurar Links dos Grupos</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Dog das Promo · Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito para os seguidores fiéis do cão farejador 🐶
          </p>
        </div>
      </div>
    </footer>
  );
};
