/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { GROUPS_DATA } from './data/groupsData';
import { WhatsAppGroup } from './types';
import { SimpleNav } from './components/SimpleNav';
import { CleanLanding } from './components/CleanLanding';
import { SettingsModal } from './components/SettingsModal';

const STORAGE_KEY = 'dog_das_promo_custom_urls';

export default function App() {
  const [customUrls, setCustomUrls] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [copiedGroupId, setCopiedGroupId] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Merge default group data with custom URLs if configured
  const groups = useMemo(() => {
    return GROUPS_DATA.map((group) => {
      if (customUrls[group.id]) {
        return { ...group, whatsappUrl: customUrls[group.id] };
      }
      return group;
    });
  }, [customUrls]);

  // Direct 1-click open to WhatsApp
  const handleJoinDirect = (group: WhatsAppGroup) => {
    window.open(group.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = (group: WhatsAppGroup) => {
    navigator.clipboard.writeText(group.whatsappUrl);
    setCopiedGroupId(group.id);
    setTimeout(() => {
      setCopiedGroupId(null);
    }, 2000);
  };

  const handleSaveUrls = (newUrls: Record<string, string>) => {
    setCustomUrls(newUrls);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUrls));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setCustomUrls({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Discreet top bar */}
      <SimpleNav onOpenSettings={() => setIsSettingsOpen(true)} />

      {/* Ultra-Clean, High-Conversion Landing Flow (< 5 seconds to decide on mobile) */}
      <main className="flex-1 flex flex-col items-center">
        <CleanLanding
          groups={groups}
          onJoinDirect={handleJoinDirect}
          onCopyLink={handleCopyLink}
          copiedGroupId={copiedGroupId}
        />
      </main>

      {/* Admin Settings Modal for WhatsApp group URLs */}
      <SettingsModal
        groups={groups}
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSaveUrls={handleSaveUrls}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
