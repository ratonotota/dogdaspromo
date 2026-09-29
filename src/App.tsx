/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GROUPS_DATA, TESTIMONIALS_DATA } from './data/groupsData';
import { WhatsAppGroup } from './types';
import { SimpleNav } from './components/SimpleNav';
import { CleanLanding } from './components/CleanLanding';
import { GroupLanding } from './components/GroupLanding';

export default function App() {
  const [selectedGroupSlug, setSelectedGroupSlug] = useState<string | null>(null);

  // Parse URL on mount and whenever popstate (browser back/forward) fires
  useEffect(() => {
    const parseUrl = () => {
      const params = new URLSearchParams(window.location.search);
      // Support both ?g=slug, ?group=slug, or query matching slug (e.g. ?tecnologia or ?fitness)
      const gParam = params.get('g') || params.get('group');
      if (gParam) {
        setSelectedGroupSlug(gParam.toLowerCase());
        return;
      }

      // Check if path or standalone search matches slug, e.g. /tecnologia or ?plantas
      const pathPart = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (pathPart && GROUPS_DATA.some(g => g.slug === pathPart || g.id === pathPart)) {
        setSelectedGroupSlug(pathPart);
        return;
      }

      const searchKey = Array.from(params.keys())[0]?.toLowerCase();
      if (searchKey && GROUPS_DATA.some(g => g.slug === searchKey || g.id === searchKey)) {
        setSelectedGroupSlug(searchKey);
        return;
      }

      setSelectedGroupSlug(null);
    };

    parseUrl();
    window.addEventListener('popstate', parseUrl);
    return () => window.removeEventListener('popstate', parseUrl);
  }, []);

  // Update URL state when changing views
  const navigateToGroup = (group: WhatsAppGroup) => {
    setSelectedGroupSlug(group.slug);
    const newUrl = `${window.location.pathname}?g=${group.slug}`;
    window.history.pushState({ groupSlug: group.slug }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAll = () => {
    setSelectedGroupSlug(null);
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct 1-click open to WhatsApp
  const handleJoinDirect = (group: WhatsAppGroup) => {
    window.open(group.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Find active group if a slug is selected
  const activeGroup = selectedGroupSlug
    ? GROUPS_DATA.find(
        (g) =>
          g.slug === selectedGroupSlug ||
          g.id === selectedGroupSlug ||
          (selectedGroupSlug === 'tech' && g.id === 'celular')
      )
    : null;

  // Find corresponding testimonial for active group
  const activeTestimonial = activeGroup
    ? TESTIMONIALS_DATA.find((t) => t.groupName.toLowerCase().includes(activeGroup.categoryLabel.toLowerCase()) || t.groupName.toLowerCase().includes(activeGroup.name.toLowerCase())) || TESTIMONIALS_DATA[0]
    : undefined;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Clean top navigation with only official brand and Instagram */}
      <SimpleNav />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center">
        {activeGroup ? (
          <GroupLanding
            group={activeGroup}
            testimonial={activeTestimonial}
            onJoin={handleJoinDirect}
            onBackToAll={navigateToAll}
          />
        ) : (
          <CleanLanding
            groups={GROUPS_DATA}
            onJoinDirect={handleJoinDirect}
            onSelectGroup={navigateToGroup}
          />
        )}
      </main>
    </div>
  );
}
