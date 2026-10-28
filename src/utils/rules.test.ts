import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getComparative,
  isNounCountable,
  calculateChaosOutcome,
  calculateHeist,
  isAnswerCorrect
} from './rules.ts';

test('getComparative correctly transforms base adjectives into comparatives', () => {
  // Irregulars
  assert.equal(getComparative('good'), 'better');
  assert.equal(getComparative('bad'), 'worse');
  assert.equal(getComparative('far'), 'farther');
  assert.equal(getComparative('little'), 'less');

  // CVC doubling
  assert.equal(getComparative('hot'), 'hotter');
  assert.equal(getComparative('big'), 'bigger');

  // Ending in y
  assert.equal(getComparative('happy'), 'happier');
  assert.equal(getComparative('funny'), 'funnier');

  // Ending in e
  assert.equal(getComparative('large'), 'larger');

  // Long adjectives
  assert.equal(getComparative('beautiful'), 'more beautiful');
  assert.equal(getComparative('expensive'), 'more expensive');
});

test('isNounCountable distinguishes countable vs mass nouns', () => {
  assert.equal(isNounCountable('apple'), true);
  assert.equal(isNounCountable('egg'), true);
  assert.equal(isNounCountable('friend'), true);

  assert.equal(isNounCountable('water'), false);
  assert.equal(isNounCountable('rice'), false);
  assert.equal(isNounCountable('information'), false);
  assert.equal(isNounCountable('advice'), false);
  assert.equal(isNounCountable('bread'), false);
  assert.equal(isNounCountable('cheese'), false);
});

test('calculateChaosOutcome computes double, triple, and bust multipliers', () => {
  const dbl = calculateChaosOutcome('double', 50);
  assert.equal(dbl.newScore, 100);

  const trpl = calculateChaosOutcome('triple', 50);
  assert.equal(trpl.newScore, 150);

  const half = calculateChaosOutcome('half', 50);
  assert.equal(half.newScore, 25);

  const bust = calculateChaosOutcome('loseall', 50);
  assert.equal(bust.newScore, 0);
});

test('calculateHeist determines theft or penalty correctly with fixed rolls', () => {
  // Sneaky heist with roll 0.2 (< 0.75) -> success
  const success = calculateHeist('sneaky', 100, 50, 0.2);
  assert.equal(success.success, true);
  assert.equal(success.stolen > 0, true);
  assert.equal(success.loss, 0);

  // Reckless heist with roll 0.9 (> 0.3) -> failure with 50% loss
  const fail = calculateHeist('reckless', 100, 50, 0.9);
  assert.equal(fail.success, false);
  assert.equal(fail.stolen, 0);
  assert.equal(fail.loss, 50);
});

test('isAnswerCorrect validates ESL idiom and grammar variants', () => {
  assert.equal(isAnswerCorrect('piece of cake', ['piece of cake']), true);
  assert.equal(isAnswerCorrect('wolf down', ['wolf down', 'wolfed down']), true);
  assert.equal(isAnswerCorrect('wrong', ['piece of cake']), false);
});
