/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ESL Mastery Lab Pure Logic & Grammar Engine
 * Created by Fani
 * © 2026 Fani. All rights reserved.
 */

export interface QuadrantResult {
  quadrant: string;
  name: string;
  action: 'DO' | 'PLAN' | 'AVOID' | 'ELIMINATE';
  description: string;
}

/**
 * Calculates Eisenhower / Assessing Priorities Column C: Importance (A) minus Urgency (B).
 */
export function calculatePriorityScore(importance: number, urgency: number): number {
  return importance - urgency;
}

/**
 * Normalized string comparison helper
 */
export function normalizeText(s: string): string {
  return String(s || '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Flexible text answer verification with keyword and synonym group support
 */
export function isAnswerCorrect(
  userAnswer: string,
  acceptedAnswers: string[] = [],
  requiredKeywords: string[] = [],
  anyGroups: string[][] = []
): boolean {
  const normUser = normalizeText(userAnswer);
  if (!normUser) return false;

  // Direct match with accepted variants
  if (acceptedAnswers.some(ans => {
    const normAns = normalizeText(ans);
    return normUser === normAns || (normAns.length > 3 && (normUser.includes(normAns) || normAns.includes(normUser)));
  })) {
    return true;
  }

  // Check required keywords and anyGroups
  const hasKeywords = requiredKeywords.length > 0;
  const hasGroups = anyGroups.length > 0;

  if (hasKeywords || hasGroups) {
    let keywordsPassed = true;
    if (hasKeywords) {
      keywordsPassed = requiredKeywords.every(k => normUser.includes(normalizeText(k)));
    }

    let groupsPassed = true;
    if (hasGroups) {
      groupsPassed = anyGroups.every(group =>
        group.some(term => normUser.includes(normalizeText(term)))
      );
    }

    if (keywordsPassed && groupsPassed) {
      return true;
    }
  }

  return false;
}

/**
 * Forms regular and irregular comparative adjectives based on ESL grammar rules
 */
export function getComparative(base: string): string {
  const clean = base.trim().toLowerCase();
  
  // Irregulars
  const irregulars: Record<string, string> = {
    good: 'better',
    bad: 'worse',
    far: 'farther',
    little: 'less',
    many: 'more',
    much: 'more'
  };
  if (irregulars[clean]) return irregulars[clean];

  // Multisyllabic adjectives (3+ syllables or suffixes like -ful, -ous, -ing, -ive)
  if (clean.endsWith('ful') || clean.endsWith('ous') || clean.endsWith('ing') || clean.endsWith('ive') || clean.length > 6) {
    if (clean.endsWith('y') && clean.length <= 6) {
      return clean.slice(0, -1) + 'ier';
    }
    return 'more ' + clean;
  }

  // Ending in -y (two syllables usually: happy -> happier, easy -> easier, funny -> funnier)
  if (clean.endsWith('y') && clean.length > 2) {
    return clean.slice(0, -1) + 'ier';
  }

  // Ending in -e (large -> larger, nice -> nicer, wise -> wiser)
  if (clean.endsWith('e')) {
    return clean + 'r';
  }

  // CVC doubling for short words (big -> bigger, hot -> hotter, thin -> thinner)
  const vowels = 'aeiou';
  if (
    clean.length <= 5 &&
    clean.length >= 3 &&
    !vowels.includes(clean[clean.length - 1]) &&
    vowels.includes(clean[clean.length - 2]) &&
    !vowels.includes(clean[clean.length - 3]) &&
    !['w', 'x', 'y'].includes(clean[clean.length - 1])
  ) {
    return clean + clean[clean.length - 1] + 'er';
  }

  // Simple short adjectives
  if (clean.length <= 5 || ['fast', 'tall', 'slow', 'cold', 'warm', 'old', 'young'].includes(clean)) {
    return clean + 'er';
  }

  // Multisyllabic adjectives
  return 'more ' + clean;
}

/**
 * Evaluates Countable vs Uncountable nouns from the curriculum
 */
export function isNounCountable(noun: string): boolean {
  const n = normalizeText(noun);
  const uncountables = [
    'water', 'milk', 'juice', 'tea', 'coffee', 'oil', 'soup',
    'rice', 'sugar', 'salt', 'flour', 'pepper', 'sand',
    'wood', 'metal', 'plastic', 'glass', 'paper', 'wool',
    'bread', 'meat', 'cheese', 'butter', 'fish', 'fruit',
    'information', 'advice', 'music', 'fun', 'homework', 'progress', 'research', 'knowledge', 'evidence',
    'english', 'maths', 'physics', 'economics', 'news',
    'breakfast', 'lunch', 'dinner', 'weather', 'rain', 'chess', 'football',
    'luggage', 'furniture', 'equipment', 'machinery', 'jewellery', 'clothing', 'money'
  ];
  return !uncountables.includes(n);
}

/**
 * Pure Chaos Mode Math Calculations
 */
export function calculateChaosOutcome(
  type: string,
  currentScore: number,
  paramVal = 0
): { newScore: number; message: string } {
  let newScore = currentScore;
  let message = '';

  switch (type) {
    case 'double':
      newScore = currentScore * 2;
      message = `🌪️ DOUBLE POINTS! Score doubled to ${newScore}.`;
      break;
    case 'triple':
      newScore = currentScore * 3;
      message = `🌪️ TRIPLE POINTS! Score skyrocketed to ${newScore}.`;
      break;
    case 'half':
      const loss = Math.floor(currentScore / 2);
      newScore = currentScore - loss;
      message = `💸 LOSE HALF! Lost ${loss} points.`;
      break;
    case 'loseall':
      newScore = 0;
      message = `💥 BUST! Score wiped to 0.`;
      break;
    case 'points':
      newScore = Math.max(0, currentScore + paramVal);
      message = `${paramVal >= 0 ? '🎉 +' : '💥 '}${paramVal} points.`;
      break;
    default:
      newScore = currentScore;
      message = 'Chaos had no effect.';
  }

  return { newScore, message };
}

/**
 * Calculates Heist Theft Outcome
 */
export function calculateHeist(
  level: 'sneaky' | 'bold' | 'reckless',
  thiefScore: number,
  victimScore: number,
  roll = Math.random()
): { success: boolean; stolen: number; loss: number } {
  let prob = 0.75;
  let minA = 5;
  let maxA = 20;
  let failLoss = 5;

  if (level === 'sneaky') {
    prob = 0.75;
    minA = 5;
    maxA = 20;
    failLoss = 5;
  } else if (level === 'bold') {
    prob = 0.5;
    minA = 20;
    maxA = 50;
    failLoss = 25;
  } else {
    prob = 0.3;
    minA = 50;
    maxA = 150;
    failLoss = Math.floor(thiefScore * 0.5);
  }

  if (roll < prob) {
    const rawAmt = minA + Math.floor(0.5 * (maxA - minA + 1));
    const stolen = Math.min(rawAmt, victimScore);
    return { success: true, stolen, loss: 0 };
  } else {
    const loss = Math.min(thiefScore, failLoss);
    return { success: false, stolen: 0, loss };
  }
}

/**
 * Evaluates 3-reel slot match
 */
export function evaluateSlotMatch(reels: number[], jackpot: number): { points: number; message: string } {
  const [r1, r2, r3] = reels;
  if (r1 === r2 && r2 === r3) {
    return { points: jackpot, message: `🎉 JACKPOT! Triple ${r1}! (+${jackpot} pts)` };
  }
  if (r1 === r2 || r2 === r3 || r1 === r3) {
    const matchVal = (r1 === r2 || r1 === r3) ? r1 : r2;
    return { points: matchVal, message: `✨ Pair match! Double ${matchVal}! (+${matchVal} pts)` };
  }
  return { points: 5, message: '👍 No match, consolation +5 pts' };
}

/**
 * Evaluates stopper zone position
 */
export function evaluateStopperZone(pos: number, zones: { p: number; w: number; l: string }[]): { points: number; label: string } {
  let acc = 0;
  for (const z of zones) {
    if (pos >= acc && pos < acc + z.w) {
      return { points: z.p, label: z.l };
    }
    acc += z.w;
  }
  return { points: zones[0]?.p || 10, label: zones[0]?.l || 'OK' };
}
