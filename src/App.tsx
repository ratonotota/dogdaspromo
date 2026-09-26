/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GROUPS_DATA } from './data/groupsData';
import { WhatsAppGroup } from './types';
import { SimpleNav } from './components/SimpleNav';
import { CleanLanding } from './components/CleanLanding';

export default function App() {
  // Direct 1-click open to WhatsApp
  const handleJoinDirect = (group: WhatsAppGroup) => {
    window.open(group.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Clean top navigation with only official brand and Instagram */}
      <SimpleNav />

      {/* Ultra-Clean, High-Conversion Landing Flow */}
      <main className="flex-1 flex flex-col items-center">
        <CleanLanding
          groups={GROUPS_DATA}
          onJoinDirect={handleJoinDirect}
        />
      </main>
    </div>
  );
}
