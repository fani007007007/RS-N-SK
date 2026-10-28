/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 7: Functional Dialogue & Narrative Writing
 */

import React from 'react';
import { PenTool, MessageSquare, AlertTriangle, CheckCircle2, Bookmark } from 'lucide-react';

export const WritingSection: React.FC = () => {
  const restaurantFormulas = [
    { role: 'Customer (Order Main)', formula: 'I would like the [dish], please.', example: 'I would like the grilled chicken and steamed vegetables, please.' },
    { role: 'Customer (Order Drink)', formula: 'Yes, a [container] of [drink], please.', example: 'Yes, a glass of freshly squeezed orange juice, please.' },
    { role: 'Server (Offer Dessert)', formula: 'Would you like any dessert / coffee?', example: 'Would you like any dessert, or perhaps our homemade apple pie?' },
    { role: 'Customer (Polite Refusal & Bill)', formula: 'No, thank you. Could we just have the bill, please?', example: 'No, thank you. Everything was delicious; just the bill, please.' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-rose-600">
        <div className="flex items-center gap-2 mb-2 text-rose-800">
          <PenTool className="w-5 h-5 text-rose-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Functional Dialogue &amp; Narrative Writing
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Excel in two critical writing examinations: <strong>Functional Restaurant English</strong> (polite formulas, container nouns, question inversions) and <strong>Short Narrative Writing</strong> (vivid sensory imagery, past tense stability, and seamless idiom integration).
        </p>

        {/* Restaurant English Dialogue Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-rose-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-rose-600" />
            <span>Part 1 · Functional Dialogue: Restaurant Communication</span>
          </h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Communicative Function</th>
                  <th className="p-2.5 border-r border-slate-200">Polite Formula</th>
                  <th className="p-2.5">High-Scoring Exam Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {restaurantFormulas.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">{row.role}</td>
                    <td className="p-2.5 font-mono text-rose-900 border-r border-slate-200">{row.formula}</td>
                    <td className="p-2.5 font-medium text-slate-800">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
            <strong>Examiner&apos;s Scoring Tips:</strong>
            <br />
            1. Always include <em>please</em> and <em>thank you</em> to secure politeness marks.
            <br />
            2. Always specify a container noun for drinks (e.g. <em>a glass of water</em>, <em>a cup of coffee</em>, <em>a bottle of juice</em>).
            <br />
            3. Questions require proper auxiliary inversion and a question mark (e.g. <em>&quot;Would you like...?&quot;</em>).
          </div>
        </div>

        {/* Narrative Writing Model */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-rose-950 uppercase tracking-wider flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-rose-600" />
              <span>Part 2 · Narrative Model: &quot;The Most Memorable Meal&quot;</span>
            </h3>
            <span className="text-[10px] bg-rose-100 text-rose-900 font-bold px-2 py-0.5 rounded-full">
              Full Score Exemplar
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 border-l-4 border-l-emerald-600 text-sm leading-relaxed text-slate-800 font-serif space-y-2">
            <p>
              &quot;The most memorable meal I ever had was my grandmother&apos;s seventieth birthday banquet last summer. There was such an overwhelming feast of hot dumplings and noodles that our whole extended family happily <strong className="font-sans font-bold text-rose-700">pigged out</strong> until our plates were completely clean.
            </p>
            <p>
              My younger cousin was so ravenously hungry that he <strong className="font-sans font-bold text-rose-700">wolfed down</strong> two colossal slices of chocolate cake in under a minute! Afterwards, feeling pleasantly full and tired, we all turned into absolute <strong className="font-sans font-bold text-rose-700">couch potatoes</strong> and reclined on the living room sofa to watch the evening fireworks light up the sky. It was an unforgettable celebration because everyone was laughing and sharing stories together.&quot;
            </p>
          </div>
        </div>

        {/* Common Pitfalls Card */}
        <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-950 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong>Avoid Costly Penalty Mistakes:</strong>
            <br />
            • <strong>Missing Idioms:</strong> Exam prompts explicitly mandate inserting at least 1–2 idioms.
            <br />
            • <strong>Tense Inconsistency:</strong> Never drift between past and present tense; keep narrative anchors securely in the past (<em>went, cooked, wolfed, turned</em>).
            <br />
            • <strong>Short Length:</strong> Aim for 4–6 cohesive, well-connected sentences.
          </div>
        </div>
      </div>
    </div>
  );
};
