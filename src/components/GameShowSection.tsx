/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 8: Interactive Classroom Game Show
 */

import React, { useState } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Shuffle, Lightbulb, Eye, Award, CheckCircle2 } from 'lucide-react';
import { GAME_QUESTIONS, Player } from '../data/masterclassData';
import { sound } from '../utils/audio';

interface GameShowProps {
  players: Player[];
  selectedPlayerId: number | null;
  onAwardPoints: (points: number) => void;
}

export const GameShowSection: React.FC<GameShowProps> = ({
  players,
  selectedPlayerId,
  onAwardPoints
}) => {
  const [questions, setQuestions] = useState(GAME_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const activeQ = questions[currentIndex];
  const activePlayer = players.find(p => p.id === selectedPlayerId);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % questions.length);
    setShowHint(false);
    setShowAnswer(false);
    sound.playClick();
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + questions.length) % questions.length);
    setShowHint(false);
    setShowAnswer(false);
    sound.playClick();
  };

  const handleShuffle = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setShowHint(false);
    setShowAnswer(false);
    sound.playSuccess();
  };

  const handleToggleHint = () => {
    setShowHint(prev => !prev);
    sound.playClick();
  };

  const handleToggleAnswer = () => {
    setShowAnswer(prev => !prev);
    if (!showAnswer) {
      sound.playSuccess();
    } else {
      sound.playClick();
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-indigo-600">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-indigo-700">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-extrabold tracking-tight">
              Classroom Game Show &amp; Rapid Fire Quiz
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-900 border border-indigo-200 px-3 py-1 rounded-full text-xs font-bold">
              {questions.length} Masterclass Questions
            </span>
            {activePlayer && (
              <span className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activePlayer.color }} />
                <span>Turn: {activePlayer.name} ({activePlayer.score} pts)</span>
              </span>
            )}
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Project onto the classroom smartboard or screen. Students compete individually or in teams for points. Use the Board Games arcade in the sidebar to spin the wheel or roll the dice for bonus scores!
        </p>
      </div>

      {/* Main Flashcard Card */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-700/50">
        {/* Navigation Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 border-b border-indigo-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-950/80 text-amber-300 border border-indigo-700 px-3 py-1 rounded-lg text-xs font-mono font-bold">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 px-3 py-1 rounded-lg text-xs font-bold">
              {activeQ.cat}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-2 bg-indigo-800/80 hover:bg-indigo-700 rounded-lg text-white text-xs font-bold transition-all"
              title="Previous Question"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleShuffle}
              className="px-3 py-1.5 bg-indigo-800/80 hover:bg-indigo-700 rounded-lg text-white text-xs font-bold transition-all flex items-center gap-1"
              title="Shuffle Question Order"
            >
              <Shuffle className="w-3.5 h-3.5 text-indigo-300" />
              <span className="hidden sm:inline">Shuffle</span>
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-indigo-800/80 hover:bg-indigo-700 rounded-lg text-white text-xs font-bold transition-all"
              title="Next Question"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Text */}
        <div className="min-h-36 flex flex-col justify-center my-4">
          <h3 className="text-xl sm:text-2xl font-black leading-snug tracking-tight text-white mb-2">
            {activeQ.q}
          </h3>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-indigo-800/80">
          <button
            onClick={handleToggleHint}
            className="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{showHint ? 'Hide Hint' : '💡 Need a Hint?'}</span>
          </button>

          <button
            onClick={handleToggleAnswer}
            className="px-4 py-2 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showAnswer ? 'Hide Solution' : '👁 Reveal Answer'}</span>
          </button>

          {/* Quick Award Points */}
          {activePlayer && (
            <div className="ml-auto flex items-center gap-1.5 bg-indigo-950/80 p-1.5 rounded-xl border border-indigo-700">
              <span className="text-[11px] font-bold text-indigo-200 px-1 hidden md:inline">
                Award to {activePlayer.name}:
              </span>
              <button
                onClick={() => onAwardPoints(5)}
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-black"
              >
                +5
              </button>
              <button
                onClick={() => onAwardPoints(10)}
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-black"
              >
                +10
              </button>
              <button
                onClick={() => onAwardPoints(15)}
                className="px-2 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-black"
              >
                +15
              </button>
            </div>
          )}
        </div>

        {/* Hint Box */}
        {showHint && (
          <div className="mt-5 p-4 rounded-xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-100">Hint:</strong> {activeQ.hint}
            </div>
          </div>
        )}

        {/* Answer Box */}
        {showAnswer && (
          <div className="mt-5 p-5 rounded-xl bg-emerald-950/90 border border-emerald-400/60 shadow-inner">
            <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-xs uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Model Answer</span>
            </div>
            <div className="text-sm font-black text-white leading-relaxed">
              {activeQ.a}
            </div>
            {activeQ.exp && (
              <div className="text-xs text-emerald-200/90 mt-2 italic border-t border-emerald-800/60 pt-2">
                <strong>Academic Reference:</strong> {activeQ.exp}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
