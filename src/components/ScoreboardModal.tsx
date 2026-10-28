/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Scoreboard Modal with Podium styling
 */

import React, { useEffect } from 'react';
import { Trophy, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Player } from '../data/eslData';

interface ScoreboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
}

export const ScoreboardModal: React.FC<ScoreboardModalProps> = ({
  isOpen,
  onClose,
  players
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sorted = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2 text-amber-600 font-extrabold text-lg">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>ESL Mastery Lab Scoreboard</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Podium List */}
        <div className="space-y-2 mb-6 max-h-80 overflow-y-auto pr-1">
          {sorted.map((p, idx) => {
            const isGold = idx === 0;
            const isSilver = idx === 1;
            const isBronze = idx === 2;

            return (
              <div
                key={p.id}
                className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                  isGold
                    ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-300 shadow-sm'
                    : isSilver
                      ? 'bg-gradient-to-r from-slate-100 to-slate-200 border-slate-300'
                      : isBronze
                        ? 'bg-gradient-to-r from-amber-50 to-orange-100 border-orange-200'
                        : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 text-center font-black text-sm">
                    {isGold ? '🥇' : isSilver ? '🥈' : isBronze ? '🥉' : `#${idx + 1}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.name.charAt(0)}
                    </span>
                    <span className="font-extrabold text-sm text-slate-900">{p.name}</span>
                  </div>
                </div>

                <span className="font-black text-base text-blue-900">
                  {p.score} <span className="text-xs font-semibold text-slate-500">pts</span>
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          Close Scoreboard
        </button>
      </div>
    </div>
  );
};
