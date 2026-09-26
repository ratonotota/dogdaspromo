import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Star
} from 'lucide-react';
import officialMascot from '../assets/Images_fixed/mascote.jpg';
import { WhatsAppGroup } from '../types';

interface CleanLandingProps {
  groups: WhatsAppGroup[];
  onJoinDirect: (group: WhatsAppGroup) => void;
}

export const CleanLanding: React.FC<CleanLandingProps> = ({
  groups,
  onJoinDirect,
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 pt-2 pb-10 sm:pt-4">
      
      {/* 1. CENTRAL LOGO WITH USER'S FIXED MASCOT IMAGE */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-3 group">
          {/* Subtle warm glow behind mascot */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 via-emerald-500/20 to-sky-500/30 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
          
          <img
            src={officialMascot}
            alt="Dog das Promo Mascote Oficial"
            referrerPolicy="no-referrer"
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-2xl ring-2 ring-neutral-800 group-hover:scale-105 transition-transform"
          />
          <span className="absolute bottom-0 right-1 px-2 py-0.5 bg-emerald-400 text-neutral-950 text-[10px] font-black rounded-full uppercase tracking-wider shadow border border-neutral-950">
            OFICIAL
          </span>
        </div>

        {/* Clean, bold title with no underline */}
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2 text-balance">
          Pare de pagar caro. Receba as <span className="text-emerald-400">melhores promoções</span> no seu WhatsApp.
        </h1>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-xs mx-auto">
          Escolha seu grupo abaixo e entre de graça. Sem bate-papo, apenas ofertas reais verificadas.
        </p>
      </div>

      {/* 2. THE 6 GROUPS WITH COMPACT ENTRAR BUTTON & MORE ROOM FOR TITLE */}
      <div className="space-y-3 mb-6">
        {groups.map((group) => {
          return (
            <div
              key={group.id}
              className="group relative flex items-center justify-between p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 active:border-emerald-500/50 transition-all shadow-sm"
            >
              {/* Tappable Area (Icon + Text) */}
              <button
                type="button"
                onClick={() => onJoinDirect(group)}
                className="flex items-center gap-3 text-left flex-1 min-w-0 pr-3 cursor-pointer focus:outline-none"
              >
                {/* Official Custom Badge Icon */}
                <div className="relative shrink-0">
                  <img
                    src={group.iconImage || officialMascot}
                    alt={group.name}
                    referrerPolicy="no-referrer"
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover ring-1 ring-neutral-800 group-hover:ring-emerald-400/60 shadow-md group-hover:scale-105 active:scale-95 transition-transform"
                  />
                </div>

                {/* Group Title Only */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight truncate">
                    {group.name}
                  </h2>
                </div>
              </button>

              {/* Compact "Entrar" Action Button */}
              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => onJoinDirect(group)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 text-xs font-black shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap min-h-[38px]"
                >
                  <span>Entrar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. TRUST SIGNALS */}
      <div className="p-3 mb-6 rounded-xl bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-400 space-y-1.5">
        <div className="flex items-center gap-2 text-neutral-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Grupos 100% gratuitos e silenciosos</span>
        </div>
        <p className="text-neutral-400 text-[10px] leading-relaxed">
          Apenas os administradores do Dog das Promo enviam mensagens. Zero conversas paralelas e zero spam.
        </p>
      </div>

      {/* 4. FAST SOCIAL PROOF DEPOIMENTOS */}
      <div className="pt-2 border-t border-neutral-900 mb-6">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            Depoimentos de seguidores
          </span>
          <span className="text-[10px] text-neutral-500">Mais de 45 mil fãs</span>
        </div>

        <div className="space-y-2">
          {[
            {
              name: 'Mariana A. (@mari.alencar)',
              group: 'Grupo de Tecnologia',
              quote: 'Entrou o alerta com cupom na Magalu às 23h40. Comprei o S23 com R$ 850 de desconto!',
            },
            {
              name: 'Carlos Moura (@carlosedu_moura)',
              group: 'Grupo Fitness',
              quote: 'Peguei combo de Whey + Creatina pela metade do valor da farmácia. O Dog fareja tudo!',
            },
            {
              name: 'Juliana Silveira (@ju_silveira)',
              group: 'Grupo de Dona de Casa',
              quote: 'No grupo ninguém fica conversando bobagem, só o Dog manda as promoções reais. Já comprei Air Fryer barata demais!',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-xs"
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <strong className="text-white">{item.name}</strong>
                <span className="text-emerald-400 text-[10px] font-medium">{item.group}</span>
              </div>
              <p className="text-neutral-400 italic text-[11px] leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FOOTER */}
      <div className="text-center text-[10px] text-neutral-500 pt-3 border-t border-neutral-900 space-y-1">
        <p>🐶 Dog das Promo · Todos os direitos reservados</p>
        <p>Links seguros para lojas oficiais (Amazon, Mercado Livre, Shopee, Nike).</p>
      </div>

    </div>
  );
};
