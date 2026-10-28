/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 7: Full Mid-Term Exam Practice (100 Marks)
 */

import React, { useState } from 'react';
import { FileText, CheckCircle, RotateCcw, Eye, Lightbulb, Award, CheckCircle2, XCircle } from 'lucide-react';
import { MATCH_TERMS, MATCH_DEFS, TASK2_DATA, PRACTICE_SETS } from '../data/masterclassData';
import { PracticeCard } from './PracticeCard';
import { sound } from '../utils/audio';

export const ExamSection: React.FC = () => {
  // Section A State (Matching)
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);
  const [matchScore, setMatchScore] = useState<number | null>(null);

  // Section E Task 1 State (SMART Goal)
  const [t1Goal, setT1Goal] = useState('');
  const [t1S, setT1S] = useState('');
  const [t1M, setT1M] = useState('');
  const [t1A, setT1A] = useState('');
  const [t1R, setT1R] = useState('');
  const [t1T, setT1T] = useState('');
  const [t1Type, setT1Type] = useState('');
  const [t1Reason, setT1Reason] = useState('');
  const [t1Reveal, setT1Reveal] = useState(false);

  // Section E Task 2 State (Priority Table)
  const [t2CValues, setT2CValues] = useState<Record<string, string>>({});
  const [t2DValues, setT2DValues] = useState<Record<string, string>>({});
  const [t2Quad, setT2Quad] = useState('');
  const [t2Checked, setT2Checked] = useState(false);
  const [t2Score, setT2Score] = useState<number | null>(null);
  const [t2Reveal, setT2Reveal] = useState(false);

  // Section E Task 3 State (Schedule)
  const [t3Times, setT3Times] = useState<string[]>(Array(6).fill(''));
  const [t3Acts, setT3Acts] = useState<string[]>(Array(6).fill(''));
  const [t3Rules, setT3Rules] = useState('');
  const [t3Reveal, setT3Reveal] = useState(false);

  // Section A Handlers
  const handleMatchSelect = (termNum: number, letter: string) => {
    setMatchAnswers(prev => ({ ...prev, [termNum]: letter }));
    setMatchChecked(false);
  };

  const checkSectionA = () => {
    let score = 0;
    MATCH_TERMS.forEach(item => {
      if (matchAnswers[item.n] === item.correct) {
        score++;
      }
    });
    setMatchScore(score);
    setMatchChecked(true);
    if (score === MATCH_TERMS.length) {
      sound.playSuccess();
    } else {
      sound.playClick();
    }
  };

  const revealSectionA = () => {
    const revealed: Record<number, string> = {};
    MATCH_TERMS.forEach(item => {
      revealed[item.n] = item.correct;
    });
    setMatchAnswers(revealed);
    setMatchScore(10);
    setMatchChecked(true);
    sound.playClick();
  };

  const resetSectionA = () => {
    setMatchAnswers({});
    setMatchChecked(false);
    setMatchScore(null);
  };

  // Section E Task 2 Handlers
  const checkTask2 = () => {
    let score = 0;
    TASK2_DATA.forEach(t => {
      if (parseInt(t2CValues[t.id]) === t.C) score++;
      if (t2DValues[t.id] === t.D) score++;
    });
    if (t2Quad.startsWith('Quadrant I')) score += 2;

    setT2Score(score);
    setT2Checked(true);
    if (score === 10) sound.playSuccess();
    else sound.playClick();
  };

  const revealTask2 = () => {
    const cVals: Record<string, string> = {};
    const dVals: Record<string, string> = {};
    TASK2_DATA.forEach(t => {
      cVals[t.id] = String(t.C);
      dVals[t.id] = t.D;
    });
    setT2CValues(cVals);
    setT2DValues(dVals);
    setT2Quad('Quadrant I — Necessities: react to tasks');
    setT2Score(10);
    setT2Checked(true);
    setT2Reveal(true);
    sound.playClick();
  };

  const resetTask2 = () => {
    setT2CValues({});
    setT2DValues({});
    setT2Quad('');
    setT2Checked(false);
    setT2Score(null);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-amber-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 text-amber-700">
            <FileText className="w-5 h-5" />
            <h2 className="text-xl font-extrabold tracking-tight">
              Mid-Term Masterclass Examination (Complete Sections A–F)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-black">
              Time: 50 Mins
            </span>
            <span className="bg-blue-100 text-blue-900 border border-blue-300 px-3 py-1 rounded-full text-xs font-black">
              Total: 100 Marks
            </span>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Interactive full-length digital exam paper covering NCC Education Topic 1: Getting Ready for Study. Instant marking, hints, and model solutions provided for each section.
        </p>
      </div>

      {/* SECTION A: MATCHING (10 Marks) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-blue-600">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-extrabold text-blue-900">
            SECTION A — Terminology &amp; Definitions (10 Marks)
          </h3>
          <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
            10 Questions • 1 Mark Each
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-4">
          Match each study term (1–10) with its exact definition (a–j). Select the corresponding letter from the dropdown.
        </p>

        {/* Terminology Rows */}
        <div className="space-y-3 mb-5">
          {MATCH_TERMS.map(t => {
            const currentVal = matchAnswers[t.n] || '';
            const isCorrect = currentVal === t.correct;

            return (
              <div key={t.n} className={`p-3.5 rounded-xl border text-xs transition-colors ${
                matchChecked
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/50'
                    : 'border-rose-300 bg-rose-50/50'
                  : 'border-slate-200 bg-slate-50/70'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-slate-900">
                    {t.n}. {t.term}
                  </span>
                  <select
                    value={currentVal}
                    onChange={e => handleMatchSelect(t.n, e.target.value)}
                    className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  >
                    <option value="">-- Choose definition letter (a–j) --</option>
                    {Object.keys(MATCH_DEFS).map(letter => (
                      <option key={letter} value={letter}>
                        {letter.toUpperCase()}. {MATCH_DEFS[letter].substring(0, 75)}...
                      </option>
                    ))}
                  </select>
                </div>

                {matchChecked && (
                  <div className={`text-[11px] font-semibold mt-1 flex items-center gap-1 ${
                    isCorrect ? 'text-emerald-700' : 'text-rose-700'
                  }`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Correct! ({t.correct.toUpperCase()})</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Answer is ({t.correct.toUpperCase()}): {MATCH_DEFS[t.correct]}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section A Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
          <button
            onClick={checkSectionA}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-sm transition-all"
          >
            Check Section A
          </button>
          <button
            onClick={revealSectionA}
            className="px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg text-xs font-bold transition-all"
          >
            Reveal Answers
          </button>
          <button
            onClick={resetSectionA}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all"
          >
            Reset
          </button>

          {matchScore !== null && (
            <div className="ml-auto font-black text-sm text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
              Score: {matchScore} / 10
            </div>
          )}
        </div>
      </div>

      {/* SECTION B: MULTIPLE CHOICE (20 Marks) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-cyan-600">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-extrabold text-cyan-900">
            SECTION B — Multiple Choice Questions (20 Marks)
          </h3>
          <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded-full">
            10 Questions • 2 Marks Each
          </span>
        </div>
        <div className="space-y-3 mt-4">
          {PRACTICE_SETS.examB.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* SECTION C: FILL IN THE BLANKS (10 Marks) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-emerald-600">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-extrabold text-emerald-900">
            SECTION C — Fill in the Blanks (10 Marks)
          </h3>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
            10 Questions • 1 Mark Each
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-3">
          Complete each sentence using a word from the box below. Two words are extra.
        </p>

        {/* Word Box */}
        <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 mb-4 flex flex-wrap gap-1.5 justify-center">
          {['achievement', 'concentration', 'daily', 'Necessities', 'Pomodoro', 'presentation', 'prioritization', 'supervision', 'Waste', 'will', 'tutorial', 'motivation'].map((word, idx) => (
            <span key={idx} className="bg-white text-emerald-950 font-bold px-2.5 py-1 rounded-md text-xs border border-emerald-300 shadow-2xs">
              {word}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          {PRACTICE_SETS.examC.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* SECTION D: TRUE OR FALSE (10 Marks) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-pink-600">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-extrabold text-pink-900">
            SECTION D — True or False (10 Marks)
          </h3>
          <span className="text-xs bg-pink-100 text-pink-800 font-bold px-2 py-0.5 rounded-full">
            10 Questions • 1 Mark Each
          </span>
        </div>
        <div className="space-y-3 mt-4">
          {PRACTICE_SETS.examD.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* SECTION E: TASK CREATION & COMPLETION (30 Marks) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-purple-600">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-extrabold text-purple-900">
            SECTION E — Task Creation &amp; Completion (30 Marks)
          </h3>
          <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">
            3 Core Tasks • 10 Marks Each
          </span>
        </div>

        {/* Task 1: SMART Study Goal */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-900">
              TASK 1 — Create a SMART study goal (10 Marks)
            </h4>
            <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
              Part (a) 2m • (b) 5m • (c) 3m
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="font-bold text-slate-800 block mb-1">
                (a) Write your goal in one complete sentence (2 marks):
              </label>
              <textarea
                value={t1Goal}
                onChange={e => setT1Goal(e.target.value)}
                placeholder="e.g., I will obtain the confidence to give the end-of-module presentation from note cards in front of a mirror and friends for the next 3 weeks..."
                rows={2}
                className="w-full p-2 border rounded-lg bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">
                (b) Show how your goal meets each SMART element (5 marks):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Specific: ..."
                  value={t1S}
                  onChange={e => setT1S(e.target.value)}
                  className="p-2 border rounded-lg bg-white"
                />
                <input
                  type="text"
                  placeholder="Measurable: ..."
                  value={t1M}
                  onChange={e => setT1M(e.target.value)}
                  className="p-2 border rounded-lg bg-white"
                />
                <input
                  type="text"
                  placeholder="Attainable: ..."
                  value={t1A}
                  onChange={e => setT1A(e.target.value)}
                  className="p-2 border rounded-lg bg-white"
                />
                <input
                  type="text"
                  placeholder="Relevant: ..."
                  value={t1R}
                  onChange={e => setT1R(e.target.value)}
                  className="p-2 border rounded-lg bg-white"
                />
                <input
                  type="text"
                  placeholder="Time-Based: ..."
                  value={t1T}
                  onChange={e => setT1T(e.target.value)}
                  className="p-2 border rounded-lg bg-white sm:col-span-2"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">
                (c) Is this a long-term or short-term goal? Give one reason (3 marks):
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={t1Type}
                  onChange={e => setT1Type(e.target.value)}
                  className="p-2 border rounded-lg bg-white sm:w-48"
                >
                  <option value="">-- Choose goal type --</option>
                  <option>Short-term goal</option>
                  <option>Long-term goal</option>
                </select>
                <input
                  type="text"
                  placeholder="Give one reason (e.g., covers immediate weekly actions vs whole year)..."
                  value={t1Reason}
                  onChange={e => setT1Reason(e.target.value)}
                  className="p-2 border rounded-lg bg-white flex-1"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setT1Reveal(!t1Reveal)}
                className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg text-xs font-bold transition-all"
              >
                {t1Reveal ? 'Hide Model Answer' : '👁 Reveal Model Answer'}
              </button>
            </div>

            {t1Reveal && (
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950">
                <strong>Model Goal Sentence:</strong> &quot;I will obtain the confidence to give the end-of-module presentation from note cards in front of a mirror and friends for the next 3 weeks.&quot;
                <br />
                <strong>S:</strong> Focus on presentation confidence • <strong>M:</strong> Clear delivery without stumbling, good pass • <strong>A:</strong> Regular practice with buddies • <strong>R:</strong> Worth 25% of assessment &amp; transferable • <strong>T:</strong> Practiced over 3 weeks.
                <br />
                <strong>Type:</strong> Short-term goal because it specifies immediate daily/weekly study routines that build toward the end-of-year result.
              </div>
            )}
          </div>
        </div>

        {/* Task 2: Priority Table */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-900">
              TASK 2 — Complete the &quot;Assessing Priorities&quot; table (10 Marks)
            </h4>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Col C (4m) • Col D (4m) • Part (c) (2m)
            </span>
          </div>
          <p className="text-xs text-slate-600 mb-3">
            (a) Calculate Column C (A − B) and (b) write the order of priority (1st–4th) in Column D.
          </p>

          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden bg-white">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Task</th>
                  <th className="p-2 border-r border-slate-200">A: Importance (6–10)</th>
                  <th className="p-2 border-r border-slate-200">B: Urgency (1–5)</th>
                  <th className="p-2 border-r border-slate-200">C: (A − B)</th>
                  <th className="p-2">D: Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {TASK2_DATA.map(t => {
                  const currentC = t2CValues[t.id] || '';
                  const currentD = t2DValues[t.id] || '';
                  const cOK = parseInt(currentC) === t.C;
                  const dOK = currentD === t.D;

                  return (
                    <tr key={t.id} className="hover:bg-slate-50">
                      <td className="p-2 font-medium border-r border-slate-200">
                        <strong>{t.id}.</strong> {t.task}
                      </td>
                      <td className="p-2 border-r border-slate-200 text-center font-bold">{t.A}</td>
                      <td className="p-2 border-r border-slate-200 text-center font-bold">{t.B}</td>
                      <td className="p-2 border-r border-slate-200 text-center">
                        <input
                          type="number"
                          value={currentC}
                          onChange={e => {
                            setT2CValues({ ...t2CValues, [t.id]: e.target.value });
                            setT2Checked(false);
                          }}
                          className={`w-16 p-1 text-center border rounded font-bold ${
                            t2Checked
                              ? cOK ? 'border-emerald-500 bg-emerald-50' : 'border-rose-500 bg-rose-50'
                              : 'border-slate-300'
                          }`}
                        />
                      </td>
                      <td className="p-2 text-center">
                        <select
                          value={currentD}
                          onChange={e => {
                            setT2DValues({ ...t2DValues, [t.id]: e.target.value });
                            setT2Checked(false);
                          }}
                          className={`p-1 border rounded font-bold ${
                            t2Checked
                              ? dOK ? 'border-emerald-500 bg-emerald-50' : 'border-rose-500 bg-rose-50'
                              : 'border-slate-300'
                          }`}
                        >
                          <option value="">--</option>
                          <option>1st</option>
                          <option>2nd</option>
                          <option>3rd</option>
                          <option>4th</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs">
            <label className="font-bold text-slate-800 block mb-1">
              (c) Which urgent/important quadrant does Task P fall into, and what is its action approach? (2 marks)
            </label>
            <select
              value={t2Quad}
              onChange={e => {
                setT2Quad(e.target.value);
                setT2Checked(false);
              }}
              className="w-full sm:w-auto p-2 border border-slate-300 rounded-lg bg-white"
            >
              <option value="">-- Select quadrant --</option>
              <option>Quadrant I — Necessities: react to tasks (DO)</option>
              <option>Quadrant II — Quality: proactive approach (PLAN)</option>
              <option>Quadrant III — Deception: tasks to be avoided (AVOID)</option>
              <option>Quadrant IV — Waste: tasks to be limited (ELIMINATE)</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200 mt-3">
            <button
              onClick={checkTask2}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all"
            >
              Check Task 2
            </button>
            <button
              onClick={revealTask2}
              className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg text-xs font-bold transition-all"
            >
              Reveal Answers
            </button>
            <button
              onClick={resetTask2}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all"
            >
              Reset
            </button>

            {t2Score !== null && (
              <div className="ml-auto font-black text-xs text-emerald-900 bg-emerald-100 px-3 py-1 rounded-lg">
                Task 2 Score: {t2Score} / 10
              </div>
            )}
          </div>
        </div>

        {/* Task 3: Schedule Builder */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-900">
              TASK 3 — Create a personal study schedule (10 Marks)
            </h4>
            <span className="text-[11px] font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded">
              Schedule (6m) • Two Rules (4m)
            </span>
          </div>
          <p className="text-xs text-slate-600 mb-3">
            (a) Build tomorrow&apos;s schedule with ALL 6 required entries: two study sessions with times, one class/tutorial, one family/friends/relaxation entry, one clearly unscheduled buffer period, and one follow-up task.
          </p>

          <div className="space-y-2 mb-3 text-xs">
            {[0, 1, 2, 3, 4, 5].map(idx => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Time (e.g. 0${8 + idx}:00–0${9 + idx}:00)`}
                  value={t3Times[idx]}
                  onChange={e => {
                    const newT = [...t3Times];
                    newT[idx] = e.target.value;
                    setT3Times(newT);
                  }}
                  className="w-1/3 p-2 border rounded-lg bg-white"
                />
                <input
                  type="text"
                  placeholder={`Entry ${idx + 1} (e.g. Study session / tutorial / buffer)`}
                  value={t3Acts[idx]}
                  onChange={e => {
                    const newA = [...t3Acts];
                    newA[idx] = e.target.value;
                    setT3Acts(newA);
                  }}
                  className="w-2/3 p-2 border rounded-lg bg-white"
                />
              </div>
            ))}
          </div>

          <div className="text-xs">
            <label className="font-bold text-slate-800 block mb-1">
              (b) State two rules for keeping a schedule that you followed (4 marks):
            </label>
            <textarea
              value={t3Rules}
              onChange={e => setT3Rules(e.target.value)}
              placeholder="1) ... 2) ..."
              rows={2}
              className="w-full p-2 border rounded-lg bg-white mb-2"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={() => setT3Reveal(!t3Reveal)}
              className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg text-xs font-bold transition-all"
            >
              {t3Reveal ? 'Hide Model Schedule' : '👁 Reveal Model Schedule'}
            </button>
          </div>

          {t3Reveal && (
            <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950">
              <strong>Model Schedule:</strong>
              <br />
              • 08:00–09:30: Study session 1 (Read module chapter)
              <br />
              • 10:00–11:00: RSS tutorial (Class / tutorial)
              <br />
              • 13:00–14:00: Lunch with friends (Relaxation / social)
              <br />
              • 14:00–15:30: Study session 2 (Draft 300 words of proposal)
              <br />
              • 15:30–16:15: Unscheduled buffer (Emergency / delays)
              <br />
              • 16:15–16:45: Follow-up (Email supervisor reference list)
              <br />
              <strong>Two Rules Followed:</strong> (1) Did not schedule 100% of the day — left a 45-min buffer; (2) Use one planner kept always and checked daily.
            </div>
          )}
        </div>
      </div>

      {/* SECTION F: SHORT ANSWER QUESTIONS (20 Marks) */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-rose-600">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-extrabold text-rose-900">
            SECTION F — Short Answer Questions (20 Marks)
          </h3>
          <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
            5 Questions • 4 Marks Each
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-4">
          Answer in complete sentences or bullet points. Check against the authentic mark scheme model answers.
        </p>

        <div className="space-y-3">
          {PRACTICE_SETS.examF.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
