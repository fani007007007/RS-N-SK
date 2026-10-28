/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Floating Sidebar: Timer, Players Roster, Quick Points & Board Games Arcade
 */

import React, { useState, useEffect } from 'react';
import { Timer, Users, Trophy, Play, Square, Dices, Plus, Trash2, Settings, ShieldCheck, Sparkles } from 'lucide-react';
import { Player, GameConfig, AVATAR_COLORS } from '../data/masterclassData';
import { sound } from '../utils/audio';

interface FloatingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
  selectedPlayerId: number | null;
  onSelectPlayer: (id: number) => void;
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (id: number) => void;
  onResetRoster: () => void;
  onAwardPoints: (points: number) => void;
  onSelectRandomPlayer: () => void;
  onOpenScoreboard: () => void;
  onOpenGame: (gameKey: keyof GameConfig) => void;
  onOpenSettings: () => void;
  gameConfig: GameConfig;
}

export const FloatingSidebar: React.FC<FloatingSidebarProps> = ({
  isOpen,
  onClose,
  players,
  selectedPlayerId,
  onSelectPlayer,
  onAddPlayer,
  onRemovePlayer,
  onResetRoster,
  onAwardPoints,
  onSelectRandomPlayer,
  onOpenScoreboard,
  onOpenGame,
  onOpenSettings,
  gameConfig
}) => {
  // Timer State
  const [roundTime, setRoundTime] = useState(60);
  const [challengeTime, setChallengeTime] = useState(120);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerType, setTimerType] = useState<'round' | 'challenge'>('round');

  // New Player Name State
  const [newPlayerName, setNewPlayerName] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            sound.playBuzzer();
            setIsTimerRunning(false);
            return 0;
          }
          if (prev <= 4) {
            sound.playClick();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  const startTimer = (type: 'round' | 'challenge') => {
    const duration = type === 'round' ? roundTime : challengeTime;
    setTimerType(type);
    setTimeLeft(duration);
    setIsTimerRunning(true);
    sound.playClick();
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    sound.playClick();
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName.trim()) {
      onAddPlayer(newPlayerName.trim());
      setNewPlayerName('');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 lg:hidden backdrop-blur-2xs animate-fadeIn"
        onClick={onClose}
      />

      <aside className="fixed lg:static right-0 top-0 bottom-0 z-40 w-80 shrink-0 bg-white border-l border-slate-200 shadow-2xl lg:shadow-xl overflow-y-auto p-4 flex flex-col gap-5 text-slate-800 animate-fadeIn">
        {/* Mobile Close Button */}
        <div className="flex lg:hidden items-center justify-between pb-1 border-b border-slate-100">
          <span className="text-xs font-black text-slate-800">Classroom Panel</span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold"
          >
            ✕ Close
          </button>
        </div>

        {/* Author & Rights Card */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-3 rounded-xl shadow-xs border border-blue-800 text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-300 mb-0.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Author: Fani</span>
        </div>
        <p className="text-[11px] text-blue-200 leading-snug">
          © 2026 Fani • All Rights Reserved. Protected against unauthorized altering or tampering.
        </p>
      </div>

      {/* Activity Timer */}
      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Timer className="w-4 h-4 text-emerald-600" />
            <span>Activity Timer</span>
          </h3>
          <span className="text-[10px] text-slate-500 font-mono">
            {isTimerRunning ? 'RUNNING' : 'STOPPED'}
          </span>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-2.5">
          <div>
            <label className="text-[10px] text-slate-500 font-bold block mb-0.5">Round (s)</label>
            <input
              type="number"
              value={roundTime}
              onChange={e => setRoundTime(Math.max(5, parseInt(e.target.value) || 0))}
              className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-xs text-center font-bold"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-500 font-bold block mb-0.5">Challenge (s)</label>
            <input
              type="number"
              value={challengeTime}
              onChange={e => setChallengeTime(Math.max(5, parseInt(e.target.value) || 0))}
              className="w-full px-2 py-1 bg-white border border-slate-300 rounded text-xs text-center font-bold"
            />
          </div>
        </div>

        {/* Display */}
        <div className={`text-3xl font-black text-center font-mono py-1 rounded-lg border mb-2.5 ${
          timeLeft <= 5 && isTimerRunning
            ? 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse'
            : 'bg-white text-slate-900 border-slate-200'
        }`}>
          {formatTime(timeLeft)}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 justify-center">
          <button
            onClick={() => startTimer('round')}
            className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-2xs transition-all"
          >
            Start A
          </button>
          <button
            onClick={() => startTimer('challenge')}
            className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-2xs transition-all"
          >
            Start B
          </button>
          <button
            onClick={stopTimer}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs transition-all"
          >
            <Square className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Players & Points */}
      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Players &amp; Points</span>
          </h3>
          <button
            onClick={onResetRoster}
            className="text-[10px] text-slate-500 hover:text-slate-800 font-bold underline cursor-pointer"
          >
            ↺ Reset
          </button>
        </div>

        {/* Add Player Input */}
        <form onSubmit={handleAddSubmit} className="flex gap-1.5 mb-2.5">
          <input
            type="text"
            placeholder="Add player name..."
            value={newPlayerName}
            onChange={e => setNewPlayerName(e.target.value)}
            className="flex-1 px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
            title="Add player"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Players List */}
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {players.map(p => {
            const isSelected = p.id === selectedPlayerId;
            return (
              <div
                key={p.id}
                onClick={() => onSelectPlayer(p.id)}
                className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.name.charAt(0)}
                  </span>
                  <span className="font-bold text-slate-900 truncate max-w-28">{p.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-xs text-blue-700">{p.score} pts</span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      onRemovePlayer(p.id);
                    }}
                    className="text-slate-400 hover:text-rose-600 p-0.5 rounded transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roster Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5 mt-3">
          <button
            onClick={onSelectRandomPlayer}
            className="py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow-2xs transition-all flex items-center justify-center gap-1"
          >
            <Dices className="w-3.5 h-3.5" />
            <span>🎲 Random</span>
          </button>
          <button
            onClick={onOpenScoreboard}
            className="py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black text-xs rounded-lg shadow-2xs transition-all flex items-center justify-center gap-1"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>🏆 Scoreboard</span>
          </button>
        </div>

        {/* Quick Points */}
        <div className="mt-3 pt-2.5 border-t border-slate-200">
          <span className="text-[10px] font-bold text-slate-500 block mb-1.5">
            ⚡ Quick Points (Active Player)
          </span>
          <div className="grid grid-cols-4 gap-1">
            <button
              onClick={() => onAwardPoints(5)}
              className="py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded shadow-2xs transition-all"
            >
              +5
            </button>
            <button
              onClick={() => onAwardPoints(10)}
              className="py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded shadow-2xs transition-all"
            >
              +10
            </button>
            <button
              onClick={() => onAwardPoints(15)}
              className="py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded shadow-2xs transition-all"
            >
              +15
            </button>
            <button
              onClick={() => onAwardPoints(-5)}
              className="py-1 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs rounded shadow-2xs transition-all"
            >
              -5
            </button>
          </div>
        </div>
      </div>

      {/* Board Games Arcade */}
      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Board Games Arcade (12)</span>
          </h3>
          <button
            onClick={onOpenSettings}
            className="text-slate-500 hover:text-slate-800 p-1 rounded"
            title="Configure Point Values"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {(Object.keys(gameConfig) as (keyof GameConfig)[]).map(key => {
            const item = gameConfig[key];
            return (
              <button
                key={key}
                onClick={() => onOpenGame(key)}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-slate-800 text-[11px] font-bold shadow-2xs transition-all cursor-pointer text-left truncate"
              >
                <span className="text-base shrink-0">{item.icon}</span>
                <span className="truncate">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
    </>
  );
};
