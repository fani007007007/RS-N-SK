/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 2: Procrastination — Recognise It, Then Beat It
 */

import React from 'react';
import { Clock, AlertOctagon, Zap, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRACTICE_SETS } from '../data/masterclassData';
import { PracticeCard } from './PracticeCard';

export const ProcrastinationSection: React.FC = () => {
  const dundeeSigns = [
    { title: 'Tidying the desk / cleaning the room', desc: 'Doing it repeatedly when study is due' },
    { title: 'Organising files on your computer', desc: 'Continuously adjusting folders instead of writing' },
    { title: 'Making another to-do list', desc: 'Over-planning as a substitute for action' },
    { title: 'Making another cup of coffee', desc: 'The classic "just one more drink before I start" ritual' },
    { title: 'Answering emails/texts constantly', desc: 'Responding immediately to non-urgent messages' },
    { title: 'Frequent internet browsing', desc: 'Falling into research rabbit holes with zero relevance' },
    { title: 'Checking social media often', desc: 'Scrolling Instagram, TikTok, Twitter/X' },
    { title: 'Playing online games', desc: 'Gaming when coursework deadlines loom' },
    { title: 'Daydreaming & staring into space', desc: 'Loss of attention leading to task avoidance' }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-rose-600">
        <div className="flex items-center gap-2 mb-2 text-rose-700">
          <Clock className="w-5 h-5" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Topic 1: Procrastination — Recognise It, Then Beat It
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          <strong>Procrastination (Exam A5)</strong> is <em>delaying or avoiding work by doing irrelevant activities, such as repeatedly tidying the desk or constantly checking social media</em>.
        </p>

        {/* Key Insight Pill */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-xl p-4 mb-6 shadow-xs">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-amber-950">
                Key Insight (Mid-Term Exam C7, F5)
              </h3>
              <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                &quot;Often <strong>poor prioritisation</strong> prevents students from achieving their best, <strong>NOT lack of ability</strong>.&quot; Procrastination is usually a systems problem that can be overcome with structured habits, not an inherent character flaw!
              </p>
            </div>
          </div>
        </div>

        {/* Dundee Signs Grid */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Coffee className="w-4 h-4 text-rose-600" />
            <span>How to Recognise It! (University of Dundee, 2023) (Exam B8, D6)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {dundeeSigns.map((sign, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>{sign.title}</span>
                </div>
                <p className="text-[11px] text-slate-600 pl-3">
                  {sign.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900">
            <strong>What is NOT procrastination (Exam B8):</strong> Crossing off completed tasks, doing difficult work when concentration is best, and entering deadlines into your diary are all <em>effective study habits</em>!
          </div>
        </div>

        {/* Getting Down to Work & Grinding to a Halt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200">
            <h3 className="text-sm font-bold text-blue-950 mb-2 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Getting Down to Work</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-blue-950 font-medium">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Peak concentration (Exam C8):</strong> Tackle hard tasks when mental focus is sharpest.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>&apos;Pomodoro&apos; technique (Exam C4):</strong> 25 min focused work + 5 min break (Francesco Cirillo, late 1980s).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Start easy:</strong> Skim read or edit yesterday&apos;s draft to overcome inertia.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Use a visual timer:</strong> Set a defined countdown for momentum.</span>
              </li>
            </ul>
          </div>

          <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200">
            <h3 className="text-sm font-bold text-rose-950 mb-2 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-rose-600" />
              <span>Grinding to a Halt? (Exam D9)</span>
            </h3>
            <p className="text-xs text-rose-950 mb-2">
              To <em>grind to a halt</em> means to slow down and lose momentum. <strong>Do NOT quit studying for the week!</strong>
            </p>
            <ul className="space-y-1.5 text-xs text-rose-950 font-medium">
              <li>• <strong>Change your environment</strong> or try white noise / quiet music.</li>
              <li>• <strong>Aim for just 10 more minutes</strong> to finish a natural sub-section.</li>
              <li>• <strong>Take a short, timed break</strong> with a stretch or brisk walk.</li>
              <li>• <strong>Finish by setting up</strong> desk and notes for the next session.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practice Questions for Section 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Section 2 Checkpoint & Interactive Practice</span>
        </h3>
        <div className="space-y-3">
          {PRACTICE_SETS.proc.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
