/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 6: Keep a Schedule & Personal Time Management
 */

import React from 'react';
import { Calendar, ShieldAlert, CheckCircle2, Bookmark, Layers } from 'lucide-react';
import { PRACTICE_SETS } from '../data/masterclassData';
import { PracticeCard } from './PracticeCard';

export const SchedulesSection: React.FC = () => {
  const modelSchedule = [
    { time: '08:00 – 09:30', activity: 'Study session 1: read module chapter, take Cornell notes', type: 'Study Session', badge: 'bg-blue-100 text-blue-900 border-blue-200' },
    { time: '10:00 – 11:00', activity: 'RSS tutorial, Room B2 (active participation & Q&A)', type: 'Class / Tutorial', badge: 'bg-emerald-100 text-emerald-900 border-emerald-200' },
    { time: '13:00 – 14:00', activity: 'Lunch with study friends (rest, recharge, social)', type: 'Family / Friends', badge: 'bg-purple-100 text-purple-900 border-purple-200' },
    { time: '14:00 – 15:30', activity: 'Study session 2: draft 300 words of research proposal', type: 'Study Session', badge: 'bg-blue-100 text-blue-900 border-blue-200' },
    { time: '15:30 – 16:15', activity: 'Unscheduled buffer period — handles delays and unexpected queries', type: 'Buffer (Emergency)', badge: 'bg-amber-100 text-amber-900 border-amber-300 ring-1 ring-amber-400' },
    { time: '16:15 – 16:45', activity: 'Follow-up task: email supervisor the verified reference bibliography', type: 'Follow-Up Task', badge: 'bg-indigo-100 text-indigo-900 border-indigo-200' }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-pink-600">
        <div className="flex items-center gap-2 mb-2 text-pink-700">
          <Calendar className="w-5 h-5" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Topic 1: Keep a Schedule
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          A <strong>diary/schedule (Exam A10)</strong> is <em>one planner (paper diary, calendar app or Bullet Journal) that you keep with you always and check at least daily</em>. It turns your prioritised to-do list and SMART goals into a time-bound reality.
        </p>

        {/* The Golden Principles of Scheduling */}
        <div className="bg-pink-50/70 p-4 rounded-xl border border-pink-200 mb-6">
          <h3 className="text-xs font-bold text-pink-950 uppercase tracking-wider mb-2">
            The Essential Rules for Scheduling (Exam C9, D3, Task 3)
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-pink-950 font-medium">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
              <span><strong>Use ONE unified system:</strong> Keep it with you always and check it at least daily (Exam C9).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
              <span><strong>Do NOT schedule 100% of your time:</strong> Always leave a 20–30% buffer for emergencies (Exam D3).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
              <span><strong>Lock non-negotiable anchors:</strong> Fix class times, tutorials, and assignment deadlines first.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
              <span><strong>Plan deliberate relaxation:</strong> Protect time for family and friends rather than using leftover minutes.</span>
            </li>
          </ul>
        </div>

        {/* Popular Tools Comparison */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-pink-600" />
            <span>Modern Scheduling &amp; Project Workflow Systems</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Tool</th>
                  <th className="p-2 border-r border-slate-200">Format</th>
                  <th className="p-2">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-bold text-pink-900 border-r border-slate-200">Trello (Lecture Slide)</td>
                  <td className="p-2 border-r border-slate-200">Kanban Board (To Do → Doing → Done)</td>
                  <td className="p-2">Visual project tracking, coursework milestones, group research</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-bold text-pink-900 border-r border-slate-200">Google Calendar</td>
                  <td className="p-2 border-r border-slate-200">Cloud Calendar App</td>
                  <td className="p-2">Time-blocking, color-coded study sessions, phone alerts</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-bold text-pink-900 border-r border-slate-200">Bullet Journal (Ryder Carroll)</td>
                  <td className="p-2 border-r border-slate-200">Physical Dot-Grid Notebook</td>
                  <td className="p-2">Mindful analog planning, rapid logging, habit tracking</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2 font-bold text-pink-900 border-r border-slate-200">Notion / Todoist</td>
                  <td className="p-2 border-r border-slate-200">Digital Workspace / Task Manager</td>
                  <td className="p-2">All-in-one note databases and recurring weekly routines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Model Schedule Table (Task 3 in Mid-Term Exam) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-pink-600" />
              <span>Model Study Schedule (Exam Task 3 — Six Required Entry Types)</span>
            </h3>
            <span className="text-[10px] bg-pink-100 text-pink-900 font-bold px-2 py-0.5 rounded-full">
              Full 10 Marks Model
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200 w-32">Time Block</th>
                  <th className="p-2 border-r border-slate-200">Scheduled Activity</th>
                  <th className="p-2 w-36">Entry Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {modelSchedule.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200 whitespace-nowrap">
                      {row.time}
                    </td>
                    <td className="p-2 border-r border-slate-200">
                      {row.activity}
                    </td>
                    <td className="p-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${row.badge}`}>
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
            <strong>Two Rules Followed (Task 3b):</strong>
            <br />
            1. <em>I did not schedule 100% of the day:</em> I reserved a dedicated 45-minute buffer period (15:30–16:15) to absorb unexpected delays or emergencies without derailing other plans.
            <br />
            2. <em>I use one single diary:</em> Kept with me at all times and reviewed at least daily so commitments never get scattered.
          </div>
        </div>
      </div>

      {/* Practice Questions for Section 6 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Section 6 Checkpoint & Interactive Practice</span>
        </h3>
        <div className="space-y-3">
          {PRACTICE_SETS.sched.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
