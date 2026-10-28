/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 5: SMART Goals & Goal Setting
 */

import React, { useState } from 'react';
import { Compass, CheckCircle2, Sparkles, Send, Target } from 'lucide-react';
import { PRACTICE_SETS } from '../data/masterclassData';
import { PracticeCard } from './PracticeCard';

export const SmartGoalsSection: React.FC = () => {
  // Interactive SMART Goal Builder State
  const [goalText, setGoalText] = useState(
    'I will obtain the confidence to give the end-of-module presentation from note cards in front of a mirror and friends for the next 3 weeks.'
  );
  const [sPart, setSPart] = useState('Focus on developing confidence for the end-of-module research proposal presentation');
  const [mPart, setMPart] = useState('Give the talk clearly and without stumbling, achieving a good pass grade');
  const [aPart, setAPart] = useState('Practice in front of study buddies and mirror to build progressive confidence');
  const [rPart, setRPart] = useState('Presentation is 25% of the unit assessment and a core transferable workplace skill');
  const [tPart, setTPart] = useState('The presentation takes place in 12 weeks; practice regularly over the next 3 weeks');
  const [goalType, setGoalType] = useState('Short-term goal');

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-purple-600">
        <div className="flex items-center gap-2 mb-2 text-purple-700">
          <Compass className="w-5 h-5" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Topic 1: Goal Setting — Long/Short-Term Goals &amp; SMART Goals
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          A <strong>SMART goal (Exam A4, B9)</strong> is <em>a goal-setting method with five elements: Specific, Measurable, Attainable, Relevant and Time-Based</em>.
        </p>

        {/* Long-Term vs Short-Term Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Long-Term vs Short-Term Goals (Exam A7, A8, D7)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Goal Type</th>
                  <th className="p-2.5 border-r border-slate-200">Definition</th>
                  <th className="p-2.5">Guiding Questions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-purple-900 border-r border-slate-200">
                    Long-term goal (Exam A7)
                  </td>
                  <td className="p-2.5 border-r border-slate-200">
                    Looks ahead over the year (assignment deadlines, commitments, plans) so that shorter goals can be set <em>confidently</em>.
                  </td>
                  <td className="p-2.5">
                    When are my cut-offs? What are my commitments for the year? Are there work events that will cut into study?
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-purple-900 border-r border-slate-200">
                    Short-term goal (Exam A8)
                  </td>
                  <td className="p-2.5 border-r border-slate-200">
                    Concerns what to do with the study time you have <em>today or this week</em>.
                  </td>
                  <td className="p-2.5">
                    What shall I do with today&apos;s study time? What&apos;s important today for this week&apos;s goals? Read module chapter or write draft?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2.5 p-2 bg-rose-50 rounded-lg border border-rose-200 text-xs text-rose-950">
            <strong>Exam Trap (D7):</strong> &quot;Short-term goals are plans for the whole year&quot; is <strong>FALSE</strong> — that defines long-term goals.
          </div>
        </div>

        {/* 5 SMART Elements Breakdown */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            The Five SMART Elements (Cottrell, 2019)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
              <span className="text-base font-black text-purple-700 block mb-0.5">S</span>
              <strong className="text-slate-900 block mb-1">Specific</strong>
              <p className="text-[11px] text-slate-600">Clear, unambiguous, and sharply focused on one exact target.</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
              <span className="text-base font-black text-purple-700 block mb-0.5">M</span>
              <strong className="text-slate-900 block mb-1">Measurable</strong>
              <p className="text-[11px] text-slate-600">Progress can be tracked with objective evidence, criteria, or metrics.</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
              <span className="text-base font-black text-purple-700 block mb-0.5">A</span>
              <strong className="text-slate-900 block mb-1">Attainable</strong>
              <p className="text-[11px] text-slate-600">Realistic for you given your current time, resources, and skills.</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
              <span className="text-base font-black text-purple-700 block mb-0.5">R</span>
              <strong className="text-slate-900 block mb-1">Relevant</strong>
              <p className="text-[11px] text-slate-600">Directly connected to passing your modules and career ambitions.</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
              <span className="text-base font-black text-purple-700 block mb-0.5">T</span>
              <strong className="text-slate-900 block mb-1">Time-Based</strong>
              <p className="text-[11px] text-slate-600">Bound by a clear deadline and distinct intermediate milestones.</p>
            </div>
          </div>
        </div>

        {/* Interactive SMART Goal Builder */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white p-5 rounded-2xl shadow-md mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-amber-300" />
            <h3 className="text-sm font-bold text-white">
              Interactive SMART Goal Studio (Task 1 in Exam)
            </h3>
          </div>
          <p className="text-xs text-purple-200 mb-4">
            Practice composing a complete SMART goal sentence and dissecting it against the five criteria:
          </p>

          <div className="space-y-3 mb-4">
            <div>
              <label className="text-[11px] font-bold text-purple-200 block mb-1">
                Complete Goal Sentence (Task 1a)
              </label>
              <textarea
                value={goalText}
                onChange={e => setGoalText(e.target.value)}
                rows={2}
                className="w-full text-xs p-2.5 rounded-lg bg-purple-950/70 border border-purple-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-[11px] font-semibold text-purple-300 block mb-0.5">Specific (S):</label>
                <input
                  type="text"
                  value={sPart}
                  onChange={e => setSPart(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-purple-300 block mb-0.5">Measurable (M):</label>
                <input
                  type="text"
                  value={mPart}
                  onChange={e => setMPart(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-purple-300 block mb-0.5">Attainable (A):</label>
                <input
                  type="text"
                  value={aPart}
                  onChange={e => setAPart(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-700 text-white text-xs"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-purple-300 block mb-0.5">Relevant (R):</label>
                <input
                  type="text"
                  value={rPart}
                  onChange={e => setRPart(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-700 text-white text-xs"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[11px] font-semibold text-purple-300 block mb-0.5">Time-Based (T):</label>
                <input
                  type="text"
                  value={tPart}
                  onChange={e => setTPart(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-700 text-white text-xs"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-purple-200 font-bold">Goal Classification:</span>
              <select
                value={goalType}
                onChange={e => setGoalType(e.target.value)}
                className="bg-purple-950 border border-purple-700 text-white text-xs rounded-lg px-2.5 py-1"
              >
                <option>Short-term goal</option>
                <option>Long-term goal</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Questions for Section 5 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Section 5 Checkpoint & Interactive Practice</span>
        </h3>
        <div className="space-y-3">
          {PRACTICE_SETS.smart.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
