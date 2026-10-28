/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 5: Animal World — Taxonomy, Authentic Biology & Describers
 */

import React from 'react';
import { PawPrint, Sparkles, Info, ShieldCheck } from 'lucide-react';

export const AnimalsSection: React.FC = () => {
  const taxonomyGroups = [
    { group: 'Mammal', features: 'Mammary glands (produce milk), hair or fur at some life stage, warm-blooded, 3 middle-ear bones, live birth (mostly)', examples: 'human, blue whale, bat, lion, dog, horse', surprises: 'Whales & dolphins are mammals (breathe air via lungs); bats are flying mammals; platypus lays eggs' },
    { group: 'Bird', features: 'Feathers, toothless beaked jaws, hard-shelled eggs, lightweight skeleton, warm-blooded, bipedal', examples: 'eagle, penguin, ostrich, chicken, sparrow', surprises: 'Penguins are flightless marine birds; ostriches cannot fly and their eyes are larger than their brains' },
    { group: 'Insect', features: 'Exoskeleton of chitin, 3-part body (head, thorax, abdomen), 3 pairs of jointed legs (6 total), compound eyes', examples: 'butterfly, honeybee, ant, beetle, mosquito', surprises: 'Spiders, scorpions, and ticks have 8 legs and belong to Arachnida, NOT insects' },
    { group: 'Reptile', features: 'Cold-blooded (ectothermic), epidermal scales/scutes, breathe air with lungs, lay leathery-shelled eggs', examples: 'snake, lizard, crocodile, turtle, tortoise', surprises: 'Crocodilians are genetically closer to birds than to lizards or snakes' },
    { group: 'Fish', features: 'Aquatic gill-breathing craniate animals that lack limbs with digits, typically covered in scales with fins', examples: 'salmon, tuna, shark, goldfish', surprises: 'Sharks and rays possess cartilaginous skeletons rather than true bone' },
    { group: 'Amphibian', features: 'Ectothermic tetrapods with water-permeable skin, dual life cycle (aquatic larva with gills to land adult with lungs)', examples: 'frog, toad, salamander, newt', surprises: 'Breathe partially through moist skin; drastically sensitive to pollution' }
  ];

  const describers = [
    { animal: 'Lion', describers: 'fierce, majestic, powerful, social', evidence: 'Apex savannah predator; lives in complex social prides with territorial roars.' },
    { animal: 'Elephant', describers: 'huge, gentle, wise, strong, empathetic', evidence: 'Largest living terrestrial animal; demonstrates grief, mirror self-recognition, and multi-generational matriarchal leadership.' },
    { animal: 'Fox', describers: 'clever, sly, adaptable, quick', evidence: 'Solitary nocturnal hunter with advanced problem-solving memory and navigation.' },
    { animal: 'Snail', describers: 'slow, slimy, delicate, patient', evidence: 'Gastropod that secretes protective mucus trail and carries a calcium shell.' },
    { animal: 'Dolphin', describers: 'intelligent, playful, social, agile', evidence: 'Cetacean using echolocation, individual signature whistles, tool use (sponges), and cooperative feeding.' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-emerald-600">
        <div className="flex items-center gap-2 mb-2 text-emerald-800">
          <PawPrint className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Animal World — Biological Classification, Authentic Facts &amp; Describers
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          In scientific English, classify animals by their <strong>defining anatomical features</strong> rather than their immediate habitat. Whales swim in oceans like fish, but anatomically they are mammals that nurse their young!
        </p>

        {/* Biological Classification Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider mb-2">
            The Six Primary Animal Classes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Class</th>
                  <th className="p-2.5 border-r border-slate-200">Diagnostic Anatomical Criteria</th>
                  <th className="p-2.5 border-r border-slate-200">Examples</th>
                  <th className="p-2.5">Scientific Surprises</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {taxonomyGroups.map((g, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-emerald-900 border-r border-slate-200">{g.group}</td>
                    <td className="p-2.5 border-r border-slate-200">{g.features}</td>
                    <td className="p-2.5 font-medium border-r border-slate-200 text-slate-900">{g.examples}</td>
                    <td className="p-2.5 text-[11px] text-slate-600">{g.surprises}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Authentic Scientific Facts Card */}
        <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 mb-6">
          <h3 className="text-sm font-bold text-emerald-950 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Authentic Biological Curiosities</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-emerald-950">
            <li>
              • <strong>Blue Whales:</strong> The largest animals known to have ever existed, reaching lengths of up to 30 metres and weighing over 150 tonnes. Their heart alone weighs approximately 180 kg!
            </li>
            <li>
              • <strong>Deep Sea Divers:</strong> Sperm whales regularly dive past 1,000 metres in search of giant squid; scientific telemetry has tracked Cuvier&apos;s beaked whales diving to nearly 3,000 metres for over three hours on a single breath!
            </li>
            <li>
              • <strong>Honeybee Colonies:</strong> All worker bees are sterile females. Male drones develop from unfertilised eggs (parthenogenesis) and have a grandfather but no biological father.
            </li>
            <li>
              • <strong>Waggle Dance Communication:</strong> Austrian ethologist <em>Karl von Frisch</em> decoded the complex figure-eight waggle dance of honeybees, which communicates the exact angle and distance to nectar, earning the 1973 Nobel Prize in Physiology.
            </li>
          </ul>
        </div>

        {/* Animal Describers Table */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Academic Describers &amp; Behavioral Evidence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-r border-slate-200">Animal</th>
                  <th className="p-2 border-r border-slate-200">Key Adjective Describers</th>
                  <th className="p-2">Behavioural Scientific Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {describers.map((d, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2 font-bold text-slate-900 border-r border-slate-200">{d.animal}</td>
                    <td className="p-2 font-bold text-emerald-900 border-r border-slate-200">{d.describers}</td>
                    <td className="p-2 text-slate-600">{d.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
