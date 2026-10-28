/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Practice Card for Interactive Questions & Tests
 */

import React, { useState } from 'react';
import { Lightbulb, Eye, CheckCircle2, XCircle } from 'lucide-react';
import { PracticeItem } from '../data/masterclassData';
import { isAnswerCorrect } from '../utils/rules';
import { sound } from '../utils/audio';

interface PracticeCardProps {
  item: PracticeItem;
  onGraded?: (id: string, isCorrect: boolean) => void;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ item, onGraded }) => {
  const [userText, setUserText] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleCheck = () => {
    let passed = false;
    if (item.type === 'choice') {
      passed = selectedOption === item.answer;
    } else if (item.type === 'fill') {
      passed = isAnswerCorrect(userText, item.answers || []);
    } else {
      passed = isAnswerCorrect(userText, [], item.keys || [], item.any || []);
    }

    setChecked(true);
    setIsCorrect(passed);
    if (passed) {
      sound.playSuccess();
    } else {
      sound.playError();
    }
    if (onGraded) {
      onGraded(item.id, passed);
    }
  };

  const handleReveal = () => {
    setShowReveal(prev => !prev);
    sound.playClick();
  };

  const handleHint = () => {
    setShowHint(prev => !prev);
    sound.playClick();
  };

  const getModelAnswer = () => {
    if (item.type === 'choice') return item.answer;
    if (item.type === 'fill') return item.display || (item.answers || []).join(' / ');
    return item.model || '';
  };

  return (
    <div className={`p-4 rounded-xl border bg-white shadow-sm transition-all mb-3.5 ${
      checked
        ? isCorrect
          ? 'border-emerald-300 ring-1 ring-emerald-200'
          : 'border-rose-300 ring-1 ring-rose-200'
        : 'border-slate-200 hover:border-slate-300'
    }`}>
      {/* Question Header & Badge */}
      <div className="flex items-start justify-between gap-2 mb-2.5">
        <h4 className="text-sm font-bold text-slate-900 leading-snug">
          {item.q}
        </h4>
        <span className="shrink-0 bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
          {item.sec}
        </span>
      </div>

      {/* Input Area */}
      <div className="my-2.5">
        {item.type === 'choice' && item.options && (
          <div className="space-y-1.5">
            {item.options.map((opt, idx) => (
              <label
                key={idx}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                  selectedOption === opt
                    ? 'bg-blue-50/80 border-blue-400 text-blue-900 font-semibold'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name={item.id}
                  checked={selectedOption === opt}
                  onChange={() => {
                    setSelectedOption(opt);
                    setChecked(false);
                  }}
                  className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        )}

        {item.type === 'fill' && (
          <input
            type="text"
            value={userText}
            onChange={e => {
              setUserText(e.target.value);
              setChecked(false);
            }}
            placeholder="Type your answer here..."
            className="w-full px-3 py-2 text-xs border rounded-lg bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-slate-300"
          />
        )}

        {item.type === 'rewrite' && (
          <textarea
            value={userText}
            onChange={e => {
              setUserText(e.target.value);
              setChecked(false);
            }}
            rows={3}
            placeholder="Write your explanation or bullet points..."
            className="w-full px-3 py-2 text-xs border rounded-lg bg-slate-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-slate-300 resize-y"
          />
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <button
          type="button"
          onClick={handleHint}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors"
        >
          <Lightbulb className="w-3 h-3 text-amber-700" />
          <span>Hint</span>
        </button>

        <button
          type="button"
          onClick={handleReveal}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded bg-purple-100 hover:bg-purple-200 text-purple-900 transition-colors"
        >
          <Eye className="w-3 h-3 text-purple-700" />
          <span>{showReveal ? 'Hide Model' : 'Reveal'}</span>
        </button>

        <button
          type="button"
          onClick={handleCheck}
          className="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-bold rounded bg-emerald-600 hover:bg-emerald-700 text-white transition-colors ml-auto shadow-sm"
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Check</span>
        </button>
      </div>

      {/* Hint Accordion */}
      {showHint && item.hint && (
        <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50/90 border border-amber-200 text-xs text-amber-900 flex items-start gap-1.5 animate-fadeIn">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Hint:</strong> {item.hint}
          </div>
        </div>
      )}

      {/* Reveal Accordion */}
      {showReveal && (
        <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-50/90 border border-emerald-200 text-xs text-emerald-950 animate-fadeIn">
          <div className="font-bold text-emerald-900 mb-0.5">Correct / Model Answer:</div>
          <div className="text-slate-800 font-medium">{getModelAnswer()}</div>
          {item.explain && (
            <div className="text-[11px] text-emerald-800 mt-1 italic">
              <strong>Context:</strong> {item.explain}
            </div>
          )}
        </div>
      )}

      {/* Checked Result Banner */}
      {checked && (
        <div className={`mt-2.5 p-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
          isCorrect
            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
            : 'bg-rose-100 text-rose-900 border border-rose-300'
        }`}>
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Well done! Correct answer.</span>
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Not quite. Check the hint or reveal to review.</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
