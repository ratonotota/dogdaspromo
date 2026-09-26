import React from 'react';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  ShieldCheck, 
  Star,
  ExternalLink
} from 'lucide-react';
import officialMascot from '../assets/images/mascote_oficial_1790462237853.jpg';
import { WhatsAppGroup } from '../types';

interface CleanLandingProps {
  groups: WhatsAppGroup[];
  onJoinDirect: (group: WhatsAppGroup) => void;
  onCopyLink: (group: WhatsAppGroup) => void;
  copiedGroupId: string | null;
}

export const CleanLanding: React.FC<CleanLandingProps> = ({
  groups,
  onJoinDirect,
  onCopyLink,
  copiedGroupId,
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 pt-3 pb-10 sm:pt-5">
      
      {/* 1. CENTRAL LOGO WITH OFFICIAL MASCOT BADGE */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-3 group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
          <img
            src={officialMascot}
            alt="Dog das Promo Mascote Oficial"
            referrerPolicy="no-referrer"
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-neutral-900 shadow-2xl shadow-emerald-500/20 group-hover:scale-105 transition-transform"
          />
          <span className="absolute bottom-0 right-1 px-2 py-0.5 bg-emerald-400 text-neutral-950 text-[10px] font-black rounded-full uppercase tracking-wider shadow border-2 border-neutral-950">
            OFICIAL
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>@dogdaspromo no Instagram</span>
        </div>

        {/* The Exact Title the user loves */}
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2 text-balance">
          Pare de pagar caro. Receba as <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-4">melhores promoções</span> no seu WhatsApp.
        </h1>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-xs mx-auto">
          Escolha seu grupo abaixo e entre de graça. Sem bate-papo, apenas ofertas reais verificadas.
        </p>
      </div>

      {/* 2. THE 6 GROUPS WITH OFFICIAL ART BADGES */}
      <div className="space-y-3 mb-6">
        {groups.map((group) => {
          const isCopied = copiedGroupId === group.id;

          return (
            <div
              key={group.id}
              className="group relative flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 active:border-emerald-500/50 transition-all shadow-sm"
            >
              {/* Tappable Left Area (Icon + Text) */}
              <button
                type="button"
                onClick={() => onJoinDirect(group)}
                className="flex items-center gap-3 text-left flex-1 min-w-0 pr-2 cursor-pointer focus:outline-none"
              >
                {/* Official Custom Badge Icon */}
                <div className="relative shrink-0">
                  <img
                    src={group.iconImage || officialMascot}
                    alt={group.name}
                    referrerPolicy="no-referrer"
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-neutral-800 group-hover:ring-emerald-400/60 shadow-md group-hover:scale-105 active:scale-95 transition-transform"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight truncate">
                    {group.name}
                  </h2>
                  <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                    {group.description}
                  </p>
                </div>
              </button>

              {/* Action Buttons Right Side */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Join Button */}
                <button
                  type="button"
                  onClick={() => onJoinDirect(group)}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 text-xs font-black shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
                >
                  <svg className="w-4 h-4 fill-neutral-950 shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.745-.39-1.423-.589-2.348-2.029-2.42-2.124-.07-.095-.573-.762-.573-1.453 0-.691.363-1.031.492-1.174.129-.144.283-.18.377-.18.096 0 .191.001.275.006.088.005.207-.033.324.249.12.288.41 1.001.447 1.074.036.073.06.158.012.253-.049.096-.073.155-.145.24-.072.084-.153.188-.218.252-.073.072-.149.15-.064.296.084.145.375.619.805 1.002.554.493 1.02.646 1.165.719.144.072.229.06.314-.037.085-.096.363-.422.46-.567.097-.144.193-.12.325-.072.133.048.845.399.99.471.145.073.242.109.278.169.036.06.036.35-.108.755z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.81.487 3.51 1.332 4.978L2 22l5.163-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25a8.21 8.21 0 01-4.226-1.166l-.303-.18-3.073.778.82-2.997-.197-.319A8.204 8.204 0 013.75 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z"/>
                  </svg>
                  <span>Entrar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Quick Copy Link */}
                <button
                  type="button"
                  onClick={() => onCopyLink(group)}
                  title="Copiar link"
                  className="p-2.5 rounded-xl text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
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
              group: 'Grupo de Celular & Tech',
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
