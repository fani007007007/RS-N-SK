/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section 1: Study Skills & Independent Study
 */

import React from 'react';
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, Info } from 'lucide-react';
import { STUDY_SKILLS_CHIPS, PRACTICE_SETS } from '../data/masterclassData';
import { PracticeCard } from './PracticeCard';

export const StudySection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 border-l-4 border-l-blue-600">
        <div className="flex items-center gap-2 mb-2 text-blue-700">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-xl font-extrabold tracking-tight">
            Topic 1: Getting Ready for Study — Skills, Study Skills & Independent Study
          </h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          <strong>Scope & coverage:</strong> Introduction to the unit • Study requirements in Higher Education • Independent study • Prioritising and time management • Goal setting with SMART goals.
        </p>

        {/* Learning Outcomes */}
        <div className="bg-blue-50/60 rounded-xl p-4 border border-blue-100 mb-5">
          <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span>Learning Outcomes</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-blue-950 font-medium">
            <li className="flex items-center gap-2">✓ Identify the main components of study skills.</li>
            <li className="flex items-center gap-2">✓ Recognise the study requirements of Higher Education.</li>
            <li className="flex items-center gap-2">✓ Understand the significance of independent study.</li>
            <li className="flex items-center gap-2">✓ Use effective organisation and time management when studying.</li>
            <li className="flex items-center gap-2">✓ Create a personal study schedule.</li>
            <li className="flex items-center gap-2">✓ Set SMART goals for study.</li>
          </ul>
        </div>

        {/* Unit Roadmap */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-5">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-slate-500" />
            <span>Unit Roadmap (12 Topics)</span>
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            1 Getting Ready for Study → <strong>2 Learning and Skills Audit</strong> → 3 Gathering Information: Sources & Reading → 4 Gathering Information: Lectures & Tutorials → 5 Using Critical Thinking and Reasoning → 6 Planning for an Assignment → 7 Academic Writing → 8 The Nature and Process of Research 1 → 9 The Nature and Process of Research 2 → 10 Developing a Presentation → 11 Examinations and Revision → 12 Module Summary and Assignment.
          </p>
        </div>

        {/* Unit Delivery & Assessment */}
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 mb-5">
          <div className="font-bold text-emerald-900 text-sm mb-1">
            Unit Delivery & Assessment (Mid-Term Exam B1)
          </div>
          <p className="text-xs text-emerald-950 leading-relaxed">
            <strong>Learning process:</strong> Pre-work, lectures and discussion, tutorial activities, and private study.
            <br />
            <strong>Assessment = 100% assignment</strong>, in two parts: <strong>75% Research Proposal</strong> + <strong>25% Research Proposal Presentation</strong>. There is no written exam for the unit itself.
          </p>
        </div>

        {/* What is a Skill & Study Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              What is a &quot;Skill&quot;? (Exam A1, B3, C1)
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              A <strong>skill</strong> is <em>a learned activity performed well and at will</em>.
              <br />
              <strong>Two key ideas:</strong>
              <br />
              1. <strong>Learned:</strong> Nobody is born with study skills; they can always be developed.
              <br />
              2. <strong>Well and at will:</strong> Reliably and on demand whenever you choose.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              What are &quot;Study Skills&quot;? (Cottrell, 2019)
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              According to <strong>Cottrell (2019)</strong>, study skills are:
              <br />
              <em className="text-blue-900 font-medium">
                &quot;Abilities, habits, understanding and attitudes that enable achievement in your studies.&quot;
              </em>
            </p>
          </div>
        </div>

        {/* Four Cottrell Components Table */}
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="p-2.5 border-r border-slate-200">Component</th>
                <th className="p-2.5 border-r border-slate-200">Meaning</th>
                <th className="p-2.5">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-2.5 font-bold text-blue-900 border-r border-slate-200">Abilities</td>
                <td className="p-2.5 border-r border-slate-200">Things you can do well</td>
                <td className="p-2.5">Reading academic texts, writing clearly</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-2.5 font-bold text-blue-900 border-r border-slate-200">Habits</td>
                <td className="p-2.5 border-r border-slate-200">Regular routines you maintain</td>
                <td className="p-2.5">Daily revision, keeping a diary</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-2.5 font-bold text-blue-900 border-r border-slate-200">Understanding</td>
                <td className="p-2.5 border-r border-slate-200">Knowing how study works</td>
                <td className="p-2.5">Referencing, assessment criteria</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-2.5 font-bold text-blue-900 border-r border-slate-200">Attitudes</td>
                <td className="p-2.5 border-r border-slate-200">Your mindset and approach</td>
                <td className="p-2.5">Motivation, persistence, intellectual curiosity</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Study Skill Chips */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Components & Examples of Study Skills (from the lecture)
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {STUDY_SKILLS_CHIPS.map((chip, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-800 border border-blue-200/80 px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Higher Education Difference Table */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            How is Higher-Level Study Different? (Exam F2)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5 border-r border-slate-200">Study is Different</th>
                  <th className="p-2.5">Role of the &apos;Teacher&apos; is Different</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 border-r border-slate-200">Coping with greater levels of difficulty and complexity</td>
                  <td className="p-2.5">Creating knowledge</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 border-r border-slate-200">Increased independence</td>
                  <td className="p-2.5">Intellectual curiosity; a learning community</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 border-r border-slate-200">Developing as a learner and/or professional</td>
                  <td className="p-2.5">Less support during assignment tasks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 border-r border-slate-200">Continually seeking to improve personal performance, taking responsibility for own work</td>
                  <td className="p-2.5">Teacher acts as facilitator/guide rather than spoon-feeding instructor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Pillars of Independent Study & Exam Trap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200">
            <h3 className="text-sm font-bold text-indigo-950 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Three Pillars of Independent Study</span>
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-xs text-indigo-950 font-medium">
              <li>Organising and managing your time</li>
              <li>Understanding how you learn</li>
              <li>Study skills mastery</li>
            </ol>
            <p className="text-[11px] text-indigo-900 mt-2">
              Working without close supervision, organizing work, taking personal responsibility, and being self-reliant.
            </p>
          </div>

          <div className="bg-rose-50/80 p-4 rounded-xl border border-rose-200">
            <h3 className="text-sm font-bold text-rose-950 mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Exam Trap (Mid-Term D2)</span>
            </h3>
            <p className="text-xs text-rose-950 leading-relaxed">
              <strong>Question:</strong> &quot;Independent study means you should never ask for help.&quot;
              <br />
              <strong>Answer: FALSE.</strong> Self-reliance includes knowing <em>when</em> to ask for help before minor difficulties escalate into major problems!
            </p>
          </div>
        </div>

        {/* Authentic References */}
        <div className="border-t border-slate-200 pt-3 text-[11px] text-slate-500">
          <strong>Authentic Academic References:</strong> Cottrell, S. (2019) <em>The Study Skills Handbook</em>, 5th edn. Bloomsbury Academic • McMillan, K. &amp; Weyers, J. (2021) <em>The Study Skills Book</em>. Pearson.
        </div>
      </div>

      {/* Practice Questions for Section 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <span>🎯</span>
          <span>Section 1 Checkpoint & Interactive Practice</span>
        </h3>
        <div className="space-y-3">
          {PRACTICE_SETS.study.map(item => (
            <PracticeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
