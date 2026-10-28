/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Getting Ready for Study — RSS Mid-Term Masterclass
 * Created by Fani
 * © 2026 Fani. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NavigationTabs, SectionKey } from './components/NavigationTabs';
import { StudySection } from './components/StudySection';
import { ProcrastinationSection } from './components/ProcrastinationSection';
import { PrioritisingSection } from './components/PrioritisingSection';
import { TodoListSection } from './components/TodoListSection';
import { SmartGoalsSection } from './components/SmartGoalsSection';
import { SchedulesSection } from './components/SchedulesSection';
import { ExamSection } from './components/ExamSection';
import { GameShowSection } from './components/GameShowSection';
import { FloatingSidebar } from './components/FloatingSidebar';
import { BoardGameOverlay } from './components/BoardGameOverlay';
import { GameSettingsModal } from './components/GameSettingsModal';
import { ScoreboardModal } from './components/ScoreboardModal';
import { ShareCertificateModal } from './components/ShareCertificateModal';
import { Footer } from './components/Footer';
import { DEFAULT_PLAYERS, DEFAULT_GAME_CONFIG, Player, GameConfig } from './data/masterclassData';
import { sound } from './utils/audio';

const STORAGE_KEY_PLAYERS = 'rss_fani_players_v1';
const STORAGE_KEY_GAMES = 'rss_fani_game_config_v1';
const STORAGE_KEY_ZOOM = 'rss_fani_zoom_v1';

// Official Shared App URL provided for Fani's masterclass
const OFFICIAL_APP_URL = 'https://ais-pre-uz3xlnrfpt4snn7wxv2pxr-654542234614.us-west2.run.app';

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionKey>('study');
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Modals state
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isScoreboardOpen, setIsScoreboardOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeGameKey, setActiveGameKey] = useState<keyof GameConfig | null>(null);

  // Players state
  const [players, setPlayers] = useState<Player[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PLAYERS);
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_PLAYERS;
  });
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(1);

  // Game config state
  const [gameConfig, setGameConfig] = useState<GameConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_GAMES);
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_GAME_CONFIG;
  });

  // Toast feedback state
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Sync players to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PLAYERS, JSON.stringify(players));
    } catch {}
  }, [players]);

  // Sync game config to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_GAMES, JSON.stringify(gameConfig));
    } catch {}
  }, [gameConfig]);

  // Anti-tamper & Protection Event Listeners
  useEffect(() => {
    // 1. Disable contextmenu (right-click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showToast('🔒 Content protected by copyright (Created by Fani).');
    };

    // 2. Disable common DevTools and source inspection keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
        showToast('🔒 Source modification is locked on this masterclass.');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel(prev => {
      const next = Math.min(1.5, Math.round((prev + 0.1) * 10) / 10);
      try { localStorage.setItem(STORAGE_KEY_ZOOM, String(next)); } catch {}
      return next;
    });
    sound.playClick();
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(0.7, Math.round((prev - 0.1) * 10) / 10);
      try { localStorage.setItem(STORAGE_KEY_ZOOM, String(next)); } catch {}
      return next;
    });
    sound.playClick();
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
    try { localStorage.setItem(STORAGE_KEY_ZOOM, '1'); } catch {}
    sound.playClick();
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  // Player controls
  const handleSelectPlayer = (id: number) => {
    setSelectedPlayerId(prev => (prev === id ? null : id));
    sound.playClick();
  };

  const handleAddPlayer = (name: string) => {
    const nextId = (players.length ? Math.max(...players.map(p => p.id)) : 0) + 1;
    const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#f97316'];
    const newP: Player = {
      id: nextId,
      name,
      score: 0,
      color: colors[nextId % colors.length]
    };
    setPlayers(prev => [...prev, newP]);
    setSelectedPlayerId(nextId);
    sound.playSuccess();
    showToast(`Player ${name} added!`);
  };

  const handleRemovePlayer = (id: number) => {
    setPlayers(prev => prev.filter(p => p.id !== id));
    if (selectedPlayerId === id) setSelectedPlayerId(null);
    sound.playClick();
  };

  const handleResetRoster = () => {
    if (window.confirm('Reset player roster and scores to defaults?')) {
      setPlayers(DEFAULT_PLAYERS);
      setSelectedPlayerId(1);
      sound.playClick();
      showToast('Roster reset to defaults');
    }
  };

  const handleAwardPoints = (points: number) => {
    if (selectedPlayerId === null) {
      showToast('⚠️ Please select a player first!');
      sound.playError();
      return;
    }
    setPlayers(prev =>
      prev.map(p => (p.id === selectedPlayerId ? { ...p, score: p.score + points } : p))
    );
    const p = players.find(x => x.id === selectedPlayerId);
    if (p) {
      showToast(`${points >= 0 ? '+' : ''}${points} points to ${p.name}!`);
    }
  };

  const handleSelectRandomPlayer = () => {
    if (players.length === 0) return;
    const random = players[Math.floor(Math.random() * players.length)];
    setSelectedPlayerId(random.id);
    sound.playSuccess();
    showToast(`🎲 Selected: ${random.name}!`);
  };

  const handleSaveGameConfig = (newConf: GameConfig) => {
    setGameConfig(newConf);
    sound.playSuccess();
    showToast('Game configuration saved! ✅');
  };

  const handleResetGameConfig = () => {
    setGameConfig(DEFAULT_GAME_CONFIG);
    sound.playClick();
    showToast('Game settings reset to defaults');
  };

  const activePlayer = players.find(p => p.id === selectedPlayerId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800">
      {/* Header */}
      <Header
        onOpenShareModal={() => setIsShareModalOpen(true)}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onZoomReset={handleZoomReset}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Navigation Tabs for the 8 sections */}
      <NavigationTabs
        activeTab={activeTab}
        onTabChange={tab => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          sound.playClick();
        }}
      />

      {/* Main Body with Stretched or Sidebar Layout */}
      <div className="flex-1 flex w-full">
        <main
          className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-6 transition-all duration-200"
          style={{ zoom: zoomLevel }}
        >
          {activeTab === 'study' && <StudySection />}
          {activeTab === 'proc' && <ProcrastinationSection />}
          {activeTab === 'prio' && <PrioritisingSection />}
          {activeTab === 'todo' && <TodoListSection />}
          {activeTab === 'smart' && <SmartGoalsSection />}
          {activeTab === 'sched' && <SchedulesSection />}
          {activeTab === 'exam' && <ExamSection />}
          {activeTab === 'game' && (
            <GameShowSection
              players={players}
              selectedPlayerId={selectedPlayerId}
              onAwardPoints={handleAwardPoints}
            />
          )}

          {/* Footer inside content flow */}
          <Footer onOpenShareModal={() => setIsShareModalOpen(true)} />
        </main>

        {/* Floating Classroom Assistant & Board Games Sidebar */}
        <FloatingSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          players={players}
          selectedPlayerId={selectedPlayerId}
          onSelectPlayer={handleSelectPlayer}
          onAddPlayer={handleAddPlayer}
          onRemovePlayer={handleRemovePlayer}
          onResetRoster={handleResetRoster}
          onAwardPoints={handleAwardPoints}
          onSelectRandomPlayer={handleSelectRandomPlayer}
          onOpenScoreboard={() => setIsScoreboardOpen(true)}
          onOpenGame={key => {
            if (selectedPlayerId === null) {
              showToast('⚠️ Please select a player card before opening an arcade game!');
              sound.playError();
              return;
            }
            setActiveGameKey(key);
            sound.playClick();
          }}
          onOpenSettings={() => setIsSettingsOpen(true)}
          gameConfig={gameConfig}
        />
      </div>

      {/* Modals & Overlays */}
      <BoardGameOverlay
        gameKey={activeGameKey}
        config={gameConfig}
        onClose={() => setActiveGameKey(null)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        activePlayer={activePlayer}
        onAwardPoints={handleAwardPoints}
      />

      <ScoreboardModal
        isOpen={isScoreboardOpen}
        onClose={() => setIsScoreboardOpen(false)}
        players={players}
      />

      <GameSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={gameConfig}
        onSave={handleSaveGameConfig}
        onReset={handleResetGameConfig}
      />

      <ShareCertificateModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        appUrl={OFFICIAL_APP_URL}
      />

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-2xl border border-slate-700 animate-fadeIn flex items-center gap-2">
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
