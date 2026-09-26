import React from 'react';
import { 
  ArrowRight, 
  Sprout, 
  Smartphone, 
  Home, 
  Dumbbell, 
  Footprints, 
  Sparkle,
  Copy,
  Check,
  ShieldCheck,
  Star
} from 'lucide-react';
import dogMascotAvatar from '../assets/images/dog_mascot_avatar_1790459217536.jpg';
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
  // Category specific icons, colors & details
  const categoryConfig: Record<string, { 
    icon: React.ReactNode; 
    bgAccent: string; 
    borderHover: string;
    pillText: string;
  }> = {
    plantas: {
      icon: <Sprout className="w-6 h-6 text-emerald-400 shrink-0" />,
      bgAccent: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      borderHover: 'hover:border-emerald-500/60 active:border-emerald-400',
      pillText: 'Mudinhas, orquídeas, suculentas & adubos',
    },
    celular: {
      icon: <Smartphone className="w-6 h-6 text-blue-400 shrink-0" />,
      bgAccent: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      borderHover: 'hover:border-blue-500/60 active:border-blue-400',
      pillText: 'iPhones, Xiaomi, Galaxy & fones',
    },
    casa: {
      icon: <Home className="w-6 h-6 text-rose-400 shrink-0" />,
      bgAccent: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      borderHover: 'hover:border-rose-500/60 active:border-rose-400',
      pillText: 'Air fryer, panelas & robôs aspiradores',
    },
    fitness: {
      icon: <Dumbbell className="w-6 h-6 text-amber-400 shrink-0" />,
      bgAccent: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      borderHover: 'hover:border-amber-500/60 active:border-amber-400',
      pillText: 'Creatina, Whey & roupas de academia',
    },
    tenis: {
      icon: <Footprints className="w-6 h-6 text-purple-400 shrink-0" />,
      bgAccent: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      borderHover: 'hover:border-purple-500/60 active:border-purple-400',
      pillText: 'Nike, Adidas, corrida & casuais',
    },
    perfume: {
      icon: <Sparkle className="w-6 h-6 text-fuchsia-400 shrink-0" />,
      bgAccent: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
      borderHover: 'hover:border-fuchsia-500/60 active:border-fuchsia-400',
      pillText: 'Importados originais & maquiagem',
    },
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 pt-2 pb-10 sm:pt-4">
      
      {/* 1. BRAND HEADER - OPTIMIZED FOR MOBILE SCREEN */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-3">
          <img
            src={dogMascotAvatar}
            alt="Dog das Promo"
            referrerPolicy="no-referrer"
            className="w-20 h-20 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10"
          />
          <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-emerald-400 text-neutral-950 text-[9px] font-black rounded uppercase tracking-wider">
            OFICIAL
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 font-medium mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>@dogdaspromo no Instagram</span>
        </div>

        {/* Kept Title that the user loved */}
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2 text-balance">
          Pare de pagar caro. Receba as <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-4">melhores promoções</span> no seu WhatsApp.
        </h1>

        <p className="text-xs text-neutral-400 max-w-xs mx-auto">
          Escolha seu grupo abaixo e entre de graça. Sem bate-papo, apenas ofertas reais verificadas.
        </p>
      </div>

      {/* 2. THE 6 GROUPS (Direct, High-Conversion, Thumb-Friendly Tap Target >= 48px) */}
      <div className="space-y-3 mb-6">
        {groups.map((group) => {
          const config = categoryConfig[group.category] || {
            icon: <Smartphone className="w-6 h-6 text-emerald-400 shrink-0" />,
            bgAccent: 'bg-neutral-800 text-neutral-200 border-neutral-700',
            borderHover: 'hover:border-neutral-700',
            pillText: group.description,
          };

          const isCopied = copiedGroupId === group.id;

          return (
            <div
              key={group.id}
              className={`group relative flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 transition-all shadow-sm ${config.borderHover}`}
            >
              {/* Entire Left Area is Tappable */}
              <button
                type="button"
                onClick={() => onJoinDirect(group)}
                className="flex items-center gap-3 text-left flex-1 min-w-0 pr-2 cursor-pointer focus:outline-none"
              >
                <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-105 active:scale-95 transition-transform">
                  {config.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight truncate">
                    {group.name}
                  </h2>
                  <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                    {config.pillText}
                  </p>
                </div>
              </button>

              {/* Action Buttons Right Side */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Big Direct Join Button (Min 44px tap target) */}
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

                {/* Quick Copy Icon */}
                <button
                  type="button"
                  onClick={() => onCopyLink(group)}
                  title="Copiar link"
                  className="p-2.5 rounded-xl text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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

      {/* 3. TRUST SIGNALS (Instant Reassurance in Mobile Viewport) */}
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
              group: 'Grupo de Celular',
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
