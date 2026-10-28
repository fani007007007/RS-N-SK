/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Game Settings Modal for customizing all 12 arcade games
 */

import React, { useState } from 'react';
import { Settings, X, RotateCcw, Save } from 'lucide-react';
import { GameConfig, DEFAULT_GAME_CONFIG } from '../data/masterclassData';

interface GameSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: GameConfig;
  onSave: (newConfig: GameConfig) => void;
  onReset: () => void;
}

export const GameSettingsModal: React.FC<GameSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset
}) => {
  if (!isOpen) return null;

  const [formConfig, setFormConfig] = useState<GameConfig>(JSON.parse(JSON.stringify(config)));

  const handleValuesChange = (gameKey: keyof GameConfig, str: string) => {
    const nums = str
      .split(',')
      .map(s => parseFloat(s.trim()))
      .filter(n => !isNaN(n));
    setFormConfig(prev => {
      const copy = { ...prev };
      if ('values' in copy[gameKey]) {
        (copy[gameKey] as { values: number[] }).values = nums;
      }
      return copy;
    });
  };

  const handleSave = () => {
    onSave(formConfig);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 flex flex-col max-h-[85vh]">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 shrink-0">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
            <Settings className="w-5 h-5 text-indigo-600" />
            <span>Customize Board Games (12 Games)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-500 mb-3 shrink-0">
          Enter comma-separated score numbers for each game. Changes save automatically into your browser session.
        </p>

        {/* Form Body */}
        <div className="space-y-3 overflow-y-auto pr-1 flex-1 text-xs">
          {/* Wheel */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <label className="font-bold text-slate-800 block mb-1">
              🎡 Wheel of Fortune (Point Values)
            </label>
            <input
              type="text"
              defaultValue={formConfig.wheel.values.join(', ')}
              onChange={e => handleValuesChange('wheel', e.target.value)}
              className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
            />
          </div>

          {/* Dice */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <label className="font-bold text-slate-800 block mb-1">
              🎲 Roll the Dice (Face Values)
            </label>
            <input
              type="text"
              defaultValue={formConfig.dice.values.join(', ')}
              onChange={e => handleValuesChange('dice', e.target.value)}
              className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
            />
          </div>

          {/* Slots */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <label className="font-bold text-slate-800 block mb-1">
              🎰 Slot Machine (Reel Values &amp; Jackpot)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                defaultValue={formConfig.slots.values.join(', ')}
                onChange={e => handleValuesChange('slots', e.target.value)}
                className="w-2/3 p-2 bg-white border border-slate-300 rounded-lg text-xs"
                placeholder="Reel values..."
              />
              <input
                type="number"
                defaultValue={formConfig.slots.jackpot}
                onChange={e => {
                  const j = parseFloat(e.target.value) || 100;
                  setFormConfig(prev => ({
                    ...prev,
                    slots: { ...prev.slots, jackpot: j }
                  }));
                }}
                className="w-1/3 p-2 bg-white border border-slate-300 rounded-lg text-xs"
                placeholder="Jackpot"
              />
            </div>
          </div>

          {/* Treasure */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <label className="font-bold text-slate-800 block mb-1">
              💎 Treasure Hunt (Gems Values &amp; Number of Bombs)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                defaultValue={formConfig.treasure.gems.join(', ')}
                onChange={e => {
                  const nums = e.target.value.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
                  setFormConfig(prev => ({
                    ...prev,
                    treasure: { ...prev.treasure, gems: nums }
                  }));
                }}
                className="w-2/3 p-2 bg-white border border-slate-300 rounded-lg text-xs"
                placeholder="Gem values..."
              />
              <input
                type="number"
                defaultValue={formConfig.treasure.bombs}
                onChange={e => {
                  const b = Math.max(1, parseInt(e.target.value) || 1);
                  setFormConfig(prev => ({
                    ...prev,
                    treasure: { ...prev.treasure, bombs: b }
                  }));
                }}
                className="w-1/3 p-2 bg-white border border-slate-300 rounded-lg text-xs"
                placeholder="Bombs"
              />
            </div>
          </div>

          {/* Darts */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <label className="font-bold text-slate-800 block mb-1">
              🎯 Dart Board (Bullseye to Outer Ring)
            </label>
            <input
              type="text"
              defaultValue={formConfig.darts.values.join(', ')}
              onChange={e => handleValuesChange('darts', e.target.value)}
              className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
            />
          </div>

          {/* Coin */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <label className="font-bold text-slate-800 block mb-1">
              🪙 Coin Flip (Correct Win &amp; Wrong Lose)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                defaultValue={formConfig.coin.win}
                onChange={e => {
                  const w = parseFloat(e.target.value) || 50;
                  setFormConfig(prev => ({ ...prev, coin: { ...prev.coin, win: w } }));
                }}
                className="w-1/2 p-2 bg-white border border-slate-300 rounded-lg text-xs"
              />
              <input
                type="number"
                defaultValue={formConfig.coin.lose}
                onChange={e => {
                  const l = parseFloat(e.target.value) || 10;
                  setFormConfig(prev => ({ ...prev, coin: { ...prev.coin, lose: l } }));
                }}
                className="w-1/2 p-2 bg-white border border-slate-300 rounded-lg text-xs"
              />
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-slate-100 mt-3 shrink-0">
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Customization</span>
          </button>
          <button
            onClick={onReset}
            className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>
    </div>
  );
};
