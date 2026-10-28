/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 3: Prioritising & the Eisenhower Matrix
 */

import React, { useState } from 'react';
import { Target, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRACTICE_SETS } from '../data/masterclassData';
import { calculatePriorityScore, classifyQuadrant } from '../utils/rules';
import { PracticeCard } from './PracticeCard';

export const PrioritisingSection: React.FC = () => {
  // Interactive Calculator State
  const [calcName, setCalcName] = useState('Submit proposal draft');
  const [calcA, setCalcA] = useState<number>(10);
  const [calcB, setCalcB] = useState<number>(1);

  const scoreC = calculatePriorityScore(calcA, calcB);
  const quadResult = classifyQuadrant(calcB, calcA);

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-emerald-600">
        <div className="flex items-center gap-2 mb-2 text-emerald-700">
          <Target className="w-5 h-5" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Topic 1: Prioritising &amp; the Urgent/Important Matrix
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          <strong>Prioritising (Exam A6)</strong> is <em>arranging tasks in order of importance and urgency so that the most important things are done first</em>.
        </p>

        {/* Why Prioritise */}
        <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 mb-6">
          <h3 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-2">
            Why Prioritising is Critical for Students (Exam F5)
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-emerald-950 font-medium">
            <li className="flex items-center gap-1.5">✓ Deals with competing and conflicting demands on time.</li>
            <li className="flex items-center gap-1.5">✓ Challenges procrastination before deadlines arrive.</li>
            <li className="flex items-center gap-1.5">✓ Ensures high-value long-term goals are accomplished.</li>
            <li className="flex items-center gap-1.5">✓ Expected in Higher Education &amp; transferable to the workplace.</li>
          </ul>
        </div>

        {/* Eisenhower 4 Quadrants Grid */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Assessing Priorities 1 — The Urgent/Important Matrix (Covey, 1989; Eisenhower)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Quadrant 1 */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-extrabold text-sm">🔴 Quadrant I</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase">DO NOW</span>
              </div>
              <div className="text-xs font-bold text-rose-100 mb-1">
                &quot;Necessities — react to tasks&quot;
              </div>
              <p className="text-[11px] text-white/90 mb-2">
                Urgent &amp; Important tasks requiring immediate attention.
              </p>
              <ul className="text-[11px] space-y-0.5 text-white/95">
                <li>• Looming assignment deadlines (tomorrow)</li>
                <li>• Genuine study emergencies and crises</li>
                <li>• Unscheduled cramming before exams</li>
              </ul>
            </div>

            {/* Quadrant 2 */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-sm ring-2 ring-emerald-400">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-extrabold text-sm">🟢 Quadrant II (Golden Zone)</span>
                <span className="bg-white/25 px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase">PLAN</span>
              </div>
              <div className="text-xs font-bold text-emerald-100 mb-1">
                &quot;Quality — proactive approach to tasks&quot;
              </div>
              <p className="text-[11px] text-white/90 mb-2">
                Important, Not Urgent. Where effective students spend most time!
              </p>
              <ul className="text-[11px] space-y-0.5 text-white/95">
                <li>• Reading ahead for tutorials &amp; research</li>
                <li>• Study skills development &amp; reflection</li>
                <li>• Goal setting, exercise, relationship building</li>
              </ul>
            </div>

            {/* Quadrant 3 */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-extrabold text-sm">🟠 Quadrant III</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase">AVOID</span>
              </div>
              <div className="text-xs font-bold text-amber-100 mb-1">
                &quot;Deception — tasks to be avoided&quot;
              </div>
              <p className="text-[11px] text-white/90 mb-2">
                Urgent, Not Important. Feels pressing, but does not advance your goals.
              </p>
              <ul className="text-[11px] space-y-0.5 text-white/95">
                <li>• Immediate text messages &amp; phone notifications</li>
                <li>• Unplanned social interruptions</li>
                <li>• Other people&apos;s urgent non-academic requests</li>
              </ul>
            </div>

            {/* Quadrant 4 */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-extrabold text-sm">⚪ Quadrant IV</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase">ELIMINATE</span>
              </div>
              <div className="text-xs font-bold text-slate-200 mb-1">
                &quot;Waste — tasks to be limited&quot;
              </div>
              <p className="text-[11px] text-white/90 mb-2">
                Not Urgent &amp; Not Important. Pure distractions and time drains.
              </p>
              <ul className="text-[11px] space-y-0.5 text-white/95">
                <li>• Aimless social media and web browsing</li>
                <li>• Excessive video bingeing and gaming</li>
                <li>• Trivial time-wasters that displace revision</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Priority Scoring Formula Explanation */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Assessing Priorities 2 — Priority Scoring Formula (Column C = A − B)
          </h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Col</th>
                  <th className="p-2 border-r border-slate-200">Name</th>
                  <th className="p-2 border-r border-slate-200">Scale</th>
                  <th className="p-2">How it works</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-blue-900 border-r border-slate-200">A</td>
                  <td className="p-2 border-r border-slate-200">Importance</td>
                  <td className="p-2 border-r border-slate-200">6 (unimportant) → 10 (essential)</td>
                  <td className="p-2">How critical the task is to academic goals</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-blue-900 border-r border-slate-200">B</td>
                  <td className="p-2 border-r border-slate-200">Urgency</td>
                  <td className="p-2 border-r border-slate-200">1 (immediate) → 5 (can wait)</td>
                  <td className="p-2">Lower number = more pressing urgency</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="p-2 font-bold text-emerald-900 border-r border-slate-200">C</td>
                  <td className="p-2 font-bold text-emerald-900 border-r border-slate-200">Priority Score</td>
                  <td className="p-2 font-bold text-emerald-900 border-r border-slate-200">C = A − B</td>
                  <td className="p-2 font-bold text-emerald-900">Highest scores in Column C are top priorities!</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-blue-900 border-r border-slate-200">D</td>
                  <td className="p-2 border-r border-slate-200">Order</td>
                  <td className="p-2 border-r border-slate-200">Rank by C</td>
                  <td className="p-2">1st, 2nd, 3rd, 4th, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-600 italic">
            Why subtract B? Because Urgency uses 1 as highest urgency, subtracting B gives high priority to items with urgency 1 and high importance 10 (10 − 1 = 9).
          </p>
        </div>

        {/* Interactive Priority Calculator */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 rounded-2xl shadow-md mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-bold text-white">
              Interactive Priority &amp; Quadrant Calculator
            </h3>
          </div>
          <p className="text-xs text-blue-200 mb-4">
            Test any task to immediately calculate its Column C score and see which Eisenhower quadrant applies:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label className="text-[11px] font-bold text-blue-200 block mb-1">
                Task Title
              </label>
              <input
                type="text"
                value={calcName}
                onChange={e => setCalcName(e.target.value)}
                className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-blue-950/70 border border-blue-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-blue-200 block mb-1">
                Importance A (6–10): {calcA}
              </label>
              <input
                type="range"
                min={6}
                max={10}
                value={calcA}
                onChange={e => setCalcA(parseInt(e.target.value))}
                className="w-full accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-blue-300">
                <span>6 Unimportant</span>
                <span>10 Essential</span>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-blue-200 block mb-1">
                Urgency B (1–5): {calcB}
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={calcB}
                onChange={e => setCalcB(parseInt(e.target.value))}
                className="w-full accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-blue-300">
                <span>1 Must do now</span>
                <span>5 Can wait</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-950/80 p-3.5 rounded-xl border border-blue-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-xs text-blue-300 block">Calculated Column C Score</span>
              <span className="text-2xl font-black text-amber-300">
                {calcA} − {calcB} = {scoreC}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-400 hidden sm:block" />
              <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <span className="text-[11px] text-blue-200 block">{quadResult.quadrant}</span>
                <span className="text-xs font-bold text-white">{quadResult.name} ({quadResult.action})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Questions for Section 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Section 3 Checkpoint & Interactive Practice</span>
        </h3>
        <div className="space-y-3">
          {PRACTICE_SETS.prio.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
