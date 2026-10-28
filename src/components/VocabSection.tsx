/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 1: Vocabulary & Word Formation — Partitives, Animal Families & Phonics
 */

import React from 'react';
import { Utensils, Info, AlertTriangle, Sparkles, HelpCircle } from 'lucide-react';

export const VocabSection: React.FC = () => {
  const animalFamilies = [
    { animal: 'Horse', male: 'stallion', female: 'mare', baby: 'foal', extra: 'colt (young male) / filly (young female)' },
    { animal: 'Chicken', male: 'rooster', female: 'hen', baby: 'chick', extra: 'pullet (young hen)' },
    { animal: 'Cow', male: 'bull', female: 'cow', baby: 'calf', extra: 'heifer = young cow before first calf' },
    { animal: 'Cat', male: 'tom', female: 'queen', baby: 'kitten', extra: 'gib = neutered male cat' },
    { animal: 'Sheep', male: 'ram', female: 'ewe', baby: 'lamb', extra: 'wether = castrated ram' },
    { animal: 'Dog', male: 'dog / stud', female: 'bitch', baby: 'pup / puppy', extra: 'litter = group of pups' },
    { animal: 'Bear', male: 'boar', female: 'sow', baby: 'cub', extra: 'cub is also used for lion/tiger/fox' },
    { animal: 'Deer', male: 'buck / stag', female: 'doe / hind', baby: 'fawn', extra: 'antlers shed and regrow annually' },
    { animal: 'Duck', male: 'drake', female: 'duck', baby: 'duckling', extra: 'gaggle on ground, flock in flight' },
    { animal: 'Goose', male: 'gander', female: 'goose', baby: 'gosling', extra: 'flock / gaggle' },
    { animal: 'Pig', male: 'boar', female: 'sow', baby: 'piglet', extra: 'litter of piglets' },
    { animal: 'Goat', male: 'billy / buck', female: 'nanny / doe', baby: 'kid', extra: 'herd of goats' },
    { animal: 'Lion', male: 'lion', female: 'lioness', baby: 'cub', extra: 'pride of lions' },
    { animal: 'Elephant', male: 'bull', female: 'cow', baby: 'calf', extra: 'herd led by matriarch' },
    { animal: 'Whale', male: 'bull', female: 'cow', baby: 'calf', extra: 'pod; marine mammal' },
    { animal: 'Bee', male: 'drone', female: 'queen / worker', baby: 'larva', extra: 'all workers are female' }
  ];

  const collectiveNouns = [
    { group: 'pride', animal: 'lions', reason: 'Bold, social, majestic big cats' },
    { group: 'flock', animal: 'birds / sheep', reason: 'Large feeding or flying grouping' },
    { group: 'herd', animal: 'cattle / elephants / deer', reason: 'Large grazing or migrating herbivores' },
    { group: 'pack', animal: 'wolves / dogs', reason: 'Coordinated predatory hunting unit' },
    { group: 'swarm', animal: 'bees / locusts', reason: 'Dense, flying cloud of insects' },
    { group: 'school / shoal', animal: 'fish', reason: 'Synchronised aquatic navigation' },
    { group: 'pod', animal: 'whales / dolphins', reason: 'Social family unit of marine mammals' },
    { group: 'gaggle', animal: 'ducks / geese', reason: 'Noisy ground gathering and chatter' },
    { group: 'parliament', animal: 'owls', reason: 'Wise-looking solemn deliberators' },
    { group: 'murder', animal: 'crows', reason: 'Dark poetic folklore tradition' },
    { group: 'troop', animal: 'monkeys / kangaroos', reason: 'Coordinated social troupe' },
    { group: 'colony', animal: 'ants / penguins / bats', reason: 'Large permanent community' }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-teal-600">
        <div className="flex items-center gap-2 mb-2 text-teal-800">
          <Utensils className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Vocabulary &amp; Word Formation — Partitives, Animal Families &amp; Phonics
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Master the three core systems: <strong>partitive container nouns</strong> for quantifying mass items, <strong>animal family names</strong> (male, female, young), and <strong>phonics spelling patterns</strong> (Magic &apos;e&apos;).
        </p>

        {/* 1A: Partitive Nouns */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-teal-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>1A · Partitive (Unit) Nouns — &quot;a ___ of ___&quot;</span>
          </h3>
          <p className="text-xs text-slate-600 mb-3">
            Liquids, grains, powders, and many foods are <strong>mass nouns</strong>. To count them in English, we attach a <strong>partitive</strong> indicating packaging, form, or serving:
          </p>

          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Category</th>
                  <th className="p-2.5 border-r border-slate-200">Common Examples</th>
                  <th className="p-2.5">Underlying Linguistic Logic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-teal-900 border-r border-slate-200">Container / Retail</td>
                  <td className="p-2.5 border-r border-slate-200">carton of milk, jar of jam, can of soup, bottle of water, bag of rice</td>
                  <td className="p-2.5">Named after the commercial manufacturing packaging.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-teal-900 border-r border-slate-200">Baked / Shaped Form</td>
                  <td className="p-2.5 border-r border-slate-200">loaf of bread, bar of chocolate, slice of cake, stick of butter</td>
                  <td className="p-2.5">Named after the physical molded shape produced.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-teal-900 border-r border-slate-200">Micro Portion</td>
                  <td className="p-2.5 border-r border-slate-200">grain of sand, flake of snow, drop of rain, pinch of salt</td>
                  <td className="p-2.5">Named after the smallest natural individual constituent particle.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-teal-900 border-r border-slate-200">Serving Vessel</td>
                  <td className="p-2.5 border-r border-slate-200">cup of tea, bowl of cereal, glass of water, plate of pasta</td>
                  <td className="p-2.5">Named after the tableware item consumed from.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-teal-900 border-r border-slate-200">Agricultural Unit</td>
                  <td className="p-2.5 border-r border-slate-200">head of cabbage, clove of garlic, ear of corn, bunch of grapes</td>
                  <td className="p-2.5">Named after the botanical structure in which the crop grows.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200 text-xs text-teal-950 flex items-start gap-2">
            <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong>Historical Origins:</strong> The waxed-paper <strong>Tetra Pak carton</strong> was patented in 1951 by Swedish inventor <em>Erik Wallenberg</em>. Preservation in hermetic metal cans was pioneered around 1810 by <em>Peter Durand</em>, following glass preservation by <em>Nicolas Appert</em>. The American <strong>Mason jar</strong> was patented in 1858 by John Landis Mason. The word <strong>loaf</strong> derives from Old English <em>hlāf</em>.
            </div>
          </div>
        </div>

        {/* 1A-bis: Collective Nouns */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-teal-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>1A-bis · Collective Nouns for Animal Groups</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Collective Term</th>
                  <th className="p-2 border-r border-slate-200">Target Species</th>
                  <th className="p-2">Why this term?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {collectiveNouns.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2 font-bold text-teal-900 border-r border-slate-200">{row.group}</td>
                    <td className="p-2 font-semibold border-r border-slate-200">{row.animal}</td>
                    <td className="p-2">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 1B: Animal Families Table */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>1B · Animal Families — Male ♂ · Female ♀ · Baby 👶</span>
            </h3>
            <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">
              16 Complete Families
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Species</th>
                  <th className="p-2 border-r border-slate-200">Male ♂</th>
                  <th className="p-2 border-r border-slate-200">Female ♀</th>
                  <th className="p-2 border-r border-slate-200">Baby 👶</th>
                  <th className="p-2">Linguistic Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {animalFamilies.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">{row.animal}</td>
                    <td className="p-2 font-semibold text-blue-900 border-r border-slate-200">{row.male}</td>
                    <td className="p-2 font-semibold text-rose-900 border-r border-slate-200">{row.female}</td>
                    <td className="p-2 font-semibold text-emerald-900 border-r border-slate-200">{row.baby}</td>
                    <td className="p-2 text-[11px] text-slate-600">{row.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 p-3 bg-rose-50/80 rounded-xl border border-rose-200 text-xs text-rose-950 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>High-Frequency Exam Traps:</strong>
              <br />
              • Baby cow is a <strong>calf</strong> (NOT a cub).
              <br />
              • Baby horse is a <strong>foal</strong> (NOT a puppy).
              <br />
              • Female sheep is an <strong>ewe</strong> (pronounced like &quot;you&quot;).
              <br />
              • Female cat is a <strong>queen</strong>.
              <br />
              • Male honeybee is a <strong>drone</strong>.
            </div>
          </div>
        </div>

        {/* 1C: Short vs Long Vowels & Magic 'e' */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            1C · Phonics System — Short &amp; Long Vowels &amp; Magic &apos;e&apos;
          </h3>
          <p className="text-xs text-slate-600 mb-3">
            In English phonics:
            <br />
            • <strong>Long vowels:</strong> Say their alphabet letter name (e.g. <em>h<strong>o</strong>me, b<strong>i</strong>ke, r<strong>o</strong>pe, c<strong>a</strong>ke, c<strong>u</strong>te</em>).
            <br />
            • <strong>Short vowels:</strong> Produce a quick, clipped sound (e.g. <em>c<strong>u</strong>t, p<strong>e</strong>t, h<strong>o</strong>p, s<strong>i</strong>t, t<strong>u</strong>b</em>).
          </p>

          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden bg-white">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Short Base</th>
                  <th className="p-2 border-r border-slate-200">+ Silent Magic &apos;e&apos;</th>
                  <th className="p-2">Semantic &amp; Phonetic Transformation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200">hop /hɒp/</td>
                  <td className="p-2 font-mono font-bold text-teal-800 border-r border-slate-200">hope /həʊp/</td>
                  <td className="p-2">jump on one foot → wish / desire</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200">bit /bɪt/</td>
                  <td className="p-2 font-mono font-bold text-teal-800 border-r border-slate-200">bite /baɪt/</td>
                  <td className="p-2">small piece → clamp with teeth</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200">hat /hæt/</td>
                  <td className="p-2 font-mono font-bold text-teal-800 border-r border-slate-200">hate /heɪt/</td>
                  <td className="p-2">headwear → intense dislike</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200">tub /tʌb/</td>
                  <td className="p-2 font-mono font-bold text-teal-800 border-r border-slate-200">tube /tjuːb/</td>
                  <td className="p-2">wash basin → cylindrical pipe</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono font-bold text-slate-900 border-r border-slate-200">cut /kʌt/</td>
                  <td className="p-2 font-mono font-bold text-teal-800 border-r border-slate-200">cute /kjuːt/</td>
                  <td className="p-2">slice with blade → attractive / endearing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            Linguistic history: The silent &apos;e&apos; is an orthographic fossil from Middle English, where the ending was previously an inflected pronounced vowel that lengthened the stem syllable.
          </p>
        </div>
      </div>
    </div>
  );
};
