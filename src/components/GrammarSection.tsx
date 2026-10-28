/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 2: Countable & Uncountable Nouns — The Complete Grammar System
 */

import React from 'react';
import { SpellCheck, CheckCircle2, AlertOctagon, HelpCircle, Layers } from 'lucide-react';

export const GrammarSection: React.FC = () => {
  const diagnosticTests = [
    { test: 'Articles a / an', count: '✅ an egg / a tomato', uncount: '❌ a water / a bread' },
    { test: 'Plural suffix -s', count: '✅ two tomatoes / three books', uncount: '❌ two waters / two breads' },
    { test: 'Quantity: Many vs Much', count: '✅ many apples / many friends', uncount: '✅ much water / much research' },
    { test: 'Proportion: Few vs Little', count: '✅ a few carrots / few coins', uncount: '✅ a little cheese / little money' },
    { test: 'Verb agreement', count: '✅ The eggs are fresh.', uncount: '✅ The meat is fresh (singular verb).' }
  ];

  const shiftWords = [
    { noun: 'coffee', uncount: 'the liquid drink (I love coffee)', count: 'individual cups ordered (two coffees, please)' },
    { noun: 'glass', uncount: 'the brittle material (window of glass)', count: 'drinking vessel (a glass of milk)' },
    { noun: 'paper', uncount: 'the raw writing material (a sheet of paper)', count: 'academic essay or newspaper (read the paper)' },
    { noun: 'hair', uncount: 'the entire collective head of hair', count: 'individual detached strands (a hair on the jacket)' },
    { noun: 'experience', uncount: 'knowledge gained over career/years', count: 'specific unforgettable event (a scary experience)' }
  ];

  const uncountFamilies = [
    { num: 1, title: 'Liquids & Fluids', items: 'water, milk, juice, tea, coffee, oil, soup, blood, rain' },
    { num: 2, title: 'Grains, Powders & Particulates', items: 'rice, sugar, salt, flour, pepper, sand, dust, wheat' },
    { num: 3, title: 'Solid Bulk Materials', items: 'wood, metal, plastic, glass, paper, wool, cotton, gold' },
    { num: 4, title: 'Foods Treated as Bulk Masses', items: 'bread, meat, cheese, butter, fish (flesh), fruit, beef' },
    { num: 5, title: 'Abstract Concepts & States', items: 'information, advice, music, fun, homework, progress, research, knowledge, luck' },
    { num: 6, title: 'Academic Disciplines & News', items: 'English, mathematics, physics, economics, science, news' },
    { num: 7, title: 'Aggregated Collections & Weather', items: 'furniture, luggage, baggage, equipment, machinery, clothing, money, weather, scenery' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-sky-600">
        <div className="flex items-center gap-2 mb-2 text-sky-800">
          <SpellCheck className="w-5 h-5 text-sky-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Countable &amp; Uncountable Nouns — The Complete Grammatical System
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          <strong>Countable nouns</strong> represent discrete, identifiable objects with clear boundaries (e.g. <em>one egg, two eggs</em>). <strong>Uncountable nouns</strong> represent continuous masses, liquids, powders, materials, categories, and abstract entities (e.g. <em>water, rice, advice, equipment</em>).
        </p>

        {/* Diagnostic Tests Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-sky-950 uppercase tracking-wider mb-2">
            The Five Grammatical Diagnostic Tests
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Grammar Diagnostic</th>
                  <th className="p-2.5 border-r border-slate-200">Countable Noun Behaviour</th>
                  <th className="p-2.5">Uncountable Noun Behaviour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {diagnosticTests.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-sky-900 border-r border-slate-200">{t.test}</td>
                    <td className="p-2.5 font-medium border-r border-slate-200 text-emerald-800">{t.count}</td>
                    <td className="p-2.5 font-medium text-slate-700">{t.uncount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Seven Families of Uncountable Nouns */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-sky-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>The Seven Families of Uncountable Nouns</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {uncountFamilies.map(fam => (
              <div key={fam.num} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-sky-900 block mb-0.5">
                  {fam.num}. {fam.title}
                </span>
                <p className="text-[11px] text-slate-600 font-mono">
                  {fam.items}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-medium">
            <strong>Essential Memory Checklist:</strong> information, advice, homework, furniture, luggage, equipment, machinery, clothing, money, news, bread, cheese, rice, weather, research, evidence, knowledge, progress, music.
          </div>
        </div>

        {/* Words that Shift Meaning */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-sky-950 uppercase tracking-wider mb-2">
            Semantic Shifts: Words That Can Be Both
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Noun</th>
                  <th className="p-2 border-r border-slate-200">Uncountable Usage (Mass / Concept)</th>
                  <th className="p-2">Countable Usage (Portion / Individual Item)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {shiftWords.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">{row.noun}</td>
                    <td className="p-2 border-r border-slate-200 text-slate-600">{row.uncount}</td>
                    <td className="p-2 font-medium text-sky-900">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quantifiers Guide */}
        <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-200">
          <h3 className="text-sm font-bold text-sky-950 mb-2">
            Quantifier Usage Summary &amp; The &quot;Some&quot; Exception
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sky-950">
            <div>
              <strong className="block text-sky-900 mb-1">Countable Plurals:</strong>
              <p>• <strong>many</strong> apples</p>
              <p>• <strong>a few</strong> carrots (positive sense) / <strong>few</strong> coins (rare)</p>
              <p>• <strong>fewer</strong> mistakes (standard prescriptive rule)</p>
            </div>
            <div>
              <strong className="block text-sky-900 mb-1">Uncountable Masses:</strong>
              <p>• <strong>much</strong> water / <strong>a lot of</strong> sugar</p>
              <p>• <strong>a little</strong> milk (positive) / <strong>little</strong> time (scarce)</p>
              <p>• <strong>less</strong> money / <strong>less</strong> traffic</p>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-sky-200 text-xs text-sky-950">
            <strong>Golden Rule for Some vs. Any:</strong> Typically, <em>some</em> is used in positive affirmative sentences (&quot;I have some bread&quot;) and <em>any</em> in negatives and questions (&quot;I don&apos;t have any milk&quot;).
            <br />
            <strong>CRITICAL EXAM EXCEPTION:</strong> Polite <strong>offers and requests</strong> always use <strong>some</strong>!
            <br />
            <em>&quot;Would you like <strong>some</strong> tea?&quot;</em> / <em>&quot;Can I borrow <strong>some</strong> sugar?&quot;</em>
          </div>
        </div>
      </div>
    </div>
  );
};
