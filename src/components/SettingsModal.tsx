import React, { useState } from 'react';
import { X, Save, RotateCcw, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { WhatsAppGroup } from '../types';

interface SettingsModalProps {
  groups: WhatsAppGroup[];
  isOpen: boolean;
  onClose: () => void;
  onSaveUrls: (newUrls: Record<string, string>) => void;
  onResetDefaults: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  groups,
  isOpen,
  onClose,
  onSaveUrls,
  onResetDefaults,
}) => {
  const [urls, setUrls] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    groups.forEach((g) => {
      initial[g.id] = g.whatsappUrl;
    });
    return initial;
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (id: string, value: string) => {
    setUrls((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveUrls(urls);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              Painel do Administrador
            </span>
            <h3 className="font-display font-bold text-lg text-white">
              Personalizar Links dos Grupos de WhatsApp
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <form onSubmit={handleSave} className="overflow-y-auto py-4 space-y-3.5 pr-1 flex-1">
          <p className="text-xs text-neutral-400">
            Cole abaixo os links reais dos seus grupos de WhatsApp (ex: <code>https://chat.whatsapp.com/...</code>). Eles ficam salvos no navegador para você testar e usar na sua bio do Instagram!
          </p>

          {groups.map((group) => (
            <div key={group.id} className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                <LinkIcon className="w-3.5 h-3.5 text-emerald-400" />
                {group.name}
              </label>
              <input
                type="url"
                value={urls[group.id] || ''}
                onChange={(e) => handleChange(group.id, e.target.value)}
                placeholder="https://chat.whatsapp.com/seu-codigo"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          ))}

          {/* Action buttons */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetDefaults}
              className="flex items-center gap-1.5 px-3 py-2 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Padrões
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-neutral-950" />
                  <span>Links Salvos com Sucesso!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-neutral-950" />
                  <span>Salvar Links</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
