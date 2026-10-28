/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 3: Comparative Adjectives — Compare Accurately
 */

import React, { useState } from 'react';
import { Scale, HelpCircle, AlertTriangle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const CompSection: React.FC = () => {
  const [openRiddle, setOpenRiddle] = useState<number | null>(null);

  const riddles = [
    {
      q: 'I am colder than ice, but harder than rock. I am smaller than a planet, but bigger than a marble. What am I?',
      a: 'A hailstone or asteroid / meteorite.'
    },
    {
      q: 'I am faster than a walk, but slower than a sprint. What am I?',
      a: 'A jog or run.'
    },
    {
      q: 'I am more expensive than a paperback book, but cheaper than an automobile. I am lighter than a desktop computer, but heavier than a smartphone. What am I?',
      a: 'A tablet or iPad.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-pink-600">
        <div className="flex items-center gap-2 mb-2 text-pink-700">
          <Scale className="w-5 h-5 text-pink-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Comparative Adjectives — Rules, Structures &amp; Parallel Comparisons
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Comparative adjectives describe differences between <strong>two</strong> entities. We typically construct comparisons using <strong>than</strong>: <em>The red sports car is faster than the blue sedan.</em>
        </p>

        {/* The Golden Rules Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-pink-950 uppercase tracking-wider mb-2">
            The Five Morphological Spelling Rules
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Rule Category</th>
                  <th className="p-2.5 border-r border-slate-200">Spelling Adjustment</th>
                  <th className="p-2.5">Clear Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-pink-900 border-r border-slate-200">1 Syllable Base</td>
                  <td className="p-2.5 border-r border-slate-200 font-mono">add -er</td>
                  <td className="p-2.5">old → <strong>older</strong>, tall → <strong>taller</strong>, fast → <strong>faster</strong></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-pink-900 border-r border-slate-200">Ends in silent -e</td>
                  <td className="p-2.5 border-r border-slate-200 font-mono">add -r only</td>
                  <td className="p-2.5">large → <strong>larger</strong>, nice → <strong>nicer</strong>, wise → <strong>wiser</strong></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-pink-900 border-r border-slate-200">1 Syllable CVC Ending</td>
                  <td className="p-2.5 border-r border-slate-200 font-mono">double final consonant + er</td>
                  <td className="p-2.5">big → <strong>bigger</strong>, hot → <strong>hotter</strong>, thin → <strong>thinner</strong></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-pink-900 border-r border-slate-200">2 Syllables Ending in -y</td>
                  <td className="p-2.5 border-r border-slate-200 font-mono">change y to i + er</td>
                  <td className="p-2.5">happy → <strong>happier</strong>, easy → <strong>easier</strong>, busy → <strong>busier</strong></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-pink-900 border-r border-slate-200">2+ Syllables (not -y)</td>
                  <td className="p-2.5 border-r border-slate-200 font-mono">precede with more</td>
                  <td className="p-2.5"><strong>more beautiful</strong>, <strong>more expensive</strong>, <strong>more interesting</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Irregular Comparatives Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2">
              Essential Irregular Comparatives
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden bg-white">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-2 border-r border-slate-200">Base Adjective</th>
                    <th className="p-2">Comparative Form</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">good</td>
                    <td className="p-2 font-extrabold text-pink-900">better</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">bad</td>
                    <td className="p-2 font-extrabold text-pink-900">worse</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">far</td>
                    <td className="p-2 font-extrabold text-pink-900">farther / further</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">little</td>
                    <td className="p-2 font-extrabold text-pink-900">less</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">many / much</td>
                    <td className="p-2 font-extrabold text-pink-900">more</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Four Types of Comparison */}
          <div className="p-4 bg-pink-50/70 rounded-xl border border-pink-200">
            <h3 className="text-sm font-bold text-pink-950 mb-2">
              Four Syntactic Comparison Types
            </h3>
            <ol className="space-y-1.5 text-xs text-pink-950 font-medium">
              <li>
                <strong>1. Inequality:</strong> <em>A cheetah is faster than a lion.</em>
              </li>
              <li>
                <strong>2. Equality (as...as):</strong> <em>My coffee is as hot as yours.</em> (Uses base form).
              </li>
              <li>
                <strong>3. Progressive Change:</strong> <em>The weather is getting colder and colder.</em>
              </li>
              <li>
                <strong>4. Correlative / Parallel:</strong> <em>The harder you work, the luckier you get.</em> (The + comp, the + comp).
              </li>
            </ol>
          </div>
        </div>

        {/* Common Error Traps */}
        <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-950 mb-6 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong>Exam Error Traps to Eliminate:</strong>
            <br />
            • ❌ &quot;more better&quot; → ✅ <strong>better</strong> (Never double-mark comparatives).
            <br />
            • ❌ &quot;hoter&quot; → ✅ <strong>hotter</strong> (Forgot consonant doubling).
            <br />
            • ❌ &quot;prettier that&quot; → ✅ <strong>prettier than</strong> (Comparisons always require than).
            <br />
            • ❌ &quot;as taller as&quot; → ✅ <strong>as tall as</strong> (Equality requires the base positive adjective).
          </div>
        </div>

        {/* Interactive ESL Riddles */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-pink-600" />
            <span>Interactive Comparative Riddles</span>
          </h3>
          <div className="space-y-2">
            {riddles.map((r, idx) => {
              const isOpen = openRiddle === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                  <div
                    onClick={() => setOpenRiddle(isOpen ? null : idx)}
                    className="flex items-center justify-between cursor-pointer font-bold text-xs text-slate-900"
                  >
                    <span>Riddle {idx + 1}: {r.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-pink-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                  {isOpen && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200 text-xs text-emerald-800 font-semibold animate-fadeIn">
                      💡 <strong>Answer:</strong> {r.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
