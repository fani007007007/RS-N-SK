/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Navigation tabs for the 9 sections of the ESL Mastery Lab
 */

import React from 'react';
import { Utensils, SpellCheck, Scale, MessageSquare, PawPrint, BookOpen, PenTool, ClipboardList, Sparkles } from 'lucide-react';

export type SectionKey = 'vocab' | 'grammar' | 'comp' | 'idioms' | 'animals' | 'reading' | 'writing' | 'practice' | 'game';

interface NavigationTabsProps {
  activeTab: SectionKey;
  onTabChange: (tab: SectionKey) => void;
}

interface TabDef {
  id: SectionKey;
  label: string;
  icon: React.ReactNode;
  activeColor: string;
  badge?: string;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: TabDef[] = [
    { id: 'vocab', label: 'Vocabulary', icon: <Utensils className="w-3.5 h-3.5" />, activeColor: 'bg-teal-700 border-teal-600 text-white' },
    { id: 'grammar', label: 'Grammar', icon: <SpellCheck className="w-3.5 h-3.5" />, activeColor: 'bg-sky-700 border-sky-600 text-white' },
    { id: 'comp', label: 'Comparatives', icon: <Scale className="w-3.5 h-3.5" />, activeColor: 'bg-pink-600 border-pink-500 text-white' },
    { id: 'idioms', label: 'Idioms', icon: <MessageSquare className="w-3.5 h-3.5" />, activeColor: 'bg-amber-600 border-amber-500 text-white' },
    { id: 'animals', label: 'Animals', icon: <PawPrint className="w-3.5 h-3.5" />, activeColor: 'bg-emerald-700 border-emerald-600 text-white' },
    { id: 'reading', label: 'Reading', icon: <BookOpen className="w-3.5 h-3.5" />, activeColor: 'bg-purple-700 border-purple-600 text-white' },
    { id: 'writing', label: 'Writing', icon: <PenTool className="w-3.5 h-3.5" />, activeColor: 'bg-rose-700 border-rose-600 text-white' },
    { id: 'practice', label: 'Practice Lab', icon: <ClipboardList className="w-3.5 h-3.5" />, activeColor: 'bg-red-600 border-red-500 text-white font-bold', badge: '14 Drills' },
    { id: 'game', label: 'Game Show', icon: <Sparkles className="w-3.5 h-3.5" />, activeColor: 'bg-amber-400 border-amber-300 text-slate-950 font-black', badge: 'Live' }
  ];

  return (
    <nav className="sticky top-[61px] z-30 bg-teal-950/95 backdrop-blur-md px-3 py-2 border-b border-teal-800 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap border shrink-0 ${
                isActive
                  ? `${tab.activeColor} shadow-md scale-102`
                  : 'bg-teal-900/40 text-teal-200 border-teal-800/60 hover:bg-teal-800/60 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isActive ? 'bg-black/25 text-white' : 'bg-teal-800 text-teal-200'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
