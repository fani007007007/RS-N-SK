/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 4: Idioms & Phrases — Meaning, Grammar & Etymology
 */

import React from 'react';
import { MessageSquare, History, AlertCircle } from 'lucide-react';

export const IdiomsSection: React.FC = () => {
  const coreIdioms = [
    { idiom: '🍰 Piece of cake', meaning: 'Very easy; effortless to accomplish', origin: 'Originates from 19th-century American "cake walk" competitions where the winner received a prize cake.' },
    { idiom: '🍌 Go bananas', meaning: 'Become wildly excited, passionate, or crazy', origin: '1930s–50s American slang, playing on monkeys getting ecstatic when presented with bunches of bananas.' },
    { idiom: '🛋️ Couch potato', meaning: 'A lazy, sedentary person who watches excessive television', origin: 'Coined in 1976 by Tom Iacino in California and popularised by underground cartoonists.' },
    { idiom: '🐺 Wolf down', meaning: 'Eat food extremely quickly, ravenously, and greedily', origin: 'Evokes the predatory wild wolf that swallows large chunks of prey without chewing.' },
    { idiom: '🐔 Chicken out', meaning: 'Withdraw from doing something at the last minute out of cowardice', origin: 'Early 20th-century slang where "chicken" symbolised fear and timidity.' },
    { idiom: '🐒 Monkey around', meaning: 'Play foolishly, waste time, or tamper with something playfully', origin: 'Centuries of folklore portraying monkeys as clever, mischievous pranksters.' },
    { idiom: '🥚 Bad egg', meaning: 'A dishonest, untrustworthy, or disreputable individual', origin: 'From the domestic cooking reality that a single rotten egg ruins the entire morning batter.' },
    { idiom: '🐷 Pig out', meaning: 'Gorge oneself; eat large amounts of rich food greedily', origin: 'Mid-20th-century American slang derived from pigs wallowing and eating without restraint.' },
    { idiom: '🦡 Ferret out', meaning: 'Search persistently until a hidden truth or object is uncovered', origin: 'Derived from the hunting practice of deploying domesticated ferrets into burrows to flush out rabbits.' },
    { idiom: '🦆 Duck out', meaning: 'Leave a gathering quietly, abruptly, or without drawing attention', origin: 'Alludes to a duck instantly diving under water to escape detection on the surface.' }
  ];

  const extraIdioms = [
    { idiom: 'raining cats and dogs', meaning: 'raining extremely heavily', note: 'Appeared in English print in the 1600s; poet Jonathan Swift used it in 1738.' },
    { idiom: 'break a leg', meaning: 'good luck (especially before performing)', note: 'Theatre superstition that wishing good luck directly brings bad luck.' },
    { idiom: 'hit the books', meaning: 'study intensely for tests', note: 'Common colloquial student idiom.' },
    { idiom: 'burn the midnight oil', meaning: 'work or study late into the night', note: 'Dates to the pre-electric era when oil lamps illuminated nighttime desks.' },
    { idiom: 'bite the bullet', meaning: 'face a painful situation with fortitude', note: 'Soldiers bit lead bullets during battlefield surgeries before anaesthesia.' },
    { idiom: 'mad as a hatter', meaning: 'completely crazy or eccentric', note: '18th–19th century milliners suffered mercury poisoning during felt curing.' },
    { idiom: 'once in a blue moon', meaning: 'very rarely; once in a great while', note: 'Astronomical phenomenon of an extra full moon occurring in a calendar season.' },
    { idiom: 'cry over spilt milk', meaning: 'waste time feeling sorrow over what cannot be fixed', note: 'Ancient proverb recorded by John Ray in 1659.' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-amber-600">
        <div className="flex items-center gap-2 mb-2 text-amber-800">
          <MessageSquare className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Idioms &amp; Phrases — Figurative Meaning, Grammar &amp; Cultural Origins
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          An <strong>idiom</strong> is a fixed expression whose figurative meaning cannot be deduced solely from the literal definitions of its individual words. Notice how frequently English uses animal metaphors to depict human behaviours!
        </p>

        {/* 10 Core Idioms Grid */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-amber-950 uppercase tracking-wider mb-3">
            The Ten Core Animal &amp; Food Idioms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {coreIdioms.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-extrabold text-sm text-amber-950">{item.idiom}</span>
                </div>
                <div className="text-xs font-semibold text-slate-800 mb-2">
                  Meaning: <span className="text-amber-900">{item.meaning}</span>
                </div>
                <div className="text-[11px] text-slate-600 italic border-t border-amber-200/60 pt-1.5 flex items-start gap-1.5">
                  <History className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>{item.origin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Additional Cultural Idioms Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-amber-950 uppercase tracking-wider mb-2">
            Eight Additional Academic &amp; Colloquial Idioms
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Idiomatic Expression</th>
                  <th className="p-2.5 border-r border-slate-200">Figurative Definition</th>
                  <th className="p-2.5">Historical Cultural Etymology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {extraIdioms.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">{row.idiom}</td>
                    <td className="p-2.5 font-medium text-amber-950 border-r border-slate-200">{row.meaning}</td>
                    <td className="p-2.5 text-[11px] text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grammatical Tense & Pronoun Rules for Idioms */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Grammatical Agreement &amp; Inflection Rules for Idioms</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li>
              • <strong>Tense Inflection:</strong> Idiomatic verbs must inflect according to sentence tense!
              <br />
              <em>&quot;Yesterday she <strong>chickened</strong> out of the race.&quot;</em> (NOT <em>chicken out</em>).
            </li>
            <li>
              • <strong>Infinitive Verbs:</strong> After auxiliary structures like <em>started to</em>, use the base form:
              <br />
              <em>&quot;The crowd started to <strong>go</strong> bananas.&quot;</em>
            </li>
            <li>
              • <strong>Phrasal Pronoun Placement:</strong> With separable phrasal verbs, pronouns sit between verb and particle:
              <br />
              <em>&quot;He wolfed <strong>them</strong> down in under a minute.&quot;</em> (NOT <em>wolfed down them</em>).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
