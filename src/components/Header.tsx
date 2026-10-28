/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Header Component with Creator Badge and Protection Actions
 */

import React from 'react';
import { ShieldCheck, Share2, Award, Maximize2, Minimize2, ZoomIn, ZoomOut, RotateCcw, PanelRightClose, PanelRightOpen } from 'lucide-react';

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
  onToggleFullscreen
}) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-900 text-white shadow-xl border-b border-blue-800/60">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Title and Branding */}
        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">🎓</span>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Getting Ready for Study
              <span className="hidden sm:inline text-blue-300 font-normal">|</span>
              <span className="text-blue-200 text-sm sm:text-base font-semibold">RSS Mid-Term Masterclass</span>
            </h1>
          </div>
          <p className="text-xs text-blue-200/90 mt-0.5">
            NCC Education • Topic 1: Study Skills, Procrastination, Prioritising, SMART Goals & Touch Board Games
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
            <span>Live Link & Rights</span>
          </button>

          {/* Zoom & Fullscreen Controls */}
          <div className="flex items-center gap-1 bg-blue-900/80 p-1 rounded-lg border border-blue-700/50">
            <button
              onClick={onZoomOut}
              className="p-1 hover:bg-blue-800 rounded text-blue-200 hover:text-white transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onZoomReset}
              className="px-1.5 py-0.5 text-[11px] font-bold text-blue-300 hover:text-white hover:bg-blue-800 rounded transition-colors"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={onZoomIn}
              className="p-1 hover:bg-blue-800 rounded text-blue-200 hover:text-white transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <div className="w-[1px] h-3.5 bg-blue-700/60 mx-0.5" />
            <button
              onClick={onToggleFullscreen}
              className="p-1 hover:bg-blue-800 rounded text-blue-200 hover:text-white transition-colors"
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
                ? 'bg-blue-800/90 border-blue-600 text-white'
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
