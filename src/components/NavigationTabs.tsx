/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Navigation tabs for the 8 sections of the masterclass
 */

import React from 'react';
import { BookOpen, Clock, Target, CheckSquare, Compass, Calendar, FileText, Sparkles } from 'lucide-react';

export type SectionKey = 'study' | 'proc' | 'prio' | 'todo' | 'smart' | 'sched' | 'exam' | 'game';

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
    { id: 'study', label: 'Study Skills', icon: <BookOpen className="w-3.5 h-3.5" />, activeColor: 'bg-blue-600 border-blue-500 text-white' },
    { id: 'proc', label: 'Procrastination', icon: <Clock className="w-3.5 h-3.5" />, activeColor: 'bg-rose-600 border-rose-500 text-white' },
    { id: 'prio', label: 'Prioritising', icon: <Target className="w-3.5 h-3.5" />, activeColor: 'bg-emerald-600 border-emerald-500 text-white' },
    { id: 'todo', label: 'To-Do Lists', icon: <CheckSquare className="w-3.5 h-3.5" />, activeColor: 'bg-cyan-600 border-cyan-500 text-white' },
    { id: 'smart', label: 'SMART Goals', icon: <Compass className="w-3.5 h-3.5" />, activeColor: 'bg-purple-600 border-purple-500 text-white' },
    { id: 'sched', label: 'Schedules', icon: <Calendar className="w-3.5 h-3.5" />, activeColor: 'bg-pink-600 border-pink-500 text-white' },
    { id: 'exam', label: 'Exam Practice', icon: <FileText className="w-3.5 h-3.5" />, activeColor: 'bg-amber-500 border-amber-400 text-slate-950 font-bold', badge: '100m' },
    { id: 'game', label: 'Game Show', icon: <Sparkles className="w-3.5 h-3.5" />, activeColor: 'bg-indigo-600 border-indigo-500 text-white', badge: 'Live' }
  ];

  return (
    <nav className="sticky top-[61px] z-30 bg-blue-950/95 backdrop-blur-md px-3 py-2 border-b border-blue-800 shadow-md">
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
                  : 'bg-blue-900/40 text-blue-200 border-blue-800/60 hover:bg-blue-800/60 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isActive ? 'bg-black/25 text-white' : 'bg-blue-800 text-blue-200'
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
