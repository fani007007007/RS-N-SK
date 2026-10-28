/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 6: Reading & Comprehension — Strategies & Exam Passage
 */

import React from 'react';
import { BookOpen, CheckCircle2, Bookmark, Lightbulb } from 'lucide-react';
import { READING_DATA } from '../data/eslData';

export const ReadingSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-purple-600">
        <div className="flex items-center gap-2 mb-2 text-purple-800">
          <BookOpen className="w-5 h-5 text-purple-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Reading &amp; Comprehension — Academic Strategies &amp; Full Model Passage
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Equip yourself with the four core reading skills: <strong>Skimming</strong> for general gist, <strong>Scanning</strong> for precise keywords, answering <strong>Literal questions</strong>, and formulating evidence-based <strong>Inferences</strong>.
        </p>

        {/* Strategies & PEEL Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-purple-50/70 rounded-xl border border-purple-200">
            <h3 className="text-sm font-bold text-purple-950 mb-2">
              The Four Reading Modalities
            </h3>
            <ol className="space-y-1.5 text-xs text-purple-950 font-medium">
              <li>• <strong>Skimming:</strong> Rapidly viewing headings, first/last lines to grasp the overarching narrative.</li>
              <li>• <strong>Scanning:</strong> Glancing specifically for dates, numbers, proper nouns, or food containers.</li>
              <li>• <strong>Literal Retrieval:</strong> The answer exists directly in black-and-white print.</li>
              <li>• <strong>Inference:</strong> Combining textual clues with your own analytical deduction.</li>
            </ol>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-purple-600" />
              <span>PEEL Response Formula</span>
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed mb-2">
              For higher-mark inference and opinion responses (4–8 marks), structure your paragraph using <strong>PEEL</strong>:
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-purple-900">
              <span className="p-1.5 bg-white rounded border border-purple-200"><strong>P</strong>oint: State main claim</span>
              <span className="p-1.5 bg-white rounded border border-purple-200"><strong>E</strong>vidence: Quote or cite</span>
              <span className="p-1.5 bg-white rounded border border-purple-200"><strong>E</strong>xplain: Elaborate why</span>
              <span className="p-1.5 bg-white rounded border border-purple-200"><strong>L</strong>ink: Conclude back</span>
            </div>
          </div>
        </div>

        {/* Full Exam Reading Passage */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>📖</span>
              <span>Passage: &quot;A Memorable Day at the Zoo&quot;</span>
            </h3>
            <span className="text-[10px] bg-purple-100 text-purple-900 font-bold px-2 py-0.5 rounded-full">
              Full Exam Text
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm leading-relaxed text-slate-800 space-y-3 font-serif">
            <p>
              Last Sunday, my family went to the City Zoo. It was a sunny day, perfect for a picnic. We packed a <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">loaf of bread</mark>, a <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">carton of juice</mark>, and some apples. When we arrived, we saw many animals.
            </p>
            <p>
              First, we visited the monkey enclosure. The monkeys were <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">monkeying around</mark> on the trees, swinging from branch to branch. It was funny to watch them.
            </p>
            <p>
              Next, we went to the lion&apos;s den. The lion looked very <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">fierce</mark>, but he was actually sleeping. My little sister was scared, but I told her it was a <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">piece of cake</mark> to watch him from behind the glass.
            </p>
            <p>
              At lunchtime, we were so hungry that we <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">wolfed down</mark> our sandwiches. After eating, we felt like <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">couch potatoes</mark>, so we sat on a bench and watched the birds. Suddenly, a duck came close to us. My dad tried to feed it, but the duck <mark className="bg-amber-200 text-amber-950 px-1 rounded font-sans font-semibold">ducked out</mark> and ran away into the pond. It was a memorable meal and a fun day!
            </p>
          </div>
        </div>

        {/* Model Analysis Table */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Authentic Mark Scheme Model Solutions
          </h3>
          <div className="space-y-2.5">
            {READING_DATA.map((item, idx) => (
              <div key={idx} className="p-3.5 bg-purple-50/50 rounded-xl border border-purple-200 text-xs">
                <div className="font-bold text-purple-950 mb-1">{item.q}</div>
                <div className="text-slate-800 font-medium">
                  <strong className="text-emerald-800">Model Solution:</strong> {item.model}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
