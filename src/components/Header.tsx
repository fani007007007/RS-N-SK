/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Header component for ESL Mastery Lab
 * Author & Creator: Fani
 * © 2026 Fani. All rights reserved.
 */

import React from 'react';
import { Award, ShieldCheck, Share2, ZoomIn, ZoomOut, Maximize2, Minimize2, PanelRightClose, PanelRightOpen, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  onOpenShareModal: () => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenShareModal,
  isSidebarOpen,
  onToggleSidebar,
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  isFullscreen,
  onToggleFullscreen,
  soundOn,
  onToggleSound
}) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950 text-white shadow-xl border-b border-teal-800/60">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Title and Branding */}
        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">📚</span>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              ESL Mastery Lab
              <span className="hidden sm:inline text-teal-300 font-normal">|</span>
              <span className="text-teal-200 text-sm sm:text-base font-semibold">Vocabulary, Grammar, Comparatives &amp; Chaos Arcade</span>
            </h1>
          </div>
          <p className="text-xs text-teal-200/90 mt-0.5">
            Partitives • Animal Families • Countable/Uncountable • Idioms • Animals • Reading &amp; Writing • 21 Board Games
          </p>
        </div>

        {/* Creator Attribution & Protection Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Creator Attribution Pill */}
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-200 border border-amber-300/40 px-3 py-1 rounded-full text-xs font-bold shadow-inner">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Created by Fani</span>
            <span className="text-amber-400/70 font-normal">• © All Rights Reserved</span>
          </div>

          {/* Immutable Security Tag */}
          <div className="hidden lg:inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>🔒 Locked Online Master</span>
          </div>

          {/* Share & Certificate Action Button */}
          <button
            onClick={onOpenShareModal}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-3.5 py-1.5 rounded-lg text-xs shadow-md transition-all active:scale-95 cursor-pointer border border-amber-300/40"
            title="View Official Live Link & Copyright Certificate"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Live Link &amp; Rights</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-1.5 bg-teal-900/80 hover:bg-teal-800 rounded-lg text-teal-200 hover:text-white transition-colors border border-teal-700/60"
            title={soundOn ? "Mute Sound Effects" : "Enable Sound Effects"}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-emerald-300" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
          </button>

          {/* Zoom & Fullscreen Controls */}
          <div className="flex items-center gap-1 bg-teal-900/80 p-1 rounded-lg border border-teal-700/50">
            <button
              onClick={onZoomOut}
              className="p-1 hover:bg-teal-800 rounded text-teal-200 hover:text-white transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onZoomReset}
              className="px-1.5 py-0.5 text-[11px] font-bold text-teal-300 hover:text-white hover:bg-teal-800 rounded transition-colors"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={onZoomIn}
              className="p-1 hover:bg-teal-800 rounded text-teal-200 hover:text-white transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <div className="w-[1px] h-3.5 bg-teal-700/60 mx-0.5" />
            <button
              onClick={onToggleFullscreen}
              className="p-1 hover:bg-teal-800 rounded text-teal-200 hover:text-white transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Toggle Sidebar Button */}
          <button
            onClick={onToggleSidebar}
            className={`p-1.5 rounded-lg border transition-all ${
              isSidebarOpen
                ? 'bg-teal-800/90 border-teal-600 text-white'
                : 'bg-slate-800/90 border-slate-700 text-amber-300'
            }`}
            title={isSidebarOpen ? "Hide Games & Points Sidebar" : "Show Games & Points Sidebar"}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
