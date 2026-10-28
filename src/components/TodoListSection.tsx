/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 4: Create a 'To-Do' List
 */

import React from 'react';
import { CheckSquare, ArrowDown, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRACTICE_SETS } from '../data/masterclassData';
import { PracticeCard } from './PracticeCard';

export const TodoListSection: React.FC = () => {
  const steps = [
    { num: 1, title: 'Break large tasks into smaller, manageable actions (Chunking)', desc: 'Large tasks feel overwhelming. Split "Write research proposal" into "find 5 sources", "draft methodology". Supported by cognitive psychology: working memory holds ~7 items (Miller, 1956).' },
    { num: 2, title: 'Prioritise your tasks', desc: 'Use the urgent/important matrix or the priority scoring table (Column C = A − B) to determine what must be done first.' },
    { num: 3, title: 'Enter your prioritised list into your diary', desc: 'A task merely on a scrap of paper is easily ignored. A task scheduled into a specific diary time slot gets completed.' },
    { num: 4, title: 'Ensure high-priority tasks are done', desc: 'Tackle high-priority items during your peak energy hours rather than pushing them to late evening.' },
    { num: 5, title: 'Note future follow-up actions in your diary', desc: 'Completed a tutorial or meeting? Immediately record any questions or required readings that emerged.' },
    { num: 6, title: 'Identify tasks you can delegate, or dump', desc: 'Be ruthless with your commitments. If something has zero value or can be handed off, delegate or eliminate it.' },
    { num: 7, title: 'Cross off completed tasks for a sense of achievement', desc: 'Physically crossing off an item triggers a dopamine release in the brain, reinforcing study momentum.' },
    { num: 8, title: 'Transfer uncompleted tasks to next day\'s list', desc: 'Never simply discard uncompleted tasks! Rollover ensures they rise higher in priority as deadlines near.' }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-cyan-600">
        <div className="flex items-center gap-2 mb-2 text-cyan-700">
          <CheckSquare className="w-5 h-5" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Topic 1: Create a &apos;To-Do&apos; List
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          A <strong>&apos;to-do&apos; list (Exam A9)</strong> is <em>a list in which large, overwhelming tasks are broken into smaller, manageable actions, prioritised, and entered into your diary</em>. It is a strategic planning tool, not just a passive memory reminder.
        </p>

        {/* 2-Minute Rule Highlight */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 p-4 rounded-xl mb-6 shadow-xs">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-cyan-950">
                Pro Tip: The 2-Minute Rule (David Allen, Getting Things Done)
              </h3>
              <p className="text-xs text-cyan-900 mt-1 leading-relaxed">
                If an incoming task takes less than 2 minutes (e.g., submitting an attendance form, sending a quick confirmation email, downloading a lecture handout), <strong>do it immediately</strong> rather than writing it down and filing it. Small micro-tasks never pile up!
              </p>
            </div>
          </div>
        </div>

        {/* 8-Step Framework */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-600" />
            <span>The 8-Step To-Do List Framework</span>
          </h3>
          <div className="space-y-2.5">
            {steps.map(s => (
              <div key={s.num} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-300 transition-colors flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {s.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Trap */}
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-950">
          <strong>Exam Trap (Mid-Term D10/F):</strong> Uncompleted tasks at the end of the day are <strong>transferred</strong> to the next day&apos;s list, never discarded or forgotten.
        </div>
      </div>

      {/* Practice Questions for Section 4 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Section 4 Checkpoint & Interactive Practice</span>
        </h3>
        <div className="space-y-3">
          {PRACTICE_SETS.todo.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
