/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * RSS Mid-Term Masterclass Pure Business Logic
 * Created by Fani
 */

export interface QuadrantResult {
  quadrant: string;
  name: string;
  action: 'DO' | 'PLAN' | 'AVOID' | 'ELIMINATE';
  description: string;
}

/**
 * Calculates Eisenhower / Assessing Priorities Column C: Importance (A) minus Urgency (B).
 * Column A is on scale 6 (unimportant) to 10 (essential).
 * Column B is on scale 1 (must be done at once) to 5 (it can wait).
 * Higher score in Column C indicates higher priority.
 */
export function calculatePriorityScore(importance: number, urgency: number): number {
  return importance - urgency;
}

/**
 * Classifies an activity into one of Eisenhower's four quadrants.
 * Urgency threshold: <= 2 is urgent (scale 1-5 where 1 is immediate).
 * Importance threshold: >= 8 is high importance (scale 6-10 where 10 is essential).
 */
export function classifyQuadrant(urgency: number, importance: number): QuadrantResult {
  const isUrgent = urgency <= 2;
  const isImportant = importance >= 8;

  if (isUrgent && isImportant) {
    return {
      quadrant: 'Quadrant I',
      name: 'Necessities',
      action: 'DO',
      description: 'React to tasks — Looming deadlines, emergencies, crises.'
    };
  } else if (!isUrgent && isImportant) {
    return {
      quadrant: 'Quadrant II',
      name: 'Quality',
      action: 'PLAN',
      description: 'Proactive approach — Planning, reading ahead, goal setting.'
    };
  } else if (isUrgent && !isImportant) {
    return {
      quadrant: 'Quadrant III',
      name: 'Deception',
      action: 'AVOID',
      description: 'Tasks to be avoided — Interruptions, non-critical messages.'
    };
  } else {
    return {
      quadrant: 'Quadrant IV',
      name: 'Waste',
      action: 'ELIMINATE',
      description: 'Tasks to be limited — Trivial time-wasters, distraction.'
    };
  }
}

/**
 * Evaluates a slot machine spin with 3 reels.
 * 3 matching symbols = JACKPOT
 * 2 matching symbols = matched value
 * 0 matching symbols = 0
 */
export function evaluateSlotMatch(reels: number[], jackpotValue = 100): { points: number; isJackpot: boolean; message: string } {
  if (reels.length !== 3) {
    return { points: 0, isJackpot: false, message: 'Invalid reels' };
  }
  const [a, b, c] = reels;
  if (a === b && b === c) {
    return { points: jackpotValue, isJackpot: true, message: '🎰 3 MATCH JACKPOT!' };
  }
  if (a === b || a === c) {
    return { points: a, isJackpot: false, message: '🎰 Two match!' };
  }
  if (b === c) {
    return { points: b, isJackpot: false, message: '🎰 Two match!' };
  }
  return { points: 0, isJackpot: false, message: '🎰 No match' };
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
    return normUser === normAns || (normAns.length > 3 && normUser.includes(normAns));
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
 * Stopper game zone lookup based on marker position percentage (0-100)
 */
export function evaluateStopperZone(
  positionPct: number,
  zones: { p: number; w: number; l: string }[]
): { points: number; label: string } {
  let accumulated = 0;
  for (const zone of zones) {
    accumulated += zone.w;
    if (positionPct <= accumulated) {
      return { points: zone.p, label: zone.l };
    }
  }
  const lastZone = zones[zones.length - 1];
  return { points: lastZone.p, label: lastZone.l };
}
