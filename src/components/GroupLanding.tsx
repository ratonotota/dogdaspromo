import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  BellRing, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import officialMascot from '../assets/Images_fixed/mascote.jpg';
import { WhatsAppGroup, Testimonial } from '../types';

interface GroupLandingProps {
  group: WhatsAppGroup;
  testimonial?: Testimonial;
  onJoin: (group: WhatsAppGroup) => void;
  onBackToAll: () => void;
}

export const GroupLanding: React.FC<GroupLandingProps> = ({
  group,
  testimonial,
  onJoin,
  onBackToAll,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    const currentUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${group.name} - Dog das Promo`,
          text: `Entre no ${group.name} oficial do Dog das Promo no WhatsApp para receber ofertas e bugs de preço!`,
          url: currentUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    
    // Fallback: copy link
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 pt-1 pb-10 sm:pt-3 animate-fade-in">
      {/* 1. TOP UTILITY BAR (Voltar a todos os grupos + Compartilhar) */}
      <div className="flex items-center justify-between mb-4 text-xs">
        <button
          type="button"
          onClick={onBackToAll}
          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-1.5 px-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/80 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Ver outros grupos</span>
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-1.5 px-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/80 active:scale-95"
          title="Compartilhar página"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Compartilhar</span>
            </>
          )}
        </button>
      </div>

      {/* 2. HERO CARD - DESIGNED SPECIFICALLY FOR CONVERSION */}
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900/95 border border-neutral-800 p-5 sm:p-6 mb-4 shadow-2xl">
        {/* Glow behind badge */}
        <div 
          className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ backgroundColor: group.accentColor }}
        />

        <div className="flex flex-col items-center text-center">
          {/* Group Icon with Avatar Ring */}
          <div className="relative mb-3.5">
            <div 
              className="absolute -inset-1.5 rounded-full blur-md opacity-40 animate-pulse"
              style={{ backgroundColor: group.accentColor }}
            />
            <img
              src={group.iconImage || officialMascot}
              alt={group.name}
              referrerPolicy="no-referrer"
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-2xl ring-2 ring-neutral-700/80"
            />
            {/* Small Dog Badge verifying authenticity */}
            <div className="absolute -bottom-1 -right-1 p-1 bg-neutral-950 rounded-full border border-neutral-800 shadow">
              <img
                src={officialMascot}
                alt="Dog das Promo"
                className="w-5 h-5 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Group Category Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800 text-[11px] font-semibold text-emerald-400 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Grupo VIP Oficial · WhatsApp</span>
          </div>

          {/* Clean Focused Title */}
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2">
            {group.name}
          </h1>

          {/* Short punchy description */}
          <p className="text-xs sm:text-sm text-neutral-300 mb-4 max-w-xs leading-relaxed">
            {group.description}
          </p>

          {/* Bullets: What the user gets */}
          <div className="w-full bg-neutral-950/60 rounded-2xl p-3.5 border border-neutral-800/80 mb-5 text-left space-y-2">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
              O que você recebe no grupo:
            </p>
            {group.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
            <div className="flex items-start gap-2 text-xs text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Sem spam nem conversas: apenas as ofertas garimpadas</span>
            </div>
          </div>

          {/* PRIMARY CALL TO ACTION BUTTON (HUGE CONVERSION FOCUS) */}
          <button
            type="button"
            onClick={() => onJoin(group)}
            className="w-full py-4 px-6 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-black text-base sm:text-lg shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>ENTRAR NO GRUPO GRÁTIS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Scarcity / Micro-copy */}
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{group.membersCount} pessoas já estão economizando</span>
          </div>
        </div>
      </div>

      {/* 3. RECENT DEAL EXAMPLE (CONCRETE SAVINGS PROOF) */}
      {group.sampleDeals && group.sampleDeals.length > 0 && (
        <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Exemplo de alerta recente no grupo:
            </span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              -{group.sampleDeals[0].discount}% OFF
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <p className="text-xs font-bold text-white truncate">
                {group.sampleDeals[0].title}
              </p>
              <p className="text-[10px] text-neutral-400">
                Loja: {group.sampleDeals[0].store}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-neutral-500 line-through block">
                R$ {group.sampleDeals[0].originalPrice}
              </span>
              <span className="text-sm font-black text-emerald-400">
                R$ {group.sampleDeals[0].promoPrice}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. DEDICATED SOCIAL PROOF / TESTIMONIAL */}
      {testimonial && (
        <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 mb-4 text-xs">
          <div className="flex items-center gap-2.5 mb-2">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-9 h-9 rounded-full object-cover ring-1 ring-neutral-700"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-xs">{testimonial.name}</span>
                <span className="text-[10px] text-emerald-400 font-medium">· {testimonial.savedAmount}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[10px] text-neutral-500 ml-1">{testimonial.productBought}</span>
              </div>
            </div>
          </div>
          <p className="text-neutral-300 italic text-[11px] leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>
      )}

      {/* 5. SECOND CONVERSION HOOK (BOTTOM CTA) */}
      <div className="p-4 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 text-center mb-6">
        <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
        <h2 className="text-sm font-bold text-white mb-1">
          Acesso 100% Gratuito
        </h2>
        <p className="text-[11px] text-neutral-400 mb-3 max-w-xs mx-auto">
          Não cobramos nada. O grupo é silencioso, sem notificações chatas de membros conversando.
        </p>

        <button
          type="button"
          onClick={() => onJoin(group)}
          className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-black text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>QUERO ENTRAR NO WHATSAPP</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 6. FOOTER */}
      <div className="text-center text-[10px] text-neutral-500 space-y-1">
        <p>🐶 Dog das Promo · Comunidade de Ofertas</p>
        <button
          type="button"
          onClick={onBackToAll}
          className="text-emerald-400 hover:underline inline-block mt-1"
        >
          Ver lista com todos os 6 grupos
        </button>
      </div>
    </div>
  );
};
