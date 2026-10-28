import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePriorityScore,
  classifyQuadrant,
  evaluateSlotMatch,
  normalizeText,
  isAnswerCorrect,
  evaluateStopperZone
} from './rules.ts';

test('calculatePriorityScore correctly subtracts urgency from importance', () => {
  assert.equal(calculatePriorityScore(10, 1), 9); // Task P: 10 - 1 = 9
  assert.equal(calculatePriorityScore(8, 3), 5);  // Task Q: 8 - 3 = 5
  assert.equal(calculatePriorityScore(9, 2), 7);  // Task R: 9 - 2 = 7
  assert.equal(calculatePriorityScore(6, 4), 2);  // Task S: 6 - 4 = 2
});

test('classifyQuadrant correctly places items into Eisenhower matrix', () => {
  // Urgent (<=2) and Important (>=8) -> Quadrant I (Necessities / DO)
  const q1 = classifyQuadrant(1, 10);
  assert.equal(q1.quadrant, 'Quadrant I');
  assert.equal(q1.action, 'DO');

  // Not Urgent (>2) and Important (>=8) -> Quadrant II (Quality / PLAN)
  const q2 = classifyQuadrant(3, 8);
  assert.equal(q2.quadrant, 'Quadrant II');
  assert.equal(q2.action, 'PLAN');

  // Urgent (<=2) and Not Important (<8) -> Quadrant III (Deception / AVOID)
  const q3 = classifyQuadrant(2, 6);
  assert.equal(q3.quadrant, 'Quadrant III');
  assert.equal(q3.action, 'AVOID');

  // Not Urgent (>2) and Not Important (<8) -> Quadrant IV (Waste / ELIMINATE)
  const q4 = classifyQuadrant(4, 5);
  assert.equal(q4.quadrant, 'Quadrant IV');
  assert.equal(q4.action, 'ELIMINATE');
});

test('evaluateSlotMatch returns correct points and jackpot detection', () => {
  // 3 of a kind
  const triple = evaluateSlotMatch([25, 25, 25], 100);
  assert.equal(triple.points, 100);
  assert.equal(triple.isJackpot, true);

  // 2 of a kind
  const pair1 = evaluateSlotMatch([25, 25, 10], 100);
  assert.equal(pair1.points, 25);
  assert.equal(pair1.isJackpot, false);

  const pair2 = evaluateSlotMatch([10, 50, 50], 100);
  assert.equal(pair2.points, 50);

  // No match
  const none = evaluateSlotMatch([5, 15, 25], 100);
  assert.equal(none.points, 0);
  assert.equal(none.isJackpot, false);
});

test('normalizeText strips punctuation, spaces, and lowers case', () => {
  assert.equal(normalizeText('  Pomodoro!! '), 'pomodoro');
  assert.equal(normalizeText("It's a test?"), 'its a test');
});

test('isAnswerCorrect validates answers with synonyms and keywords', () => {
  assert.equal(isAnswerCorrect('achievement', ['achievement']), true);
  assert.equal(isAnswerCorrect('ACHIEVEMENT', ['achievement']), true);
  assert.equal(isAnswerCorrect('wrong', ['achievement']), false);

  // Multiple keywords
  const modelAnswer = 'Working without close supervision and taking personal responsibility';
  assert.equal(
    isAnswerCorrect(modelAnswer, [], ['supervision', 'responsibility']),
    true
  );
});

test('evaluateStopperZone returns correct zone based on percentage', () => {
  const zones = [
    { p: 10, w: 25, l: 'OK' },
    { p: 25, w: 15, l: 'GOOD' },
    { p: 50, w: 7, l: 'GREAT' },
    { p: 100, w: 6, l: 'JACKPOT' },
    { p: 50, w: 7, l: 'GREAT' },
    { p: 25, w: 15, l: 'GOOD' },
    { p: 10, w: 25, l: 'OK' }
  ];
  // 0% -> zone 0 (OK)
  assert.equal(evaluateStopperZone(10, zones).label, 'OK');
  // 48% -> (25+15=40 -> 40+7=47 -> 47+6=53) -> JACKPOT
  assert.equal(evaluateStopperZone(50, zones).label, 'JACKPOT');
});
