/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 8: Interactive Practice Lab (All 14 Drills)
 */

import React, { useState } from 'react';
import {
  ClipboardList, CheckCircle2, XCircle, Lightbulb, Eye, RotateCcw,
  Sparkles, Check, HelpCircle
} from 'lucide-react';
import {
  CONTAINER_PAIRS, COLLECTIVE_PAIRS, IDIOM_PAIRS, ANIMAL_FILL_DATA,
  VOWEL_ITEMS, SPELL_DATA, CU_ITEMS, COMP_FILL_DATA, QUANT_FILL_DATA,
  IDIOM_FILL_DATA, MCQ_DATA, TF_DATA, ERR_DATA, READING_DATA
} from '../data/eslData';
import { sound } from '../utils/audio';

export const PracticeLabSection: React.FC = () => {
  // Matching Game Component
  const MatchingGame: React.FC<{
    title: string;
    pairs: { l: string; r: string }[];
  }> = ({ title, pairs }) => {
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
    const [matches, setMatches] = useState<Record<number, number>>({});
    const [checked, setChecked] = useState(false);
    const [hintIndex, setHintIndex] = useState<number | null>(null);

    const handleLeftClick = (idx: number) => {
      setSelectedLeft(idx);
      sound.playClick();
    };

    const handleRightClick = (idx: number) => {
      if (selectedLeft === null) return;
      setMatches(prev => ({ ...prev, [selectedLeft]: idx }));
      setSelectedLeft(null);
      setChecked(false);
      sound.playClick();
    };

    const handleCheck = () => {
      setChecked(true);
      const isAllCorrect = Object.keys(matches).length === pairs.length &&
        Object.keys(matches).every(k => matches[Number(k)] === Number(k));
      if (isAllCorrect) sound.playSuccess();
      else sound.playClick();
    };

    const handleReveal = () => {
      const all: Record<number, number> = {};
      pairs.forEach((_, i) => { all[i] = i; });
      setMatches(all);
      setChecked(true);
      sound.playClick();
    };

    const handleReset = () => {
      setMatches({});
      setSelectedLeft(null);
      setChecked(false);
      setHintIndex(null);
    };

    const score = Object.keys(matches).filter(k => matches[Number(k)] === Number(k)).length;

    return (
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
        <h4 className="text-sm font-extrabold text-slate-900 mb-2">{title}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {/* Left Column */}
          <div className="space-y-1.5">
            {pairs.map((p, idx) => {
              const isMatched = matches[idx] !== undefined;
              const isSelected = selectedLeft === idx;
              const isCorrect = checked && matches[idx] === idx;
              const isWrong = checked && isMatched && matches[idx] !== idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleLeftClick(idx)}
                  className={`w-full p-2.5 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-100 border-amber-400 text-amber-950 ring-2 ring-amber-300'
                      : isCorrect
                        ? 'bg-emerald-100 border-emerald-400 text-emerald-950'
                        : isWrong
                          ? 'bg-rose-100 border-rose-400 text-rose-950'
                          : isMatched
                            ? 'bg-blue-50 border-blue-300 text-blue-900'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <span>{p.l}</span>
                  {isMatched && (
                    <span className="text-[10px] text-slate-500 font-normal">
                      → {pairs[matches[idx]].r}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-1.5">
            {pairs.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleRightClick(idx)}
                className="w-full p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer bg-white border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-slate-800"
              >
                {p.r}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
          <button
            type="button"
            onClick={handleCheck}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-2xs transition-all"
          >
            Check Matches
          </button>
          <button
            type="button"
            onClick={handleReveal}
            className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg transition-all"
          >
            Reveal All
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-all"
          >
            Reset
          </button>

          {checked && (
            <span className="ml-auto font-black text-xs text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
              Score: {score} / {pairs.length}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Generic Fill-in Section
  const FillSection: React.FC<{
    title: string;
    data: { q: string; ans: string[]; hint: string }[];
  }> = ({ title, data }) => {
    const [inputs, setInputs] = useState<Record<number, string>>({});
    const [hints, setHints] = useState<Record<number, boolean>>({});
    const [revealed, setRevealed] = useState<Record<number, boolean>>({});
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
      setChecked(true);
      const allPassed = data.every((d, i) => {
        const u = (inputs[i] || '').trim().toLowerCase();
        return d.ans.some(a => a.toLowerCase() === u);
      });
      if (allPassed) sound.playSuccess();
      else sound.playClick();
    };

    const handleRevealAll = () => {
      const full: Record<number, string> = {};
      data.forEach((d, i) => { full[i] = d.ans[0]; });
      setInputs(full);
      setChecked(true);
      sound.playClick();
    };

    const handleReset = () => {
      setInputs({});
      setHints({});
      setRevealed({});
      setChecked(false);
    };

    const score = data.filter((d, i) => {
      const u = (inputs[i] || '').trim().toLowerCase();
      return d.ans.some(a => a.toLowerCase() === u);
    }).length;

    return (
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
        <h4 className="text-sm font-extrabold text-slate-900 mb-3">{title}</h4>
        <div className="space-y-2.5 mb-3">
          {data.map((d, idx) => {
            const userVal = inputs[idx] || '';
            const isCorrect = d.ans.some(a => a.toLowerCase() === userVal.trim().toLowerCase());

            return (
              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <span className="font-bold text-slate-800">
                    {idx + 1}. {d.q.split('______')[0]}
                    <input
                      type="text"
                      value={userVal}
                      onChange={e => {
                        setInputs({ ...inputs, [idx]: e.target.value });
                        setChecked(false);
                      }}
                      placeholder="Type answer..."
                      className={`inline-block mx-1.5 px-2 py-1 text-xs border rounded-lg font-bold w-36 text-center ${
                        checked
                          ? isCorrect
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950'
                            : 'border-rose-500 bg-rose-50 text-rose-950'
                          : 'border-slate-300 bg-slate-50'
                      }`}
                    />
                    {d.q.split('______')[1]}
                  </span>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setHints({ ...hints, [idx]: !hints[idx] })}
                      className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]"
                    >
                      💡 Hint
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setInputs({ ...inputs, [idx]: d.ans[0] });
                        setRevealed({ ...revealed, [idx]: true });
                      }}
                      className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold text-[10px]"
                    >
                      👁 Reveal
                    </button>
                  </div>
                </div>

                {hints[idx] && (
                  <div className="text-[11px] text-amber-800 font-semibold mt-1">
                    💡 <strong>Hint:</strong> {d.hint}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
          <button
            type="button"
            onClick={handleCheck}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-2xs transition-all"
          >
            Check Answers
          </button>
          <button
            type="button"
            onClick={handleRevealAll}
            className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg transition-all"
          >
            Reveal All
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-all"
          >
            Reset
          </button>

          {checked && (
            <span className="ml-auto font-black text-xs text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
              Score: {score} / {data.length}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Sorting Component
  const SortingGame: React.FC<{
    title: string;
    zones: { key: string; label: string }[];
    items: { w: string; k: string }[];
  }> = ({ title, zones, items }) => {
    const [selectedWordIdx, setSelectedWordIdx] = useState<number | null>(null);
    const [placed, setPlaced] = useState<Record<number, string>>({});
    const [checked, setChecked] = useState(false);

    const handleWordClick = (idx: number) => {
      setSelectedWordIdx(idx);
      sound.playClick();
    };

    const handleZoneClick = (zoneKey: string) => {
      if (selectedWordIdx === null) return;
      setPlaced(prev => ({ ...prev, [selectedWordIdx]: zoneKey }));
      setSelectedWordIdx(null);
      setChecked(false);
      sound.playClick();
    };

    const handleCheck = () => {
      setChecked(true);
      const isAllCorrect = Object.keys(placed).length === items.length &&
        items.every((it, i) => placed[i] === it.k);
      if (isAllCorrect) sound.playSuccess();
      else sound.playClick();
    };

    const handleReveal = () => {
      const full: Record<number, string> = {};
      items.forEach((it, i) => { full[i] = it.k; });
      setPlaced(full);
      setChecked(true);
      sound.playClick();
    };

    const handleReset = () => {
      setPlaced({});
      setSelectedWordIdx(null);
      setChecked(false);
    };

    const score = items.filter((it, i) => placed[i] === it.k).length;

    return (
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
        <h4 className="text-sm font-extrabold text-slate-900 mb-2">{title}</h4>
        <p className="text-xs text-slate-500 mb-3">
          1. Tap a word below. 2. Tap the target box to classify it.
        </p>

        {/* Word Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
          {items.map((it, idx) => {
            const isAssigned = placed[idx] !== undefined;
            const isSelected = selectedWordIdx === idx;
            const isCorrect = checked && placed[idx] === it.k;
            const isWrong = checked && isAssigned && placed[idx] !== it.k;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleWordClick(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-200 border-amber-400 text-amber-950 ring-2 ring-amber-300'
                    : isCorrect
                      ? 'bg-emerald-100 border-emerald-400 text-emerald-950'
                      : isWrong
                        ? 'bg-rose-100 border-rose-400 text-rose-950'
                        : isAssigned
                          ? 'opacity-40 bg-slate-200 border-slate-300 text-slate-600'
                          : 'bg-white border-slate-300 hover:border-slate-400 text-slate-800'
                }`}
              >
                {it.w}
              </button>
            );
          })}
        </div>

        {/* Drop Zones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {zones.map(z => {
            const itemsInZone = Object.keys(placed)
              .filter(k => placed[Number(k)] === z.key)
              .map(k => ({ word: items[Number(k)].w, idx: Number(k) }));

            return (
              <div
                key={z.key}
                onClick={() => handleZoneClick(z.key)}
                className="p-3.5 rounded-xl border-2 border-dashed border-slate-300 bg-white min-h-28 cursor-pointer hover:border-teal-400 hover:bg-teal-50/20 transition-all flex flex-col"
              >
                <div className="text-xs font-black text-teal-900 text-center mb-2 pb-1 border-b border-slate-100">
                  {z.label} ({itemsInZone.length})
                </div>
                <div className="flex flex-wrap gap-1 flex-1 items-start">
                  {itemsInZone.map(item => (
                    <span
                      key={item.idx}
                      className="px-2 py-0.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-950 text-[11px] font-bold"
                    >
                      {item.word}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
          <button
            type="button"
            onClick={handleCheck}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-2xs transition-all"
          >
            Check Classification
          </button>
          <button
            type="button"
            onClick={handleReveal}
            className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg transition-all"
          >
            Reveal All
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-all"
          >
            Reset
          </button>

          {checked && (
            <span className="ml-auto font-black text-xs text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
              Score: {score} / {items.length}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Multiple Choice Questions State
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [mcqChecked, setMcqChecked] = useState(false);
  const [mcqRevealed, setMcqRevealed] = useState<Record<number, boolean>>({});

  // True/False Questions State
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean>>({});
  const [tfChecked, setTfChecked] = useState(false);

  // Error Hunt Revealed State
  const [errRevealed, setErrRevealed] = useState<Record<number, boolean>>({});

  // Reading Comprehension State
  const [readingAnswers, setReadingAnswers] = useState<Record<number, string>>({});
  const [readingRevealed, setReadingRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-red-600">
        <div className="flex items-center gap-2 mb-2 text-red-700">
          <ClipboardList className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Interactive Practice Lab — 14 Complete Exam Drills
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Test your mastery across all 14 curriculum areas with instant automated marking, hints, and model solutions.
        </p>

        {/* Drill 1: Food Containers */}
        <MatchingGame title="Drill 1 · Food Containers (Partitive Nouns)" pairs={CONTAINER_PAIRS} />

        {/* Drill 2: Collective Nouns */}
        <MatchingGame title="Drill 2 · Collective Nouns for Animals" pairs={COLLECTIVE_PAIRS} />

        {/* Drill 3: Animal Families */}
        <FillSection title="Drill 3 · Animal Families (Male, Female, Baby)" data={ANIMAL_FILL_DATA} />

        {/* Drill 4: Short vs Long Vowels */}
        <SortingGame
          title="Drill 4 · Phonics: Short (S) vs Long (L) Vowels"
          zones={[{ key: 'S', label: 'Short Vowel (Quick Clipped)' }, { key: 'L', label: 'Long Vowel (Says Letter Name)' }]}
          items={VOWEL_ITEMS}
        />

        {/* Drill 5: Magic 'e' Spell */}
        <FillSection title="Drill 5 · Phonics: Spell with Silent Magic 'e'" data={SPELL_DATA} />

        {/* Drill 6: Countable vs Uncountable */}
        <SortingGame
          title="Drill 6 · Grammar: Countable vs Uncountable Nouns"
          zones={[{ key: 'C', label: 'Countable Nouns (Discrete Objects)' }, { key: 'U', label: 'Uncountable Nouns (Masses / Concepts)' }]}
          items={CU_ITEMS}
        />

        {/* Drill 7: Comparative Forms */}
        <FillSection title="Drill 7 · Comparative Adjective Transformations" data={COMP_FILL_DATA} />

        {/* Drill 8: Quantifiers */}
        <FillSection title="Drill 8 · Quantifiers: Many/Much, Some/Any, Few/Little, Fewer/Less" data={QUANT_FILL_DATA} />

        {/* Drill 9: Idiom Meanings Matching */}
        <MatchingGame title="Drill 9 · Idiom Meanings Matching" pairs={IDIOM_PAIRS} />

        {/* Drill 10: Idiom Fill-in */}
        <FillSection title="Drill 10 · Contextual Idiom Fill-in" data={IDIOM_FILL_DATA} />

        {/* Drill 11: Multiple Choice Questions */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <h4 className="text-sm font-extrabold text-slate-900 mb-3">
            Drill 11 · Multiple Choice Grammar &amp; Zoology Quiz (10 Questions)
          </h4>
          <div className="space-y-3 mb-4">
            {MCQ_DATA.map((q, qIdx) => (
              <div key={qIdx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-900 mb-2">{q.q}</div>
                <div className="space-y-1.5">
                  {q.opts.map((opt, optIdx) => {
                    const isSelected = mcqAnswers[qIdx] === optIdx;
                    const isCorrect = mcqChecked && optIdx === q.c;
                    const isWrong = mcqChecked && isSelected && optIdx !== q.c;

                    return (
                      <label
                        key={optIdx}
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-amber-50 border-amber-400 font-semibold text-amber-950'
                            : isCorrect
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                              : isWrong
                                ? 'bg-rose-50 border-rose-400 text-rose-950'
                                : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`mcq-${qIdx}`}
                          checked={isSelected}
                          onChange={() => {
                            setMcqAnswers({ ...mcqAnswers, [qIdx]: optIdx });
                            setMcqChecked(false);
                          }}
                        />
                        <span>{String.fromCharCode(97 + optIdx)}) {opt}</span>
                      </label>
                    );
                  })}
                </div>

                {mcqRevealed[qIdx] && (
                  <div className="mt-2 p-2 bg-emerald-50 rounded-lg text-emerald-950 text-[11px]">
                    <strong>Correct:</strong> {String.fromCharCode(97 + q.c)}) {q.opts[q.c]} — {q.exp}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => {
                setMcqChecked(true);
                sound.playSuccess();
              }}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-2xs transition-all"
            >
              Check Quiz
            </button>
            <button
              type="button"
              onClick={() => {
                const rev: Record<number, boolean> = {};
                MCQ_DATA.forEach((_, i) => { rev[i] = true; });
                setMcqRevealed(rev);
                sound.playClick();
              }}
              className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg transition-all"
            >
              Reveal Explanations
            </button>
            <button
              type="button"
              onClick={() => {
                setMcqAnswers({});
                setMcqChecked(false);
                setMcqRevealed({});
              }}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Drill 12: True/False */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <h4 className="text-sm font-extrabold text-slate-900 mb-3">
            Drill 12 · True or False Diagnostic Concepts (10 Questions)
          </h4>
          <div className="space-y-2.5 mb-4 text-xs">
            {TF_DATA.map((item, idx) => {
              const userVal = tfAnswers[idx];
              const isCorrect = tfChecked && userVal === item.a;

              return (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold text-slate-800">{idx + 1}. {item.s}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setTfAnswers({ ...tfAnswers, [idx]: true });
                        setTfChecked(false);
                      }}
                      className={`px-3 py-1 rounded-lg font-bold ${
                        userVal === true
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      True
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTfAnswers({ ...tfAnswers, [idx]: false });
                        setTfChecked(false);
                      }}
                      className={`px-3 py-1 rounded-lg font-bold ${
                        userVal === false
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      False
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => {
                setTfChecked(true);
                sound.playSuccess();
              }}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-2xs transition-all"
            >
              Check True/False
            </button>
            <button
              type="button"
              onClick={() => {
                setTfAnswers({});
                setTfChecked(false);
              }}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Drill 13: Error Hunt */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <h4 className="text-sm font-extrabold text-slate-900 mb-2">
            Drill 13 · Error Hunt: Spot &amp; Correct Comparative Pitfalls
          </h4>
          <p className="text-xs text-slate-500 mb-3">
            Tap each incorrect sentence to unveil the exact grammatical breakdown.
          </p>
          <div className="space-y-2 text-xs">
            {ERR_DATA.map((e, idx) => (
              <div
                key={idx}
                onClick={() => setErrRevealed({ ...errRevealed, [idx]: !errRevealed[idx] })}
                className="p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-rose-400 transition-all"
              >
                <div className="font-bold text-rose-950 flex items-center justify-between">
                  <span>{idx + 1}. ❌ &quot;{e.s}&quot;</span>
                  <span className="text-[10px] text-slate-400">Click to reveal</span>
                </div>
                {errRevealed[idx] && (
                  <div className="mt-2 pt-2 border-t border-slate-100 text-emerald-800 font-semibold animate-fadeIn">
                    {e.c}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Drill 14: Reading Comprehension */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <h4 className="text-sm font-extrabold text-slate-900 mb-3">
            Drill 14 · Reading Comprehension Questions &amp; PEEL Model Comparison
          </h4>
          <div className="space-y-3 text-xs">
            {READING_DATA.map((r, idx) => (
              <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 mb-1.5">{r.q}</div>
                <textarea
                  rows={idx === 4 ? 3 : 2}
                  value={readingAnswers[idx] || ''}
                  onChange={e => setReadingAnswers({ ...readingAnswers, [idx]: e.target.value })}
                  placeholder="Draft your written response here..."
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs bg-slate-50/50 mb-2"
                />
                <button
                  type="button"
                  onClick={() => setReadingRevealed({ ...readingRevealed, [idx]: !readingRevealed[idx] })}
                  className="px-2.5 py-1 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg text-[10px] transition-all"
                >
                  {readingRevealed[idx] ? 'Hide Model Solution' : '👁 Reveal Model Solution'}
                </button>
                {readingRevealed[idx] && (
                  <div className="mt-2 p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 text-[11px] leading-relaxed animate-fadeIn">
                    <strong>Model Answer:</strong> {r.model}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
