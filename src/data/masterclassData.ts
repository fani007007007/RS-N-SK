/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RSS Mid-Term Masterclass Comprehensive Data
 * Author: Fani
 * © 2026 Fani. All rights reserved.
 */

export interface PracticeItem {
  id: string;
  sec: string;
  type: 'choice' | 'fill' | 'rewrite';
  q: string;
  options?: string[];
  answer?: string;
  answers?: string[];
  display?: string;
  model?: string;
  keys?: string[];
  any?: string[][];
  hint?: string;
  explain?: string;
}

export interface ExamTerm {
  n: number;
  term: string;
  correct: string;
  hint: string;
}

export interface Task2Row {
  id: string;
  task: string;
  A: number;
  B: number;
  C: number;
  D: string;
}

export interface GameQuestion {
  cat: string;
  q: string;
  hint: string;
  a: string;
  exp: string;
}

export interface Player {
  id: number;
  name: string;
  score: number;
  color: string;
}

export const AVATAR_COLORS = [
  '#ef4444', '#3b82f6', '#10b981', '#f59e0b',
  '#8b5cf6', '#06b6d4', '#f97316', '#6366f1', '#84cc16'
];

export const DEFAULT_PLAYERS: Player[] = [
  { id: 1, name: 'Hoho', score: 0, color: '#ef4444' },
  { id: 2, name: 'Chen', score: 0, color: '#3b82f6' },
  { id: 3, name: 'Yuki', score: 0, color: '#10b981' },
  { id: 4, name: 'Laura', score: 0, color: '#f59e0b' },
  { id: 5, name: 'Cici', score: 0, color: '#8b5cf6' },
  { id: 6, name: 'Livi', score: 0, color: '#06b6d4' },
  { id: 7, name: 'Shino', score: 0, color: '#f97316' },
  { id: 8, name: 'Evan', score: 0, color: '#6366f1' },
  { id: 9, name: 'Lucy', score: 0, color: '#84cc16' }
];

export const STUDY_SKILLS_CHIPS = [
  'Researching', 'Writing', 'Reading', 'Listening', 'Analysing',
  'Criticising', 'Note taking', 'Paraphrasing', 'Summarising', 'Organising',
  'Skim reading', 'Scanning texts', 'Selecting', 'Planning', 'Preparing',
  'Practicing', 'Presenting', 'Memorising', 'Learning', 'Reviewing',
  'Timetabling', 'Scheduling', 'Editing', 'Proofing', 'Prioritising', 'Motivation'
];

export const MATCH_DEFS: Record<string, string> = {
  a: "Abilities, habits, understanding and attitudes that enable achievement in your studies.",
  b: "A learned activity performed well and at will.",
  c: "Working without close supervision from teachers, organising your own time and work, and taking personal responsibility.",
  d: "A goal-setting method with five elements: Specific, Measurable, Attainable, Relevant and Time-Based.",
  e: "Delaying or avoiding work by doing irrelevant activities, such as repeatedly tidying the desk or constantly checking social media.",
  f: "Arranging tasks in order of importance and urgency so that the most important things are done first.",
  g: "A goal that looks ahead over the year (e.g. assignment deadlines, commitments and plans) so that shorter goals can be set confidently.",
  h: "A goal concerning what to do with the study time you have today or this week.",
  i: "A list in which large, overwhelming tasks are broken into smaller, manageable actions, prioritized and entered into your diary.",
  j: "One planner (paper diary, calendar app or Bullet Journal) that you keep with you always and check at least daily."
};

export const MATCH_TERMS: ExamTerm[] = [
  { n: 1, term: "Skill", correct: "b", hint: "Learned + at will." },
  { n: 2, term: "Study skills", correct: "a", hint: "Abilities, habits, understanding, attitudes." },
  { n: 3, term: "Independent study", correct: "c", hint: "Without close supervision + responsibility." },
  { n: 4, term: "SMART goal", correct: "d", hint: "Five elements S-M-A-R-T." },
  { n: 5, term: "Procrastination", correct: "e", hint: "Delaying via irrelevant activities." },
  { n: 6, term: "Prioritising", correct: "f", hint: "Order of importance and urgency." },
  { n: 7, term: "Long-term goal", correct: "g", hint: "Looks ahead over the year." },
  { n: 8, term: "Short-term goal", correct: "h", hint: "Today or this week." },
  { n: 9, term: "'To-do' list", correct: "i", hint: "Broken-down, prioritised, in your diary." },
  { n: 10, term: "Diary / schedule", correct: "j", hint: "One planner, checked daily." }
];

export const TASK2_DATA: Task2Row[] = [
  { id: 'P', task: 'Submit research proposal outline (deadline tomorrow)', A: 10, B: 1, C: 9, D: '1st' },
  { id: 'Q', task: "Read module chapter for next week's tutorial", A: 8, B: 3, C: 5, D: '3rd' },
  { id: 'R', task: "Plan revision timetable for next month's exam", A: 9, B: 2, C: 7, D: '2nd' },
  { id: 'S', task: 'Reply to a group-chat message about a weekend game', A: 6, B: 4, C: 2, D: '4th' }
];

export const PRACTICE_SETS: Record<string, PracticeItem[]> = {
  study: [
    {
      id: 'st1',
      sec: 'Study Skills',
      type: 'choice',
      q: 'According to Cottrell (2019), "study skills" are:',
      options: [
        'Abilities you are born with',
        'Only reading and writing abilities',
        'Abilities, habits, understanding and attitudes that enable achievement in your studies',
        'Rules that teachers give to students'
      ],
      answer: 'Abilities, habits, understanding and attitudes that enable achievement in your studies',
      hint: 'Four elements: abilities, habits, understanding, attitudes.',
      explain: 'Cottrell (2019), The Study Skills Handbook, 5th edn.'
    },
    {
      id: 'st2',
      sec: 'Study Skills',
      type: 'choice',
      q: 'Which is the correct definition of a "skill"?',
      options: [
        'A learned activity performed well and at will',
        'An activity that can only be done with supervision',
        'A natural talent that cannot be trained',
        'A test of intelligence'
      ],
      answer: 'A learned activity performed well and at will',
      hint: 'Learned + at will.',
      explain: 'Skills can always be developed.'
    },
    {
      id: 'st3',
      sec: 'Study Skills',
      type: 'fill',
      q: 'Study skills are abilities, habits, understanding and attitudes that enable ________ in your studies.',
      answers: ['achievement'],
      display: 'achievement',
      hint: 'Word meaning success or accomplishment.',
      explain: 'Cottrell (2019) definition.'
    },
    {
      id: 'st4',
      sec: 'Study Skills',
      type: 'rewrite',
      q: 'List FOUR main components (examples) of study skills.',
      model: 'Examples: researching, writing, reading, listening, analysing, criticising, note taking, paraphrasing, summarising, organising, skim reading, scanning texts, selecting, planning, preparing, practicing, presenting, memorising, learning, reviewing, timetabling, scheduling, editing, proofing, prioritising, motivation. (Any four.)',
      keys: ['reading'],
      any: [['writing', 'note', 'research', 'summaris', 'summariz', 'time', 'present', 'plan', 'paraphras', 'analys', 'analyz']],
      hint: 'Think reading, writing, note taking, research…',
      explain: 'Any four valid study skills earn full marks.'
    },
    {
      id: 'st5',
      sec: 'Independent Study',
      type: 'choice',
      q: 'Independent study involves:',
      options: [
        'Working only alone and never asking for help',
        'Waiting for your teacher to set your daily tasks',
        'Studying only during class time',
        'Self-reliance, but knowing when to ask for help'
      ],
      answer: 'Self-reliance, but knowing when to ask for help',
      hint: 'Self-reliant does not mean completely isolated.',
      explain: 'Seeking timely support is an essential aspect of independent study.'
    },
    {
      id: 'st6',
      sec: 'Independent Study',
      type: 'fill',
      q: 'Independent study involves working without close ________ from teachers.',
      answers: ['supervision'],
      display: 'supervision',
      hint: 'Starts with super...',
      explain: 'In HE, teachers facilitate rather than constantly supervise.'
    },
    {
      id: 'st7',
      sec: 'Independent Study',
      type: 'rewrite',
      q: 'Successful independent study rests on three pillars. Name them.',
      model: '1) Organising and managing your time. 2) Understanding how you learn. 3) Study skills.',
      keys: ['time'],
      any: [['learn'], ['study skill', 'skills']],
      hint: 'Time, how you learn, study skills.',
      explain: 'Three pillars of independent study.'
    },
    {
      id: 'st8',
      sec: 'Higher Education',
      type: 'rewrite',
      q: 'State FOUR ways higher-level study is different from lower-level study.',
      model: 'Study is different: coping with greater difficulty/complexity; increased independence; developing as a learner/professional; taking responsibility for own work. Teacher role is different: creating knowledge; intellectual curiosity/learning community; less support during assignments.',
      keys: ['independen'],
      any: [['difficulty', 'complexity'], ['teacher', 'knowledge', 'curiosity'], ['responsib', 'professional', 'support']],
      hint: 'Study differences + teacher role differences.',
      explain: 'Any four valid points.'
    },
    {
      id: 'st9',
      sec: 'Higher Education',
      type: 'rewrite',
      q: 'List FOUR things expected of you to succeed in Higher Education.',
      model: 'Show independence; self-motivate; set goals for study and to improve your work; organise your time; work out when and how you learn best; work things out for yourself; be open to working with others. (Any four, per Cottrell 2019.)',
      keys: ['independen'],
      any: [['motivat', 'goal'], ['time', 'organis', 'organiz'], ['learn', 'others', 'yourself']],
      hint: 'Independence, self-motivation, goal setting, time management.',
      explain: 'Any four expectations.'
    },
    {
      id: 'st10',
      sec: 'Assessment',
      type: 'choice',
      q: 'How is this RSS unit assessed?',
      options: [
        '50% research proposal and 50% written examination',
        '100% assignment: 75% research proposal and 25% research proposal presentation',
        '25% research proposal and 75% presentation',
        '100% final examination'
      ],
      answer: '100% assignment: 75% research proposal and 25% research proposal presentation',
      hint: 'There is no written exam for this unit.',
      explain: 'Assessed 100% by coursework.'
    },
    {
      id: 'st11',
      sec: 'Assessment',
      type: 'fill',
      q: 'The unit assessment is 75% research proposal and 25% research proposal ________.',
      answers: ['presentation'],
      display: 'presentation',
      hint: 'The spoken oral delivery component.',
      explain: 'Research proposal presentation.'
    },
    {
      id: 'st12',
      sec: 'Roadmap',
      type: 'choice',
      q: 'In the unit roadmap, which topic comes immediately after "Getting Ready for Study"?',
      options: [
        'Learning and Skills Audit',
        'Academic Writing',
        'Examinations and Revision',
        'Developing a Presentation'
      ],
      answer: 'Learning and Skills Audit',
      hint: 'Topic 2 evaluates your own strengths.',
      explain: 'Topic 2 is Learning and Skills Audit.'
    }
  ],
  proc: [
    {
      id: 'pr1',
      sec: 'Procrastination',
      type: 'fill',
      q: 'Procrastination means ________ or avoiding work by doing irrelevant activities.',
      answers: ['delaying'],
      display: 'delaying',
      hint: 'Putting off until later.',
      explain: 'Delaying or avoiding work.'
    },
    {
      id: 'pr2',
      sec: 'Procrastination',
      type: 'choice',
      q: 'Which is a recognised sign of procrastination (University of Dundee, 2023)?',
      options: [
        'Crossing off completed tasks on your to-do list',
        'Doing difficult work when your concentration is best',
        'Making another cup of coffee "before you start"',
        'Entering assignment deadlines into your diary'
      ],
      answer: 'Making another cup of coffee "before you start"',
      hint: 'An irrelevant delaying activity.',
      explain: 'The other three choices are effective study habits.'
    },
    {
      id: 'pr3',
      sec: 'Procrastination',
      type: 'rewrite',
      q: 'List FIVE signs of procrastination (University of Dundee, 2023).',
      model: 'Tidying desk/cleaning room repeatedly; organising files continuously; making another to-do list; making another coffee "before you start"; answering emails/texts constantly; internet browsing frequently; checking Instagram/Twitter often; playing online games when there is work to do; daydreaming/staring into space. (Any five.)',
      keys: ['coffee'],
      any: [['tidy', 'files', 'list', 'email', 'internet', 'instagram', 'game', 'daydream']],
      hint: 'Repeated coffee, cleaning, filing, constant messaging, daydreaming.',
      explain: 'Any five signs.'
    },
    {
      id: 'pr4',
      sec: 'Procrastination',
      type: 'choice',
      q: 'What often prevents students from achieving their best?',
      options: [
        'Lack of ability',
        'Poor prioritisation',
        'Lack of intelligence',
        'Too much sleep'
      ],
      answer: 'Poor prioritisation',
      hint: 'It is a systems problem, NOT lack of ability.',
      explain: 'Key NCC insight: poor prioritisation prevents success, not ability.'
    },
    {
      id: 'pr5',
      sec: 'Procrastination',
      type: 'choice',
      q: 'True or false: If you "grind to a halt", you should stop studying for the rest of the week.',
      options: ['True', 'False'],
      answer: 'False',
      hint: 'Grinding to a halt means slowing down; you should take a short break or change environment, never quit.',
      explain: 'Never give up for the week.'
    },
    {
      id: 'pr6',
      sec: 'Getting down to work',
      type: 'rewrite',
      q: 'Give FOUR strategies for getting down to work.',
      model: 'Do difficult work when concentration is best; use the Pomodoro technique; use a timer; start easy; edit what you wrote last time; skim some reading. (Any four.)',
      keys: ['pomodoro'],
      any: [['concentration', 'timer', 'easy', 'edit', 'skim']],
      hint: 'Peak concentration, Pomodoro, start easy, timer.',
      explain: 'Any four strategies.'
    },
    {
      id: 'pr7',
      sec: 'Grinding to a halt',
      type: 'rewrite',
      q: 'Give FOUR things to do when you grind to a halt.',
      model: 'Change your environment/try background noise; aim to do an extra 10 minutes; take a short or extended break; finish by setting up for the following study session.',
      keys: ['environment'],
      any: [['10 min', 'ten min', 'extra'], ['break'], ['following', 'next']],
      hint: 'Change setting, 10 more minutes, short break, set up next session.',
      explain: 'Any four actions.'
    },
    {
      id: 'pr8',
      sec: 'Procrastination',
      type: 'fill',
      q: 'Do difficult work when your ________ is best.',
      answers: ['concentration'],
      display: 'concentration',
      hint: 'When your mental focus and energy peak.',
      explain: 'Schedule heavy cognitive tasks during peak concentration.'
    }
  ],
  prio: [
    {
      id: 'pi1',
      sec: 'Prioritising',
      type: 'fill',
      q: 'Prioritising means arranging tasks in order of ________ and urgency so the most important things are done first.',
      answers: ['importance'],
      display: 'importance',
      hint: 'Opposite of triviality.',
      explain: 'Importance + urgency.'
    },
    {
      id: 'pi2',
      sec: 'Matrix',
      type: 'choice',
      q: 'Quadrant I (Urgent & Important) is called:',
      options: [
        'Quality — proactive approach',
        'Necessities — react to tasks',
        'Deception — tasks to be avoided',
        'Waste — tasks to be limited'
      ],
      answer: 'Necessities — react to tasks',
      hint: 'Reacting to immediate demands (Action: DO).',
      explain: 'Quadrant I = Necessities (DO).'
    },
    {
      id: 'pi3',
      sec: 'Matrix',
      type: 'choice',
      q: 'Quadrant II (Important, not Urgent) is called:',
      options: [
        'Necessities — react to tasks',
        'Deception — tasks to be avoided',
        'Quality — proactive approach to tasks',
        'Waste — tasks to be limited'
      ],
      answer: 'Quality — proactive approach to tasks',
      hint: 'The ideal quadrant for growth (Action: PLAN).',
      explain: 'Quadrant II = Quality (PLAN).'
    },
    {
      id: 'pi4',
      sec: 'Matrix',
      type: 'choice',
      q: 'Quadrant III (Urgent, not Important) is called:',
      options: [
        'Deception — tasks to be avoided',
        'Quality — proactive approach',
        'Necessities — react to tasks',
        'Waste — tasks to be limited'
      ],
      answer: 'Deception — tasks to be avoided',
      hint: 'Urgent to others, not fulfilling your goals (Action: AVOID).',
      explain: 'Quadrant III = Deception (AVOID).'
    },
    {
      id: 'pi5',
      sec: 'Matrix',
      type: 'choice',
      q: 'Quadrant IV (Not Urgent, not Important) is called:',
      options: [
        'Waste — tasks to be limited',
        'Deception — tasks to be avoided',
        'Necessities — react to tasks',
        'Quality — proactive approach'
      ],
      answer: 'Waste — tasks to be limited',
      hint: 'Time wasters (Action: ELIMINATE).',
      explain: 'Quadrant IV = Waste (ELIMINATE).'
    },
    {
      id: 'pi6',
      sec: 'Matrix',
      type: 'fill',
      q: 'The FOUR action words for the quadrants are DO, PLAN, ________ and ELIMINATE.',
      answers: ['avoid'],
      display: 'AVOID',
      hint: 'Action for Quadrant III.',
      explain: 'DO, PLAN, AVOID, ELIMINATE.'
    },
    {
      id: 'pi7',
      sec: 'Matrix',
      type: 'choice',
      q: 'Where should highly effective students spend MOST of their time?',
      options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
      answer: 'Quadrant II',
      hint: 'The proactive quadrant of quality and planning.',
      explain: 'Spending time in Q2 prevents crises in Q1.'
    },
    {
      id: 'pi8',
      sec: 'Scoring',
      type: 'choice',
      q: 'In the Assessing Priorities table, the Column A (Importance) scale is:',
      options: [
        '1 to 5',
        '6 (unimportant) to 10 (essential)',
        '1 (must be done at once) to 5 (it can wait)',
        '0 to 100'
      ],
      answer: '6 (unimportant) to 10 (essential)',
      hint: 'Starts at 6 and goes up to 10.',
      explain: '6 (unimportant) to 10 (essential).'
    },
    {
      id: 'pi9',
      sec: 'Scoring',
      type: 'choice',
      q: 'The Column B (Urgency) scale is:',
      options: [
        '1 (must be done at once) to 5 (it can wait)',
        '6 to 10',
        '1 to 100',
        'A to D'
      ],
      answer: '1 (must be done at once) to 5 (it can wait)',
      hint: '1 is highest urgency, 5 can wait.',
      explain: 'Lower number represents higher urgency.'
    },
    {
      id: 'pi10',
      sec: 'Scoring',
      type: 'choice',
      q: 'Column C is calculated by:',
      options: [
        'Adding A to B',
        'Subtracting A from B',
        'Subtracting B (urgency) from A (importance); the higher scores are the priorities',
        'Multiplying A by B'
      ],
      answer: 'Subtracting B (urgency) from A (importance); the higher scores are the priorities',
      hint: 'Formula: C = A - B.',
      explain: 'A minus B gives the priority score.'
    },
    {
      id: 'pi11',
      sec: 'Scoring',
      type: 'fill',
      q: 'A task scores Importance A=10 and Urgency B=1. Column C = ________',
      answers: ['9'],
      display: '9',
      hint: '10 minus 1.',
      explain: '10 - 1 = 9 (Top Priority).'
    },
    {
      id: 'pi12',
      sec: 'Scoring',
      type: 'choice',
      q: 'Tasks P(C=9), Q(C=5), R(C=7), S(C=2). Which is done FIRST?',
      options: ['P', 'Q', 'R', 'S'],
      answer: 'P',
      hint: 'Task with highest C score (9).',
      explain: 'Task P ranks 1st.'
    },
    {
      id: 'pi13',
      sec: 'Prioritising',
      type: 'rewrite',
      q: 'Why is prioritising important for a student? Give FOUR reasons.',
      model: 'It helps deal with competing/conflicting demands on time; challenges procrastination; helps achieve goals; is expected in Higher Education; is a transferable workplace skill. (Also: poor prioritisation, not lack of ability, holds students back.)',
      keys: ['procrastination'],
      any: [['demand', 'time'], ['goal'], ['higher education', 'workplace', 'transferable']],
      hint: 'Demands, procrastination, goals, HE/workplace.',
      explain: 'Any four reasons.'
    }
  ],
  todo: [
    {
      id: 'td1',
      sec: 'To-Do List',
      type: 'fill',
      q: "A to-do list breaks large, ________ tasks into smaller, manageable actions.",
      answers: ['overwhelming'],
      display: 'overwhelming',
      hint: 'Word meaning too large or stressful.',
      explain: 'Chunking prevents feeling overwhelmed.'
    },
    {
      id: 'td2',
      sec: 'To-Do List',
      type: 'choice',
      q: 'What is the FIRST step in creating an effective to-do list?',
      options: [
        'Break large tasks into smaller actions (chunking)',
        'Buy a new diary',
        'Colour-code your pens',
        'Email your tutor'
      ],
      answer: 'Break large tasks into smaller actions (chunking)',
      hint: 'Deconstruct the work first.',
      explain: 'Step 1 is chunking.'
    },
    {
      id: 'td3',
      sec: 'To-Do List',
      type: 'choice',
      q: 'Chunking is supported by which finding about working memory?',
      options: [
        'It holds about 7 items (Miller, 1956)',
        'It holds unlimited items',
        'It only holds images',
        'It improves with caffeine'
      ],
      answer: 'It holds about 7 items (Miller, 1956)',
      hint: "The magical number 7, plus or minus two.",
      explain: "George Miller's classic 1956 paper."
    },
    {
      id: 'td4',
      sec: 'To-Do List',
      type: 'choice',
      q: 'The 2-Minute Rule (David Allen) says:',
      options: [
        'If a task takes less than 2 minutes, do it immediately',
        'Study for 2 minutes, then rest',
        'Only work 2 minutes per hour',
        'Take a 2-minute break every 25 minutes'
      ],
      answer: 'If a task takes less than 2 minutes, do it immediately',
      hint: 'From Getting Things Done (GTD).',
      explain: 'Avoid filing micro-tasks; do them instantly.'
    },
    {
      id: 'td5',
      sec: 'To-Do List',
      type: 'choice',
      q: 'Crossing off completed tasks is beneficial because:',
      options: [
        'It gives a sense of achievement (dopamine release)',
        'It wastes paper',
        'It makes the list shorter',
        'It looks tidy'
      ],
      answer: 'It gives a sense of achievement (dopamine release)',
      hint: 'Neurological reward response.',
      explain: 'Provides psychological motivation to continue.'
    },
    {
      id: 'td6',
      sec: 'To-Do List',
      type: 'choice',
      q: "What should you do with uncompleted tasks at the end of the day?",
      options: [
        "Transfer them to the next day's to-do list",
        'Discard them',
        'Hide them',
        'Forget them'
      ],
      answer: "Transfer them to the next day's to-do list",
      hint: 'Roll them forward so they rise in priority.',
      explain: 'Step 8 of the to-do list framework.'
    },
    {
      id: 'td7',
      sec: 'To-Do List',
      type: 'fill',
      q: 'After prioritising, enter your tasks into your ________.',
      answers: ['diary'],
      display: 'diary',
      hint: 'Your scheduled planner.',
      explain: 'A task scheduled in a diary gets completed.'
    },
    {
      id: 'td8',
      sec: 'To-Do List',
      type: 'choice',
      q: 'If a task does not need YOUR attention, you should:',
      options: [
        'Delegate or dump it',
        'Do it anyway, slowly',
        'Postpone it forever',
        'Complain about it'
      ],
      answer: 'Delegate or dump it',
      hint: 'Step 6: delegate or dump.',
      explain: 'Streamline your commitments.'
    },
    {
      id: 'td9',
      sec: 'To-Do List',
      type: 'rewrite',
      q: 'List the EIGHT steps for creating a to-do list.',
      model: '1) Break large tasks into smaller actions. 2) Prioritise your tasks. 3) Enter your prioritised list into your diary. 4) Ensure high-priority tasks are done. 5) Note future follow-up actions. 6) Identify tasks to delegate or dump. 7) Cross off completed tasks. 8) Transfer uncompleted tasks to the next day.',
      keys: ['prioritise', 'diary'],
      any: [['break', 'smaller'], ['delegate', 'dump'], ['cross off', 'completed'], ['transfer', 'uncompleted', 'next day']],
      hint: 'Chunk, prioritise, diary, do, follow-up, delegate/dump, cross off, transfer.',
      explain: 'The complete 8-step framework.'
    }
  ],
  smart: [
    {
      id: 'sm1',
      sec: 'SMART',
      type: 'fill',
      q: 'SMART stands for Specific, Measurable, ________, Relevant, Time-Based.',
      answers: ['attainable'],
      display: 'Attainable',
      hint: 'The letter A.',
      explain: 'Realistic and achievable.'
    },
    {
      id: 'sm2',
      sec: 'SMART',
      type: 'choice',
      q: 'In SMART, "Measurable" means:',
      options: [
        'Progress can be tracked with numbers or evidence',
        'The goal sounds impressive',
        'The goal is very big',
        'Someone else measures it'
      ],
      answer: 'Progress can be tracked with numbers or evidence',
      hint: 'Clear criteria for success.',
      explain: 'Observable evidence of achievement.'
    },
    {
      id: 'sm3',
      sec: 'SMART',
      type: 'choice',
      q: 'In SMART, "Time-Based" means:',
      options: [
        'The goal has a clear deadline',
        'The goal takes a long time',
        'You must use a stopwatch',
        'The goal is about clocks'
      ],
      answer: 'The goal has a clear deadline',
      hint: 'Target date or timeframe.',
      explain: 'A deadline creates focus.'
    },
    {
      id: 'sm4',
      sec: 'Goals',
      type: 'choice',
      q: 'A LONG-TERM goal:',
      options: [
        'Looks ahead over the year so shorter goals can be set confidently',
        'Concerns today\'s study time only',
        'Is always about money',
        'Cannot be written down'
      ],
      answer: 'Looks ahead over the year so shorter goals can be set confidently',
      hint: 'Looks across the year (deadlines, commitments).',
      explain: 'Long-term goals guide short-term actions.'
    },
    {
      id: 'sm5',
      sec: 'Goals',
      type: 'choice',
      q: 'A SHORT-TERM goal concerns:',
      options: [
        'What to do with the study time you have today or this week',
        'The next five years',
        'Your whole career',
        'Only exam results'
      ],
      answer: 'What to do with the study time you have today or this week',
      hint: 'Immediate schedule: today or this week.',
      explain: 'Short-term tactical focus.'
    },
    {
      id: 'sm6',
      sec: 'Goals',
      type: 'choice',
      q: 'True or false: Short-term goals are plans for the whole year.',
      options: ['False', 'True'],
      answer: 'False',
      hint: 'That describes long-term goals.',
      explain: 'FALSE: Long-term goals plan the year; short-term plan today/week.'
    },
    {
      id: 'sm7',
      sec: 'SMART',
      type: 'choice',
      q: 'Which is the BEST SMART goal?',
      options: [
        'I will obtain the confidence to give the end-of-module presentation from note cards in front of a mirror and friends for the next 3 weeks',
        'Do better this term',
        'Study more',
        'Pass everything'
      ],
      answer: 'I will obtain the confidence to give the end-of-module presentation from note cards in front of a mirror and friends for the next 3 weeks',
      hint: 'Specific, measurable, attainable, relevant, time-based.',
      explain: 'The lecture model goal.'
    },
    {
      id: 'sm8',
      sec: 'SMART',
      type: 'rewrite',
      q: 'Write ONE SMART study goal and show how it meets each element.',
      model: '"I will obtain the confidence to give the end-of-module presentation from note cards in front of a mirror and friends for the next 3 weeks." S: develop confidence for the presentation; M: give it clearly without stumbling, achieve a good pass; A: practice with study buddies; R: needed to pass the module, transferable skill; T: presentation in 12 weeks / 3 weeks of practice.',
      keys: ['presentation'],
      any: [['specific', 'confidence'], ['measurable', 'clearly'], ['time', 'weeks', '12']],
      hint: 'Presentation confidence example.',
      explain: 'Meets all 5 SMART criteria.'
    },
    {
      id: 'sm9',
      sec: 'SMART',
      type: 'fill',
      q: 'Long-term goals allow shorter goals to be set with ________.',
      answers: ['confidence', 'confidently'],
      display: 'confidence',
      hint: 'Feeling sure and directed.',
      explain: 'Set short goals confidently.'
    },
    {
      id: 'sm10',
      sec: 'SMART',
      type: 'choice',
      q: '"Attainable" means the goal is:',
      options: [
        'Realistic given your time and ability',
        'Ambitious beyond reach',
        'Approved by friends',
        'Easy and trivial'
      ],
      answer: 'Realistic given your time and ability',
      hint: 'Can practically be accomplished.',
      explain: 'Realistic and achievable.'
    }
  ],
  sched: [
    {
      id: 'sc1',
      sec: 'Schedule',
      type: 'fill',
      q: 'A diary/schedule is ONE planner you keep with you always and check at least ________.',
      answers: ['daily'],
      display: 'daily',
      hint: 'Every single day.',
      explain: 'Regular daily review keeps you on track.'
    },
    {
      id: 'sc2',
      sec: 'Schedule',
      type: 'choice',
      q: 'Why should you NOT schedule 100% of your time?',
      options: [
        'To allow for emergencies, unexpected tasks and rest',
        'Because diaries are small',
        'To look relaxed',
        'Because time is infinite'
      ],
      answer: 'To allow for emergencies, unexpected tasks and rest',
      hint: 'Need buffer space for the unexpected.',
      explain: 'Leave 20–30% buffer.'
    },
    {
      id: 'sc3',
      sec: 'Schedule',
      type: 'fill',
      q: 'Leave about 20–30% of your schedule as ________ time.',
      answers: ['buffer'],
      display: 'buffer',
      hint: 'Cushion or reserve.',
      explain: 'Buffer for unforeseen delays.'
    },
    {
      id: 'sc4',
      sec: 'Schedule',
      type: 'choice',
      q: 'Which project-tracking software uses kanban boards (To Do → Doing → Done)?',
      options: ['Trello', 'WhatsApp', 'Excel only', 'PowerPoint'],
      answer: 'Trello',
      hint: 'Kanban board application.',
      explain: 'Trello is highlighted in the lecture.'
    },
    {
      id: 'sc5',
      sec: 'Schedule',
      type: 'choice',
      q: 'The Bullet Journal method was created by:',
      options: ['Ryder Carroll', 'David Allen', 'Stephen Covey', 'Francesco Cirillo'],
      answer: 'Ryder Carroll',
      hint: 'Ryder C...',
      explain: 'Ryder Carroll, The Bullet Journal Method.'
    },
    {
      id: 'sc6',
      sec: 'Schedule',
      type: 'choice',
      q: 'The Pomodoro technique uses:',
      options: [
        'A timer — typically 25 minutes of work followed by a short break',
        'A calendar app only',
        'Group study only',
        'Silent reading all day'
      ],
      answer: 'A timer — typically 25 minutes of work followed by a short break',
      hint: 'Francesco Cirillo tomato timer.',
      explain: '25 min focus + 5 min rest.'
    },
    {
      id: 'sc7',
      sec: 'Schedule',
      type: 'choice',
      q: 'Which are "non-negotiable anchors" in your schedule?',
      options: [
        'Deadlines, classes and tutorials',
        'TV shows',
        'Social media breaks',
        'Snack times'
      ],
      answer: 'Deadlines, classes and tutorials',
      hint: 'Fixed academic commitments.',
      explain: 'Build the rest of your week around anchors.'
    },
    {
      id: 'sc8',
      sec: 'Schedule',
      type: 'choice',
      q: 'Time for family and friends should be planned:',
      options: [
        'Deliberately, not as leftover time',
        'Only after all work is perfect',
        'Never — study comes first',
        'Only on holidays'
      ],
      answer: 'Deliberately, not as leftover time',
      hint: 'Wellbeing and social connection must be protected.',
      explain: 'Plan it deliberately.'
    },
    {
      id: 'sc9',
      sec: 'Schedule',
      type: 'choice',
      q: 'How many diary/planner systems should you use?',
      options: [
        'One unified system',
        'As many as possible',
        'Two — in case one fails',
        'None — memory is enough'
      ],
      answer: 'One unified system',
      hint: 'One diary checked daily.',
      explain: 'Having multiple systems leads to missed deadlines.'
    },
    {
      id: 'sc10',
      sec: 'Schedule',
      type: 'fill',
      q: 'After each study session or meeting, record ________ tasks.',
      answers: ['follow-up'],
      display: 'follow-up',
      hint: 'Next actions that arise.',
      explain: 'Record follow-up actions immediately.'
    },
    {
      id: 'sc11',
      sec: 'Schedule',
      type: 'rewrite',
      q: 'State TWO rules for keeping a schedule.',
      model: 'Any two: use ONE planner and check it at least daily; do not schedule 100% of the time — leave a buffer for emergencies; enter all deadlines, classes and tutorials; plan family/friend time deliberately; record follow-up tasks; build from a prioritised to-do list.',
      keys: ['buffer'],
      any: [['daily', 'one'], ['deadline', 'tutorial', 'class'], ['follow-up', 'family', 'friend']],
      hint: 'Buffer, one planner, anchors, follow-up.',
      explain: 'Two clear rules.'
    },
    {
      id: 'sc12',
      sec: 'Schedule',
      type: 'rewrite',
      q: 'List FIVE things you need to know about your modules to manage study time.',
      model: 'Be very familiar with your modules; what is required to pass; when the assignment cut-off dates are; what the learning outcomes are; how much time to allocate to study.',
      keys: ['deadline', 'cut-off', 'pass'],
      any: [['learning outcome', 'outcomes'], ['familiar', 'module'], ['time', 'allocat']],
      hint: 'Pass criteria, cut-offs, outcomes, study hours.',
      explain: 'Five key module facts.'
    }
  ],
  examB: [
    {
      id: 'eb1',
      sec: 'Exam B',
      type: 'choice',
      q: 'B1. How is this unit assessed?',
      options: [
        '100% assignment: 75% research proposal and 25% research proposal presentation',
        '50% research proposal and 50% written examination',
        '25% research proposal and 75% presentation',
        '100% final examination'
      ],
      answer: '100% assignment: 75% research proposal and 25% research proposal presentation',
      hint: 'No written exam for this unit.',
      explain: '2 marks.'
    },
    {
      id: 'eb2',
      sec: 'Exam B',
      type: 'choice',
      q: 'B2. According to Cottrell (2019), "study skills" are:',
      options: [
        'Abilities, habits, understanding and attitudes that enable achievement in your studies',
        'Abilities you are born with',
        'Only reading and writing abilities',
        'Rules that teachers give to students'
      ],
      answer: 'Abilities, habits, understanding and attitudes that enable achievement in your studies',
      hint: 'Four components.',
      explain: '2 marks.'
    },
    {
      id: 'eb3',
      sec: 'Exam B',
      type: 'choice',
      q: 'B3. Which is the correct definition of a "skill"?',
      options: [
        'A learned activity performed well and at will',
        'An activity that can only be done with a teacher\'s supervision',
        'A natural talent that cannot be trained',
        'A test of intelligence'
      ],
      answer: 'A learned activity performed well and at will',
      hint: 'Learned + performed at will.',
      explain: '2 marks.'
    },
    {
      id: 'eb4',
      sec: 'Exam B',
      type: 'choice',
      q: 'B4. Quadrant II (Important but not Urgent) is described as:',
      options: [
        'Quality – proactive approach to tasks',
        'Necessities – react to tasks',
        'Deception – tasks to be avoided',
        'Waste – tasks to be limited'
      ],
      answer: 'Quality – proactive approach to tasks',
      hint: 'The proactive quadrant.',
      explain: '2 marks.'
    },
    {
      id: 'eb5',
      sec: 'Exam B',
      type: 'choice',
      q: 'B5. In the Assessing Priorities table, Column C is calculated by:',
      options: [
        'Subtracting Column B (urgency) from Column A (importance); the higher scores in Column C are the priorities',
        'Adding Column A to Column B',
        'Subtracting Column A from Column B',
        'Multiplying Column A by Column B'
      ],
      answer: 'Subtracting Column B (urgency) from Column A (importance); the higher scores in Column C are the priorities',
      hint: 'C = A - B.',
      explain: '2 marks.'
    },
    {
      id: 'eb6',
      sec: 'Exam B',
      type: 'choice',
      q: 'B6. The importance scale (Column A) is:',
      options: [
        '6 (unimportant) to 10 (essential)',
        '1 to 5',
        '1 (must be done at once) to 5 (it can wait)',
        '0 to 100'
      ],
      answer: '6 (unimportant) to 10 (essential)',
      hint: 'From 6 to 10.',
      explain: '2 marks.'
    },
    {
      id: 'eb7',
      sec: 'Exam B',
      type: 'choice',
      q: 'B7. In the unit roadmap, which topic comes immediately after "Getting Ready for Study"?',
      options: [
        'Learning and Skills Audit',
        'Academic Writing',
        'Examinations and Revision',
        'Developing a Presentation'
      ],
      answer: 'Learning and Skills Audit',
      hint: 'Topic 2.',
      explain: '2 marks.'
    },
    {
      id: 'eb8',
      sec: 'Exam B',
      type: 'choice',
      q: 'B8. Which is a recognised sign of procrastination?',
      options: [
        'Making another cup of coffee "before you start"',
        'Crossing off completed tasks on your to-do list',
        'Doing difficult work when your concentration is best',
        'Entering assignment deadlines into your diary'
      ],
      answer: 'Making another cup of coffee "before you start"',
      hint: 'An irrelevant delaying ritual.',
      explain: '2 marks.'
    },
    {
      id: 'eb9',
      sec: 'Exam B',
      type: 'choice',
      q: 'B9. In SMART study goals, S-M-A-R-T stands for:',
      options: [
        'Specific, Measurable, Attainable, Relevant, Time-Based',
        'Simple, Manageable, Active, Real, Timed',
        'Specific, Meaningful, Attainable, Reliable, Tested',
        'Smart, Measurable, Achievable, Relevant, Time-Based'
      ],
      answer: 'Specific, Measurable, Attainable, Relevant, Time-Based',
      hint: 'Attainable + Time-Based.',
      explain: '2 marks.'
    },
    {
      id: 'eb10',
      sec: 'Exam B',
      type: 'choice',
      q: 'B10. Independent study involves:',
      options: [
        'Self-reliance, but knowing when to ask for help',
        'Working only alone and never asking for help',
        'Waiting for your teacher to set your daily tasks',
        'Studying only during class time'
      ],
      answer: 'Self-reliance, but knowing when to ask for help',
      hint: 'Self-reliance + asking when needed.',
      explain: '2 marks.'
    }
  ],
  examC: [
    {
      id: 'ec1',
      sec: 'Exam C',
      type: 'fill',
      q: 'C1. A skill is a learned activity performed well and at ________.',
      answers: ['will'],
      display: 'will',
      hint: 'Whenever you choose to.',
      explain: '1 mark.'
    },
    {
      id: 'ec2',
      sec: 'Exam C',
      type: 'fill',
      q: 'C2. Study skills are abilities, habits, understanding and attitudes that enable ________ in your studies.',
      answers: ['achievement'],
      display: 'achievement',
      hint: 'Reaching your goals.',
      explain: '1 mark.'
    },
    {
      id: 'ec3',
      sec: 'Exam C',
      type: 'fill',
      q: 'C3. Independent study involves working without close ________ from teachers.',
      answers: ['supervision'],
      display: 'supervision',
      hint: 'Teachers watching closely.',
      explain: '1 mark.'
    },
    {
      id: 'ec4',
      sec: 'Exam C',
      type: 'fill',
      q: "C4. The '________' technique uses a timer to help you get down to work.",
      answers: ['pomodoro'],
      display: 'Pomodoro',
      hint: 'Tomato timer.',
      explain: '1 mark.'
    },
    {
      id: 'ec5',
      sec: 'Exam C',
      type: 'fill',
      q: 'C5. Quadrant I (Urgent and Important) tasks are called ________ – react to tasks.',
      answers: ['necessities'],
      display: 'Necessities',
      hint: 'Essential pressing needs.',
      explain: '1 mark.'
    },
    {
      id: 'ec6',
      sec: 'Exam C',
      type: 'fill',
      q: 'C6. Quadrant IV (Not Urgent or Important) tasks are called ________ – tasks to be limited.',
      answers: ['waste'],
      display: 'Waste',
      hint: 'Useless time-sink.',
      explain: '1 mark.'
    },
    {
      id: 'ec7',
      sec: 'Exam C',
      type: 'fill',
      q: 'C7. Often poor ________ prevents students from achieving their best, NOT lack of ability.',
      answers: ['prioritization', 'prioritisation'],
      display: 'prioritization',
      hint: 'Arranging tasks by urgency and importance.',
      explain: '1 mark.'
    },
    {
      id: 'ec8',
      sec: 'Exam C',
      type: 'fill',
      q: 'C8. Do difficult work when your ________ is best.',
      answers: ['concentration'],
      display: 'concentration',
      hint: 'Mental focus.',
      explain: '1 mark.'
    },
    {
      id: 'ec9',
      sec: 'Exam C',
      type: 'fill',
      q: 'C9. Keep one diary, calendar app or Bullet Journal with you always and check it at least ________.',
      answers: ['daily'],
      display: 'daily',
      hint: 'Every single day.',
      explain: '1 mark.'
    },
    {
      id: 'ec10',
      sec: 'Exam C',
      type: 'fill',
      q: 'C10. The unit assessment is 75% research proposal and 25% research proposal ________.',
      answers: ['presentation'],
      display: 'presentation',
      hint: 'Oral talk to class.',
      explain: '1 mark.'
    }
  ],
  examD: [
    {
      id: 'ed1',
      sec: 'Exam D',
      type: 'choice',
      q: "D1. In Higher Education, the role of the 'teacher' is different from earlier levels of study.",
      options: ['TRUE', 'FALSE'],
      answer: 'TRUE',
      hint: 'Teacher acts as facilitator and guide.',
      explain: '1 mark.'
    },
    {
      id: 'ed2',
      sec: 'Exam D',
      type: 'choice',
      q: 'D2. Independent study means you should never ask for help.',
      options: ['FALSE', 'TRUE'],
      answer: 'FALSE',
      hint: 'Knowing when to ask for help is essential.',
      explain: '1 mark.'
    },
    {
      id: 'ed3',
      sec: 'Exam D',
      type: 'choice',
      q: 'D3. You should schedule 100% of your time in your diary so that nothing is missed.',
      options: ['FALSE', 'TRUE'],
      answer: 'FALSE',
      hint: 'Leave a 20-30% buffer for emergencies.',
      explain: '1 mark.'
    },
    {
      id: 'ed4',
      sec: 'Exam D',
      type: 'choice',
      q: 'D4. Quadrant III (Urgent but not Important) is called "Deception" – tasks to be avoided.',
      options: ['TRUE', 'FALSE'],
      answer: 'TRUE',
      hint: 'Feels urgent, but lacks genuine importance.',
      explain: '1 mark.'
    },
    {
      id: 'ed5',
      sec: 'Exam D',
      type: 'choice',
      q: 'D5. In the Assessing Priorities table, the higher scores in Column C are the priorities.',
      options: ['TRUE', 'FALSE'],
      answer: 'TRUE',
      hint: 'Higher C = higher priority.',
      explain: '1 mark.'
    },
    {
      id: 'ed6',
      sec: 'Exam D',
      type: 'choice',
      q: 'D6. Repeatedly tidying your desk or cleaning your room can be a sign of procrastination.',
      options: ['TRUE', 'FALSE'],
      answer: 'TRUE',
      hint: 'Classic displacement activity.',
      explain: '1 mark.'
    },
    {
      id: 'ed7',
      sec: 'Exam D',
      type: 'choice',
      q: 'D7. Short-term goals are plans for the whole year, so that long-term goals can then be set.',
      options: ['FALSE', 'TRUE'],
      answer: 'FALSE',
      hint: 'Definitions swapped! Long-term plans the year.',
      explain: '1 mark.'
    },
    {
      id: 'ed8',
      sec: 'Exam D',
      type: 'choice',
      q: 'D8. Successful independent study requires organizing and managing your time, understanding how you learn, and study skills.',
      options: ['TRUE', 'FALSE'],
      answer: 'TRUE',
      hint: 'The three pillars.',
      explain: '1 mark.'
    },
    {
      id: 'ed9',
      sec: 'Exam D',
      type: 'choice',
      q: 'D9. If you "grind to a halt" while studying, you should stop studying for the rest of the week.',
      options: ['FALSE', 'TRUE'],
      answer: 'FALSE',
      hint: 'Take a short break or change location instead.',
      explain: '1 mark.'
    },
    {
      id: 'ed10',
      sec: 'Exam D',
      type: 'choice',
      q: 'D10. Crossing off completed tasks on a to-do list gives you a sense of achievement.',
      options: ['TRUE', 'FALSE'],
      answer: 'TRUE',
      hint: 'Triggers dopamine reward.',
      explain: '1 mark.'
    }
  ],
  examF: [
    {
      id: 'ef1',
      sec: 'Exam F',
      type: 'rewrite',
      q: 'F1. List FOUR main components (examples) of study skills. (4)',
      model: 'Examples: reading and note-making; academic writing and referencing; time management and organisation; research and information literacy. (Also accepted: memory/concentration techniques, examination technique, presentation skills, critical thinking, paraphrasing, summarising, prioritising.)',
      keys: ['reading'],
      any: [['writing', 'note'], ['time', 'organis', 'organiz'], ['research', 'referenc', 'memory', 'present', 'critical', 'paraphras', 'summaris']],
      hint: 'Reading, writing, time management, research.',
      explain: 'Four components (1 mark each).'
    },
    {
      id: 'ef2',
      sec: 'Exam F',
      type: 'rewrite',
      q: 'F2. State FOUR ways in which higher-level study (Higher Education) is different from lower-level study. (4)',
      model: '1) Coping with greater difficulty and complexity. 2) Increased independence. 3) Developing as a learner/professional, taking responsibility for own work. 4) Teacher role changes: creating knowledge, intellectual curiosity, less support during assignments.',
      keys: ['independen'],
      any: [['difficulty', 'complexity'], ['teacher', 'knowledge', 'curiosity', 'support'], ['responsib', 'professional', 'learner']],
      hint: 'Complexity, independence, responsibility, teacher as facilitator.',
      explain: 'Four differences (1 mark each).'
    },
    {
      id: 'ef3',
      sec: 'Exam F',
      type: 'rewrite',
      q: 'F3. What does independent study involve? Give FOUR points. (4)',
      model: '1) Working without close supervision. 2) Organising your own time and work. 3) Taking personal responsibility. 4) Self-reliance, but knowing when to ask for help.',
      keys: ['supervision'],
      any: [['time', 'organis', 'organiz'], ['responsib'], ['help', 'self-relian', 'reliance']],
      hint: 'No close supervision, organising time, personal responsibility, knowing when to ask help.',
      explain: 'Four points (1 mark each).'
    },
    {
      id: 'ef4',
      sec: 'Exam F',
      type: 'rewrite',
      q: 'F4. List FOUR things expected of you to succeed as a student in Higher Education. (4)',
      model: 'Show independence; self-motivate; set goals for study and to improve your work; organise your time; work out when and how you learn best; work things out for yourself; be open to working with others. (Any four.)',
      keys: ['independen'],
      any: [['motivat', 'goal'], ['time', 'organis', 'organiz'], ['learn', 'others', 'yourself']],
      hint: 'Independence, self-motivation, goal setting, time organisation.',
      explain: 'Four expectations (1 mark each).'
    },
    {
      id: 'ef5',
      sec: 'Exam F',
      type: 'rewrite',
      q: 'F5. Why is prioritizing important for a student? Give FOUR reasons. (4)',
      model: '1) Manages competing/conflicting demands on time. 2) Challenges procrastination. 3) Helps achieve goals. 4) Expected in Higher Education and transferable to the workplace. (Also: poor prioritisation, not lack of ability, holds students back.)',
      keys: ['procrastination'],
      any: [['demand', 'time'], ['goal'], ['higher education', 'workplace', 'transferable']],
      hint: 'Manages conflicting demands, challenges procrastination, achieves goals, workplace skill.',
      explain: 'Four reasons (1 mark each).'
    }
  ]
};

export const GAME_QUESTIONS: GameQuestion[] = [
  { cat: 'Study Skills', q: 'According to Cottrell (2019), what are study skills?', hint: 'Abilities, habits…', a: 'Abilities, habits, understanding and attitudes that enable achievement in your studies', exp: 'The Study Skills Handbook (2019).' },
  { cat: 'Study Skills', q: 'Definition of a "skill"?', hint: 'Learned…at will.', a: 'A learned activity performed well and at will', exp: 'Skills can always be developed with deliberate practice.' },
  { cat: 'Assessment', q: 'How is the RSS unit assessed?', hint: '100% assignment.', a: '75% research proposal + 25% research proposal presentation', exp: 'No written exam for this unit.' },
  { cat: 'Roadmap', q: 'Which topic follows "Getting Ready for Study"?', hint: 'Audit of yourself.', a: 'Learning and Skills Audit', exp: 'Topic 2 of the 12-topic roadmap.' },
  { cat: 'Independent Study', q: 'True or false: Independent study means never asking for help.', hint: 'Self-reliance…', a: 'False', exp: 'Knowing WHEN to ask for help is a sign of true independence.' },
  { cat: 'Independent Study', q: 'Name the three pillars of successful independent study.', hint: 'Time, learning, skills.', a: 'Organising/managing time; understanding how you learn; study skills', exp: 'Independent Study 2 slide.' },
  { cat: 'Procrastination', q: 'Name one recognised sign of procrastination (Dundee, 2023).', hint: 'Coffee or tidying.', a: 'Making another coffee "before you start" / repeatedly tidying / constant social media / making another to-do list', exp: 'Irrelevant activity replaces work.' },
  { cat: 'Procrastination', q: 'What often prevents students from achieving their best?', hint: 'Not ability.', a: 'Poor prioritisation', exp: 'NCC key insight: poor prioritisation, not lack of ability.' },
  { cat: 'Procrastination', q: 'Name two ways to get down to work.', hint: 'Timer…', a: 'Pomodoro technique; use a timer; start easy; edit last work; skim reading; do difficult work at peak concentration', exp: 'Any two strategies.' },
  { cat: 'Procrastination', q: 'If you grind to a halt, name two helpful responses.', hint: 'Environment…', a: 'Change environment/background noise; do 10 more minutes; take a short/extended break; set up the next session', exp: 'Any two. Do NOT quit for the week.' },
  { cat: 'Matrix', q: 'Quadrant I (Urgent & Important) is called…?', hint: 'React.', a: 'Necessities — react to tasks (DO)', exp: 'Looming deadlines, emergencies, crises.' },
  { cat: 'Matrix', q: 'Quadrant II (Important, Not Urgent)?', hint: 'Proactive.', a: 'Quality — proactive approach to tasks (PLAN)', exp: 'Where real growth and prevention happen.' },
  { cat: 'Matrix', q: 'Quadrant III (Urgent, Not Important)?', hint: 'Feels important.', a: 'Deception — tasks to be avoided (AVOID)', exp: 'Interruptions, non-essential calls and messages.' },
  { cat: 'Matrix', q: 'Quadrant IV (Neither Urgent nor Important)?', hint: 'Limit.', a: 'Waste — tasks to be limited (ELIMINATE)', exp: 'Trivia, excessive screen time, time-wasters.' },
  { cat: 'Matrix', q: 'The four quadrant action words?', hint: 'DO…', a: 'DO, PLAN, AVOID, ELIMINATE', exp: 'Four crisp decision rules.' },
  { cat: 'Matrix', q: 'Where should you spend MOST of your time?', hint: 'Proactive quadrant.', a: 'Quadrant II', exp: 'Prevents Quadrant I emergencies.' },
  { cat: 'Scoring', q: 'Column A (Importance) scale in Assessing Priorities?', hint: 'Six to ten.', a: '6 (unimportant) to 10 (essential)', exp: 'Scale from the mid-term paper.' },
  { cat: 'Scoring', q: 'Column B (Urgency) scale?', hint: 'One to five.', a: '1 (must be done at once) to 5 (it can wait)', exp: 'Lower number = more urgent.' },
  { cat: 'Scoring', q: 'Formula for Column C?', hint: 'Subtract.', a: 'C = A − B; higher scores are the priorities', exp: 'Rewards important and urgent tasks.' },
  { cat: 'Scoring', q: 'A=10, B=1 → C?', hint: 'Ten minus one.', a: '9', exp: 'Top priority (Task P).' },
  { cat: 'Scoring', q: 'A=9, B=2 → C?', hint: 'Nine minus two.', a: '7', exp: 'Second-highest priority (Task R).' },
  { cat: 'To-Do', q: 'First step of an effective to-do list?', hint: 'Big → small.', a: 'Break large tasks into smaller actions (chunking)', exp: 'Miller: working memory holds ~7 items.' },
  { cat: 'To-Do', q: 'The 2-Minute Rule (David Allen)?', hint: 'Under 2 minutes.', a: 'If it takes under 2 minutes, do it immediately', exp: 'From Getting Things Done.' },
  { cat: 'To-Do', q: 'Why cross tasks off?', hint: 'Brain reward.', a: 'Sense of achievement (dopamine release)', exp: 'Motivates continued focus.' },
  { cat: 'To-Do', q: "What to do with uncompleted tasks at day's end?", hint: "Don't delete.", a: "Transfer to the next day's list", exp: 'They rise in priority as deadlines near.' },
  { cat: 'Goals', q: 'A long-term goal looks ahead over…?', hint: 'Twelve months.', a: 'The year', exp: 'So shorter goals can be set confidently.' },
  { cat: 'Goals', q: 'A short-term goal concerns…?', hint: 'Immediate timeframe.', a: 'Study time today or this week', exp: 'Immediate, actionable planning.' },
  { cat: 'SMART', q: 'What does SMART stand for?', hint: 'S-M-A-R-T.', a: 'Specific, Measurable, Attainable, Relevant, Time-Based', exp: 'Structured goal-setting framework.' },
  { cat: 'SMART', q: "The lecture's model SMART goal is about…?", hint: 'Speaking in front of others.', a: 'Gaining confidence to give the end-of-module presentation from note cards', exp: 'Practised over 3 weeks; presentation in 12 weeks.' },
  { cat: 'Schedule', q: 'How often should you check your diary?', hint: 'Every day.', a: 'At least daily', exp: 'Keep it with you always and check daily.' },
  { cat: 'Schedule', q: 'How much time should stay unscheduled?', hint: 'Not 100%.', a: 'A 20–30% buffer', exp: 'For emergencies and rest.' },
  { cat: 'Schedule', q: 'Kanban tool named in the slides?', hint: 'Boards.', a: 'Trello', exp: 'To Do → Doing → Done.' },
  { cat: 'Schedule', q: 'Who created the Bullet Journal method?', hint: 'Ryder.', a: 'Ryder Carroll', exp: 'Analog rapid logging system.' },
  { cat: 'Schedule', q: 'Typical Pomodoro work interval?', hint: 'Tomato timer.', a: '25 minutes', exp: 'Followed by a 5-minute break.' },
  { cat: 'Schedule', q: 'Do difficult work when your ____ is best.', hint: 'Focus.', a: 'concentration', exp: 'Peak energy hours.' },
  { cat: 'HE', q: 'Name one way HE study differs from earlier study.', hint: 'Independence.', a: 'Greater difficulty/complexity; increased independence; developing as a learner; responsibility for own work', exp: 'Higher-level expectation.' },
  { cat: 'HE', q: 'Name one way the teacher role differs in HE.', hint: 'Facilitator.', a: 'Creating knowledge; intellectual curiosity/learning community; less support during assignments', exp: 'Teacher as guide, not spoon-feeder.' },
  { cat: 'Exam', q: 'Task P (proposal due tomorrow) is in which quadrant?', hint: 'Urgent + important.', a: 'Quadrant I — Necessities: react to tasks (DO)', exp: 'Do it first.' },
  { cat: 'Exam', q: 'With C scores 9, 5, 7, 2 — which task is 2nd?', hint: 'Second-highest C.', a: 'The task scoring 7 (Task R)', exp: 'Order: 9 (P) → 7 (R) → 5 (Q) → 2 (S).' },
  { cat: 'Exam', q: 'The two EXTRA unused words in Section C word box?', hint: 'Unused words.', a: 'tutorial and motivation', exp: 'Ten blanks, twelve words provided.' },
  { cat: 'Exam', q: 'True or false: Quadrant III is called "Deception".', hint: 'Avoid.', a: 'True', exp: 'Tasks to be avoided.' },
  { cat: 'Exam', q: 'True or false: You should schedule 100% of your time.', hint: 'Buffer.', a: 'False', exp: 'Leave 20–30% unscheduled buffer.' }
];

export interface GameConfig {
  wheel: { name: string; icon: string; values: number[] };
  dice: { name: string; icon: string; values: number[] };
  stopper: { name: string; icon: string; zones: number[] };
  mystery: { name: string; icon: string; values: number[] };
  cards: { name: string; icon: string; values: number[] };
  slots: { name: string; icon: string; values: number[]; jackpot: number };
  bottle: { name: string; icon: string; values: number[] };
  lucky: { name: string; icon: string; values: number[] };
  treasure: { name: string; icon: string; gems: number[]; bombs: number };
  darts: { name: string; icon: string; values: number[] };
  coin: { name: string; icon: string; win: number; lose: number };
  balloons: { name: string; icon: string; values: number[] };
}

export const DEFAULT_GAME_CONFIG: GameConfig = {
  wheel: { name: 'Wheel of Fortune', icon: '🎡', values: [5, 10, 15, 20, 25, -5, 50, 100] },
  dice: { name: 'Roll the Dice', icon: '🎲', values: [5, 10, 15, 20, 25, 50] },
  stopper: { name: 'Stopper', icon: '⏱️', zones: [100, 50, 25, 10] },
  mystery: { name: 'Mystery Box', icon: '🎁', values: [5, 10, 15, 20, 25, -5, 50, 100, 0, 75] },
  cards: { name: 'Pick a Card', icon: '🃏', values: [5, 10, 15, 20, 25, 30, 40, 50] },
  slots: { name: 'Slot Machine', icon: '🎰', values: [5, 10, 15, 20, 25, 50], jackpot: 100 },
  bottle: { name: 'Spin the Bottle', icon: '🍾', values: [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 100] },
  lucky: { name: 'Lucky Number', icon: '🔢', values: [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 100] },
  treasure: { name: 'Treasure Hunt', icon: '💎', gems: [10, 20, 30, 40, 50, 60, 80], bombs: 2 },
  darts: { name: 'Dart Board', icon: '🎯', values: [100, 50, 30, 20, 10] },
  coin: { name: 'Coin Flip', icon: '🪙', win: 50, lose: 10 },
  balloons: { name: 'Balloon Pop', icon: '🎈', values: [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100, -5] }
};
