/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 21 Interactive Touch Board Games Arcade & Chaos Engine Overlay
 * Created by Fani
 * © 2026 Fani. All rights reserved.
 */

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { X, Settings, RefreshCw, Trophy, Skull, Flame } from 'lucide-react';
import { GameConfig, Player } from '../data/eslData';
import { evaluateSlotMatch, evaluateStopperZone, calculateChaosOutcome, calculateHeist } from '../utils/rules';
import { sound } from '../utils/audio';

interface BoardGameOverlayProps {
  gameKey: keyof GameConfig | null;
  config: GameConfig;
  onClose: () => void;
  onOpenSettings: () => void;
  activePlayer: Player | null;
  players: Player[];
  chaosMode: boolean;
  onAwardPoints: (points: number) => void;
  onUpdatePlayerScore?: (playerId: number, delta: number) => void;
}

const GRADIENTS: Record<string, string> = {
  wheel: 'from-blue-600 to-indigo-900',
  dice: 'from-pink-600 to-rose-900',
  stopper: 'from-cyan-600 to-blue-900',
  mystery: 'from-amber-600 to-red-900',
  cards: 'from-teal-600 to-indigo-950',
  slots: 'from-orange-600 to-amber-900',
  bottle: 'from-rose-500 to-purple-900',
  lucky: 'from-yellow-500 to-amber-800',
  treasure: 'from-emerald-600 to-teal-950',
  darts: 'from-red-600 to-orange-950',
  coin: 'from-amber-500 to-yellow-800',
  balloons: 'from-sky-500 to-indigo-900',
  mole: 'from-emerald-800 to-teal-950',
  higher: 'from-indigo-800 to-purple-950',
  reaction: 'from-yellow-700 to-stone-900',
  memory: 'from-violet-800 to-fuchsia-950',
  chaoswheel: 'from-red-900 to-black',
  heist: 'from-zinc-900 to-stone-950',
  double: 'from-amber-700 to-rose-950',
  robbery: 'from-slate-900 to-red-950',
  thief: 'from-stone-900 to-zinc-950'
};

export const BoardGameOverlay: React.FC<BoardGameOverlayProps> = ({
  gameKey,
  config,
  onClose,
  onOpenSettings,
  activePlayer,
  players,
  chaosMode,
  onAwardPoints,
  onUpdatePlayerScore
}) => {
  if (!gameKey) return null;

  const currentConf = config[gameKey];
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [resultPoints, setResultPoints] = useState<number | null>(null);

  // Wheel State
  const [wheelRotation, setWheelRotation] = useState(0);
  const [isSpinningWheel, setIsSpinningWheel] = useState(false);

  // Dice State
  const [diceVal, setDiceVal] = useState<number | string>('🎲');
  const [isRollingDice, setIsRollingDice] = useState(false);

  // Stopper State
  const [stopperPos, setStopperPos] = useState(0);
  const [stopperStopped, setStopperStopped] = useState(false);
  const stopperRafRef = useRef<number | null>(null);

  // Mystery Box State
  const [mysteryBoxes, setMysteryBoxes] = useState<{ val: number; opened: boolean; shaking: boolean }[]>([]);

  // Cards State
  const [cardDeck, setCardDeck] = useState<{ val: number; flipped: boolean }[]>([]);

  // Slots State
  const [reels, setReels] = useState<number[]>([7, 7, 7]);
  const [isSpinningSlots, setIsSpinningSlots] = useState(false);

  // Bottle State
  const [bottleRot, setBottleRot] = useState(0);
  const [isSpinningBottle, setIsSpinningBottle] = useState(false);

  // Lucky Number State
  const [luckyBalls, setLuckyBalls] = useState<{ val: number; picked: boolean }[]>([]);

  // Treasure State
  const [treasureGrid, setTreasureGrid] = useState<{ isGem: boolean; val: number; opened: boolean }[]>([]);
  const [treasurePot, setTreasurePot] = useState(0);
  const [treasureGameOver, setTreasureGameOver] = useState(false);

  // Darts State
  const [dartPos, setDartPos] = useState<{ x: number; y: number } | null>(null);
  const [isThrowingDart, setIsThrowingDart] = useState(false);

  // Coin State
  const [isFlippingCoin, setIsFlippingCoin] = useState(false);
  const [coinSide, setCoinSide] = useState<'H' | 'T'>('H');

  // Balloons State
  const [balloons, setBalloons] = useState<{ val: number; popped: boolean; x: number; hue: number }[]>([]);

  // Whack a Mole State
  const [moleGrid, setMoleGrid] = useState<('empty' | 'mole' | 'bomb')[]>(Array(9).fill('empty'));
  const [moleScore, setMoleScore] = useState(0);
  const [moleActive, setMoleActive] = useState(false);

  // Higher or Lower State
  const [hiloCurrent, setHiloCurrent] = useState(7);
  const [hiloNext, setHiloNext] = useState<number | null>(null);
  const [hiloStreak, setHiloStreak] = useState(0);

  // Reaction Tap State
  const [reactionState, setReactionState] = useState<'idle' | 'waiting' | 'ready' | 'clicked'>('idle');
  const [reactionStartTime, setReactionStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  // Memory Pairs State
  const [memoryCards, setMemoryCards] = useState<{ id: number; symbol: string; flipped: boolean; matched: boolean }[]>([]);
  const [firstFlipped, setFirstFlipped] = useState<number | null>(null);
  const [memoryMatches, setMemoryMatches] = useState(0);

  // Reset or Init specific game on open or replay
  const initGame = () => {
    setResultMsg(null);
    setResultPoints(null);

    if (gameKey === 'stopper') {
      setStopperStopped(false);
      setStopperPos(0);
      const t0 = performance.now();
      const loop = (t: number) => {
        const elapsed = t - t0;
        const phase = (elapsed % 1800) / 1800;
        const pos = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
        setStopperPos(pos * 100);
        stopperRafRef.current = requestAnimationFrame(loop);
      };
      stopperRafRef.current = requestAnimationFrame(loop);
    } else if (gameKey === 'mystery') {
      const vals = [...(config.mystery?.values || [5, 10, 15, 20, 25, 50])].sort(() => Math.random() - 0.5);
      setMysteryBoxes(vals.map(v => ({ val: v, opened: false, shaking: false })));
    } else if (gameKey === 'cards') {
      const vals = [...(config.cards?.values || [5, 10, 15, 20, 25, 30])].sort(() => Math.random() - 0.5);
      setCardDeck(vals.map(v => ({ val: v, flipped: false })));
    } else if (gameKey === 'slots') {
      setReels([5, 5, 5]);
      setIsSpinningSlots(false);
    } else if (gameKey === 'lucky') {
      const vals = [...(config.lucky?.values || [5, 10, 15, 20, 25, 30, 40, 50, 75, 100])].sort(() => Math.random() - 0.5);
      setLuckyBalls(vals.map(v => ({ val: v, picked: false })));
    } else if (gameKey === 'treasure') {
      const g = config.treasure || { gems: [10, 20, 30, 40, 50], bombs: 2 };
      const tiles = [
        ...g.gems.map(v => ({ isGem: true, val: v, opened: false })),
        ...Array(g.bombs).fill(0).map(() => ({ isGem: false, val: 0, opened: false }))
      ].sort(() => Math.random() - 0.5);
      setTreasureGrid(tiles);
      setTreasurePot(0);
      setTreasureGameOver(false);
    } else if (gameKey === 'darts') {
      setDartPos(null);
      setIsThrowingDart(false);
    } else if (gameKey === 'balloons') {
      const vals = [...(config.balloons?.values || [5, 10, 15, 20, 25, 30, 50, 100])].sort(() => Math.random() - 0.5);
      setBalloons(vals.map((v, i) => ({
        val: v,
        popped: false,
        x: 8 + (i * 80) / vals.length,
        hue: (i * 45) % 360
      })));
    } else if (gameKey === 'mole') {
      setMoleGrid(Array(9).fill('empty'));
      setMoleScore(0);
      setMoleActive(false);
    } else if (gameKey === 'higher') {
      setHiloCurrent(Math.floor(Math.random() * 10) + 2);
      setHiloNext(null);
      setHiloStreak(0);
    } else if (gameKey === 'reaction') {
      setReactionState('idle');
      setReactionTime(null);
    } else if (gameKey === 'memory') {
      const symbols = ['🦁', '🐬', '🦅', '🐵', '🦁', '🐬', '🦅', '🐵'].sort(() => Math.random() - 0.5);
      setMemoryCards(symbols.map((symbol, idx) => ({ id: idx, symbol, flipped: false, matched: false })));
      setFirstFlipped(null);
      setMemoryMatches(0);
    }
  };

  useEffect(() => {
    initGame();
    return () => {
      if (stopperRafRef.current) {
        cancelAnimationFrame(stopperRafRef.current);
      }
    };
  }, [gameKey]);

  const awardGameScore = (pts: number, message: string) => {
    setResultPoints(pts);
    setResultMsg(message);
    if (pts > 0) {
      sound.playSuccess();
      if (pts >= 50) {
        confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
      }
    } else if (pts < 0) {
      sound.playError();
    }
    onAwardPoints(pts);
  };

  // 1. Wheel of Fortune
  const spinWheel = () => {
    if (isSpinningWheel) return;
    setIsSpinningWheel(true);
    sound.playClick();

    const vals = config.wheel?.values || [5, 10, 15, 20, 25, 50, 100];
    const n = vals.length;
    const step = 360 / n;
    const chosenIdx = Math.floor(Math.random() * n);
    const targetAngle = (360 - (chosenIdx * step + step / 2)) % 360;
    const newRot = wheelRotation - (wheelRotation % 360) + 360 * 5 + targetAngle;
    setWheelRotation(newRot);

    setTimeout(() => {
      setIsSpinningWheel(false);
      const won = vals[chosenIdx];
      awardGameScore(won, `🎡 Wheel landed on ${won >= 0 ? '+' : ''}${won}!`);
    }, 4200);
  };

  // 2. Roll the Dice
  const rollDice = () => {
    if (isRollingDice) return;
    setIsRollingDice(true);
    sound.playClick();

    const vals = config.dice?.values || [5, 10, 15, 20, 25, 50];
    const interval = setInterval(() => {
      setDiceVal(vals[Math.floor(Math.random() * vals.length)]);
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      const finalVal = vals[Math.floor(Math.random() * vals.length)];
      setDiceVal(finalVal);
      setIsRollingDice(false);
      awardGameScore(finalVal, `🎲 Rolled a magnificent ${finalVal}!`);
    }, 1300);
  };

  // 3. Stopper
  const stopStopper = () => {
    if (stopperStopped) return;
    setStopperStopped(true);
    if (stopperRafRef.current) {
      cancelAnimationFrame(stopperRafRef.current);
    }
    const z = config.stopper?.zones || [100, 50, 25, 10];
    const zones = [
      { p: z[3] || 10, w: 25, l: 'OK' },
      { p: z[2] || 25, w: 15, l: 'GOOD' },
      { p: z[1] || 50, w: 7, l: 'GREAT' },
      { p: z[0] || 100, w: 6, l: 'JACKPOT' },
      { p: z[1] || 50, w: 7, l: 'GREAT' },
      { p: z[2] || 25, w: 15, l: 'GOOD' },
      { p: z[3] || 10, w: 25, l: 'OK' }
    ];
    const outcome = evaluateStopperZone(stopperPos, zones);
    awardGameScore(outcome.points, `⏱️ Hit ${outcome.label}! (${outcome.points} pts)`);
  };

  // 4. Mystery Box
  const pickBox = (index: number) => {
    if (resultPoints !== null) return;
    const updated = [...mysteryBoxes];
    updated[index].shaking = true;
    setMysteryBoxes([...updated]);
    sound.playClick();

    setTimeout(() => {
      updated[index].shaking = false;
      updated[index].opened = true;
      setMysteryBoxes([...updated]);
      const won = updated[index].val;
      awardGameScore(won, `🎁 Mystery box revealed ${won >= 0 ? '+' : ''}${won} points!`);
    }, 550);
  };

  // 5. Cards
  const pickCard = (index: number) => {
    if (resultPoints !== null) return;
    const updated = [...cardDeck];
    updated[index].flipped = true;
    setCardDeck([...updated]);
    sound.playClick();

    setTimeout(() => {
      const won = updated[index].val;
      awardGameScore(won, `🃏 You uncovered card ${won >= 0 ? '+' : ''}${won}!`);
    }, 450);
  };

  // 6. Slots
  const spinSlots = () => {
    if (isSpinningSlots) return;
    setIsSpinningSlots(true);
    sound.playClick();

    const vals = config.slots?.values || [5, 10, 15, 20, 25, 50];
    const jackpot = config.slots?.jackpot || 100;
    const finalReels = [
      vals[Math.floor(Math.random() * vals.length)],
      vals[Math.floor(Math.random() * vals.length)],
      vals[Math.floor(Math.random() * vals.length)]
    ];

    setTimeout(() => {
      setReels(finalReels);
      setIsSpinningSlots(false);
      const evalMatch = evaluateSlotMatch(finalReels, jackpot);
      awardGameScore(evalMatch.points, `${evalMatch.message} (${finalReels.join(' - ')})`);
    }, 1200);
  };

  // 7. Spin Bottle
  const spinBottle = () => {
    if (isSpinningBottle) return;
    setIsSpinningBottle(true);
    sound.playClick();

    const vals = config.bottle?.values || [5, 10, 15, 20, 25, 50];
    const n = vals.length;
    const step = 360 / n;
    const idx = Math.floor(Math.random() * n);
    const target = idx * step + step / 2;
    const newRot = bottleRot - (bottleRot % 360) + 360 * 4 + ((target - (bottleRot % 360)) + 360) % 360;
    setBottleRot(newRot);

    setTimeout(() => {
      setIsSpinningBottle(false);
      const won = vals[idx];
      awardGameScore(won, `🍾 Bottle pointed at ${won >= 0 ? '+' : ''}${won}!`);
    }, 3400);
  };

  // 8. Lucky Number
  const pickLuckyBall = (index: number) => {
    if (resultPoints !== null) return;
    const updated = [...luckyBalls];
    updated[index].picked = true;
    setLuckyBalls([...updated]);
    sound.playClick();

    const won = updated[index].val;
    awardGameScore(won, `🔢 Lucky Ball #${index + 1} held ${won >= 0 ? '+' : ''}${won}!`);
  };

  // 9. Treasure Hunt
  const openTile = (index: number) => {
    if (treasureGameOver || treasureGrid[index].opened) return;
    const tile = treasureGrid[index];
    tile.opened = true;
    setTreasureGrid([...treasureGrid]);
    sound.playClick();

    if (tile.isGem) {
      const newPot = treasurePot + tile.val;
      setTreasurePot(newPot);
      const remainingGems = treasureGrid.filter(t => t.isGem && !t.opened).length;
      if (remainingGems === 0) {
        setTreasureGameOver(true);
        awardGameScore(newPot, `💎 All gems collected! Total pot: +${newPot}!`);
      }
    } else {
      setTreasureGameOver(true);
      awardGameScore(0, `💥 BOOM! Struck a bomb. The pot was lost...`);
    }
  };

  const bankTreasurePot = () => {
    if (treasureGameOver || treasurePot === 0) return;
    setTreasureGameOver(true);
    awardGameScore(treasurePot, `💰 Treasure pot banked successfully for +${treasurePot} points!`);
  };

  // 10. Dart Board
  const throwDart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isThrowingDart || resultPoints !== null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    const maxR = rect.width / 2;
    const pct = dist / maxR;

    setIsThrowingDart(true);
    setDartPos({ x, y });
    sound.playClick();

    const vals = config.darts?.values || [100, 50, 30, 20, 10];
    let won = vals[vals.length - 1];
    if (pct <= 0.15) won = vals[0];
    else if (pct <= 0.35) won = vals[1];
    else if (pct <= 0.6) won = vals[2];
    else if (pct <= 0.85) won = vals[3];

    setTimeout(() => {
      awardGameScore(won, `🎯 Dart struck! Ring score: +${won}!`);
      setIsThrowingDart(false);
    }, 600);
  };

  // 11. Coin Flip
  const flipCoin = (call: 'H' | 'T') => {
    if (isFlippingCoin || resultPoints !== null) return;
    setIsFlippingCoin(true);
    sound.playClick();

    const outcome: 'H' | 'T' = Math.random() < 0.5 ? 'H' : 'T';
    setTimeout(() => {
      setCoinSide(outcome);
      setIsFlippingCoin(false);
      const isCorrect = call === outcome;
      const pts = isCorrect ? (config.coin?.win || 50) : (config.coin?.lose || 10);
      awardGameScore(
        pts,
        `${outcome === 'H' ? '👑 HEADS' : '🌿 TAILS'}! ${isCorrect ? '✅ Correct call' : '❌ Wrong call'}!`
      );
    }, 1400);
  };

  // 12. Balloon Pop
  const popBalloon = (index: number) => {
    if (resultPoints !== null || balloons[index].popped) return;
    const updated = [...balloons];
    updated[index].popped = true;
    setBalloons([...updated]);
    sound.playClick();

    const won = updated[index].val;
    awardGameScore(won, `🎈 Popped balloon! ${won >= 0 ? '+' : ''}${won} points!`);
  };

  // 13. Whack-a-Mole
  const startMole = () => {
    setMoleScore(0);
    setMoleActive(true);
    sound.playClick();

    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count > 15) {
        clearInterval(interval);
        setMoleActive(false);
        setMoleGrid(Array(9).fill('empty'));
        return;
      }
      const newGrid: ('empty' | 'mole' | 'bomb')[] = Array(9).fill('empty');
      const hole = Math.floor(Math.random() * 9);
      newGrid[hole] = Math.random() < 0.25 ? 'bomb' : 'mole';
      setMoleGrid(newGrid);
    }, 900);
  };

  const hitMoleHole = (idx: number) => {
    if (!moleActive) return;
    const type = moleGrid[idx];
    if (type === 'mole') {
      sound.playSuccess();
      const updated = [...moleGrid];
      updated[idx] = 'empty';
      setMoleGrid(updated);
      setMoleScore(prev => prev + 10);
    } else if (type === 'bomb') {
      sound.playError();
      const updated = [...moleGrid];
      updated[idx] = 'empty';
      setMoleGrid(updated);
      setMoleScore(prev => Math.max(0, prev - 15));
    }
  };

  const finishMole = () => {
    setMoleActive(false);
    awardGameScore(moleScore, `🐹 Whack-a-Mole arcade closed! Total score: +${moleScore} pts!`);
  };

  // 14. Higher or Lower
  const guessHilo = (guess: 'higher' | 'lower') => {
    if (resultPoints !== null) return;
    sound.playClick();
    const nextVal = Math.floor(Math.random() * 12) + 1;
    setHiloNext(nextVal);

    const isHigher = nextVal > hiloCurrent;
    const isLower = nextVal < hiloCurrent;
    const won = (guess === 'higher' && isHigher) || (guess === 'lower' && isLower);

    if (won) {
      const nextStreak = hiloStreak + 1;
      setHiloStreak(nextStreak);
      setHiloCurrent(nextVal);
      if (nextStreak >= 3) {
        awardGameScore(nextStreak * 25, `🂡 Triple Streak! +${nextStreak * 25} points!`);
      }
    } else {
      awardGameScore(10, `🂡 Streak ended! Drew ${nextVal}. Consolation +10 pts.`);
    }
  };

  // 15. Reaction Tap
  const startReaction = () => {
    setReactionState('waiting');
    setReactionTime(null);
    sound.playClick();

    const delay = 1500 + Math.random() * 2500;
    setTimeout(() => {
      setReactionState('ready');
      setReactionStartTime(performance.now());
    }, delay);
  };

  const handleReactionClick = () => {
    if (reactionState === 'waiting') {
      sound.playError();
      setReactionState('idle');
      awardGameScore(-10, `⚡ Too early! Wait for GREEN! (-10 pts)`);
    } else if (reactionState === 'ready') {
      const diff = Math.round(performance.now() - reactionStartTime);
      setReactionTime(diff);
      setReactionState('clicked');

      let pts = 15;
      if (diff < 250) pts = 100;
      else if (diff < 350) pts = 60;
      else if (diff < 500) pts = 35;

      awardGameScore(pts, `⚡ Incredible reaction time: ${diff}ms! (+${pts} pts)`);
    }
  };

  // 16. Memory Pairs
  const handleMemoryFlip = (idx: number) => {
    if (resultPoints !== null) return;
    const card = memoryCards[idx];
    if (card.flipped || card.matched) return;

    sound.playClick();
    const updated = [...memoryCards];
    updated[idx].flipped = true;
    setMemoryCards(updated);

    if (firstFlipped === null) {
      setFirstFlipped(idx);
    } else {
      const prevIdx = firstFlipped;
      if (updated[prevIdx].symbol === updated[idx].symbol) {
        sound.playSuccess();
        updated[prevIdx].matched = true;
        updated[idx].matched = true;
        setMemoryCards([...updated]);
        setFirstFlipped(null);
        const newMatches = memoryMatches + 1;
        setMemoryMatches(newMatches);
        if (newMatches === 4) {
          awardGameScore(80, `🧠 Brilliant Memory! All 4 pairs matched! (+80 pts)`);
        }
      } else {
        setTimeout(() => {
          updated[prevIdx].flipped = false;
          updated[idx].flipped = false;
          setMemoryCards([...updated]);
          setFirstFlipped(null);
        }, 800);
      }
    }
  };

  // 17. Chaos Wheel
  const spinChaosWheel = () => {
    if (resultPoints !== null) return;
    sound.playClick();
    const outcomes = ['double', 'triple', 'half', 'loseall', 'points_50', 'points_neg25'];
    const pick = outcomes[Math.floor(Math.random() * outcomes.length)];
    const pScore = activePlayer ? activePlayer.score : 50;

    let pts = 0;
    let msg = '';
    if (pick === 'double') {
      pts = pScore;
      msg = `🌪️ CHAOS WHEEL: DOUBLE SCORE! (+${pts} pts)`;
    } else if (pick === 'triple') {
      pts = pScore * 2;
      msg = `🌪️ CHAOS WHEEL: TRIPLE SCORE! (+${pts} pts)`;
    } else if (pick === 'half') {
      pts = -Math.floor(pScore / 2);
      msg = `💸 CHAOS WHEEL: LOSE HALF! (${pts} pts)`;
    } else if (pick === 'loseall') {
      pts = -pScore;
      msg = `💥 CHAOS WHEEL: BUST! Score wiped to 0!`;
    } else if (pick === 'points_50') {
      pts = 50;
      msg = `🎉 CHAOS WHEEL: Lucky Bounty +50 pts!`;
    } else {
      pts = -25;
      msg = `💀 CHAOS WHEEL: Trap! -25 pts!`;
    }
    awardGameScore(pts, msg);
  };

  // 18. Heist Game
  const executeHeist = (tier: 'sneaky' | 'bold' | 'reckless') => {
    if (resultPoints !== null) return;
    sound.playClick();
    const victimScore = 100;
    const myScore = activePlayer ? activePlayer.score : 50;
    const outcome = calculateHeist(tier, myScore, victimScore);

    if (outcome.success) {
      awardGameScore(outcome.stolen, `🦹 Heist Success! Broke into the vault and snatched +${outcome.stolen} pts!`);
    } else {
      awardGameScore(-outcome.loss, `🚨 Alarm triggered! Security captured the team (-${outcome.loss} pts)`);
    }
  };

  // 19. Double or Nothing
  const playDoubleOrNothing = () => {
    if (resultPoints !== null) return;
    sound.playClick();
    const won = Math.random() < 0.5;
    const cur = activePlayer ? activePlayer.score : 30;
    if (won) {
      awardGameScore(cur, `💰 DOUBLE OR NOTHING WON! Doubled current points (+${cur} pts)!`);
    } else {
      awardGameScore(-50, `💀 DOUBLE OR NOTHING LOST! Penalized -50 pts!`);
    }
  };

  // 20. Robbery Roulette
  const playRobbery = () => {
    if (resultPoints !== null) return;
    sound.playClick();
    const otherPlayers = players.filter(p => p.id !== activePlayer?.id);
    if (otherPlayers.length === 0) {
      awardGameScore(25, `🥷 Lone Wolf Robbery: raided the bank vault for +25 pts!`);
      return;
    }
    const victim = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
    const stolen = Math.min(25, Math.max(10, Math.floor(victim.score * 0.4)));

    if (onUpdatePlayerScore) {
      onUpdatePlayerScore(victim.id, -stolen);
    }
    awardGameScore(stolen, `🥷 Pickpocketed ${stolen} points from ${victim.name}!`);
  };

  // 21. Point Thief Bags
  const pickThiefBag = (bagNum: number) => {
    if (resultPoints !== null) return;
    sound.playClick();
    const outcomes = [
      { pts: 40, msg: `🎒 Gold Bag! Discovered a stash of +40 pts!` },
      { pts: -20, msg: `🎒 Cursed Bag! Snakes inside! -20 pts!` },
      { pts: 25, msg: `🎒 Thief Bag! Snatched +25 pts from the room!` }
    ].sort(() => Math.random() - 0.5);

    const chosen = outcomes[bagNum % outcomes.length];
    awardGameScore(chosen.pts, chosen.msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-md text-white select-none animate-fadeIn">
      {/* Game Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-black/40 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{currentConf.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black tracking-tight">{currentConf.name}</h3>
              {chaosMode && (
                <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                  <Flame className="w-3 h-3" /> CHAOS ACTIVE
                </span>
              )}
            </div>
            {activePlayer && (
              <span className="text-xs text-amber-300 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activePlayer.color }} />
                <span>Player: {activePlayer.name} ({activePlayer.score} pts)</span>
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Configure Point Values"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-rose-600/80 text-white transition-colors cursor-pointer"
            title="Close Arcade Game"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Game Arena Body */}
      <div className={`flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto bg-gradient-to-b ${GRADIENTS[gameKey] || 'from-blue-900 to-indigo-950'}`}>
        {/* 1. Wheel of Fortune */}
        {gameKey === 'wheel' && (
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-3xl z-10 drop-shadow-md">
                🔻
              </div>
              <div
                className="w-full h-full rounded-full shadow-2xl relative overflow-hidden transition-transform duration-[4000ms] ease-out border-8 border-white/40"
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  background: `conic-gradient(
                    #ef4444 0% 12.5%,
                    #f97316 12.5% 25%,
                    #eab308 25% 37.5%,
                    #22c55e 37.5% 50%,
                    #06b6d4 50% 62.5%,
                    #3b82f6 62.5% 75%,
                    #8b5cf6 75% 87.5%,
                    #ec4899 87.5% 100%
                  )`
                }}
              >
                {(config.wheel?.values || [5, 10, 15, 20, 25, 50, 100]).map((v, i, arr) => {
                  const angle = (360 / arr.length) * i + (360 / arr.length) / 2;
                  return (
                    <div
                      key={i}
                      className="absolute inset-0 flex justify-center text-sm font-black text-white drop-shadow-md"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <span className="mt-4">{v >= 0 ? '+' : ''}{v}</span>
                    </div>
                  );
                })}
              </div>
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl font-black text-slate-900 border-4 border-amber-400">
                🎯
              </div>
            </div>

            <button
              onClick={spinWheel}
              disabled={isSpinningWheel}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 text-slate-950 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              {isSpinningWheel ? 'Spinning...' : '🎡 SPIN WHEEL!'}
            </button>
          </div>
        )}

        {/* 2. Roll the Dice */}
        {gameKey === 'dice' && (
          <div className="flex flex-col items-center gap-6">
            <div className={`w-36 h-36 rounded-3xl bg-white shadow-2xl flex items-center justify-center text-5xl font-black text-slate-900 border-4 border-slate-200 transition-all ${
              isRollingDice ? 'animate-dice' : ''
            }`}>
              {diceVal}
            </div>

            <button
              onClick={rollDice}
              disabled={isRollingDice}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 text-slate-950 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              {isRollingDice ? 'Rolling...' : '🎲 ROLL DICE!'}
            </button>
          </div>
        )}

        {/* 3. Stopper */}
        {gameKey === 'stopper' && (
          <div className="flex flex-col items-center gap-6 w-full max-w-xl">
            <h4 className="text-sm font-bold text-cyan-200 text-center">
              Stop the marker inside the central JACKPOT zone!
            </h4>
            <div className="relative w-full h-20 rounded-2xl overflow-hidden flex shadow-2xl border-2 border-white/30">
              <div className="w-[25%] bg-slate-600 flex items-center justify-center text-xs font-bold text-white">OK (10)</div>
              <div className="w-[15%] bg-blue-500 flex items-center justify-center text-xs font-bold text-white">GOOD (25)</div>
              <div className="w-[7%] bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">GREAT (50)</div>
              <div className="w-[6%] bg-amber-400 flex items-center justify-center text-xs font-black text-slate-950 ring-2 ring-white">100</div>
              <div className="w-[7%] bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">GREAT (50)</div>
              <div className="w-[15%] bg-blue-500 flex items-center justify-center text-xs font-bold text-white">GOOD (25)</div>
              <div className="w-[25%] bg-slate-600 flex items-center justify-center text-xs font-bold text-white">OK (10)</div>

              <div
                className="absolute top-0 bottom-0 w-2.5 bg-white shadow-[0_0_15px_#fff] rounded-full -translate-x-1/2 pointer-events-none"
                style={{ left: `${stopperPos}%` }}
              />
            </div>

            <button
              onClick={stopStopper}
              disabled={stopperStopped}
              className="px-8 py-3.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 disabled:opacity-50 text-white font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              🛑 STOP!
            </button>
          </div>
        )}

        {/* 4. Mystery Box */}
        {gameKey === 'mystery' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-lg">
            <h4 className="text-sm font-bold text-amber-200 text-center">
              Tap any mystery gift box to reveal your score!
            </h4>
            <div className="grid grid-cols-5 gap-3 w-full">
              {mysteryBoxes.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => pickBox(idx)}
                  disabled={b.opened || resultPoints !== null}
                  className={`h-20 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg transition-all cursor-pointer border-2 ${
                    b.opened
                      ? 'bg-emerald-500 border-white text-white scale-105'
                      : b.shaking
                        ? 'animate-box-shake bg-amber-400 border-amber-300'
                        : 'bg-white/20 hover:bg-white/30 border-white/40 hover:scale-105'
                  }`}
                >
                  {b.opened ? (b.val >= 0 ? `+${b.val}` : b.val) : '🎁'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 5. Pick a Card */}
        {gameKey === 'cards' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-xl">
            <h4 className="text-sm font-bold text-teal-200 text-center">
              Select one card from the deck to uncover its secret value!
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {cardDeck.map((c, idx) => (
                <div
                  key={idx}
                  onClick={() => pickCard(idx)}
                  className="w-20 h-28 perspective-1000 cursor-pointer"
                >
                  <div className={`relative w-full h-full duration-500 transform-style-3d rounded-xl shadow-xl border-2 border-white/40 ${
                    c.flipped ? 'rotate-y-180' : ''
                  }`}>
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-700 to-purple-800 rounded-xl flex items-center justify-center text-3xl font-black text-white">
                      🃏
                    </div>
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white text-slate-900 rounded-xl flex items-center justify-center text-xl font-black border-2 border-amber-400">
                      {c.val >= 0 ? `+${c.val}` : c.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Slot Machine */}
        {gameKey === 'slots' && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 bg-black/60 p-4 rounded-3xl border-4 border-amber-400 shadow-2xl">
              {reels.map((val, idx) => (
                <div
                  key={idx}
                  className={`w-24 h-32 rounded-2xl bg-white text-slate-950 font-black text-3xl flex items-center justify-center shadow-inner ${
                    isSpinningSlots ? 'animate-reel' : ''
                  }`}
                >
                  {val}
                </div>
              ))}
            </div>

            <p className="text-xs text-amber-200">
              3 Match = Jackpot ({config.slots?.jackpot || 100} pts) • 2 Match = Matched Value
            </p>

            <button
              onClick={spinSlots}
              disabled={isSpinningSlots}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 text-slate-950 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              {isSpinningSlots ? 'Spinning...' : '🎰 SPIN SLOTS!'}
            </button>
          </div>
        )}

        {/* 7. Spin Bottle */}
        {gameKey === 'bottle' && (
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-white/30 flex items-center justify-center">
              {(config.bottle?.values || [5, 10, 15, 20, 25, 50]).map((v, i, arr) => {
                const angle = (360 / arr.length) * i;
                return (
                  <div
                    key={i}
                    className="absolute inset-0 flex justify-center text-xs font-black text-white"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <span className="mt-1">{v >= 0 ? '+' : ''}{v}</span>
                  </div>
                );
              })}

              <div
                className="text-6xl transition-transform duration-[3200ms] ease-out pointer-events-none drop-shadow-2xl"
                style={{ transform: `rotate(${bottleRot}deg)` }}
              >
                🍾
              </div>
            </div>

            <button
              onClick={spinBottle}
              disabled={isSpinningBottle}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 text-slate-950 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              {isSpinningBottle ? 'Spinning...' : '🍾 SPIN BOTTLE!'}
            </button>
          </div>
        )}

        {/* 8. Lucky Number */}
        {gameKey === 'lucky' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-lg">
            <h4 className="text-sm font-bold text-yellow-200 text-center">
              Pick your lucky lotto sphere!
            </h4>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {luckyBalls.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => pickLuckyBall(idx)}
                  disabled={b.picked || resultPoints !== null}
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-sm shadow-xl transition-all cursor-pointer border-2 ${
                    b.picked
                      ? 'bg-white text-slate-950 border-amber-400 scale-110'
                      : 'bg-radial from-amber-200 to-yellow-500 text-slate-950 border-white hover:scale-110 animate-ball'
                  }`}
                  style={{ animationDelay: `${(idx % 4) * 0.2}s` }}
                >
                  {b.picked ? (b.val >= 0 ? `+${b.val}` : b.val) : idx + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 9. Treasure Hunt */}
        {gameKey === 'treasure' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-sm">
            <div className="flex items-center justify-between w-full bg-black/40 px-4 py-2.5 rounded-2xl border border-white/20">
              <span className="text-xs text-emerald-200 font-bold">Accumulated Pot:</span>
              <span className="text-xl font-black text-amber-300">{treasurePot} pts</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 w-full">
              {treasureGrid.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => openTile(idx)}
                  disabled={t.opened || treasureGameOver}
                  className={`h-24 rounded-2xl flex flex-col items-center justify-center text-2xl font-black shadow-lg transition-all border-2 cursor-pointer ${
                    t.opened
                      ? t.isGem
                        ? 'bg-emerald-600 border-white text-white'
                        : 'bg-slate-950 border-rose-500 text-rose-500'
                      : 'bg-amber-800/80 hover:bg-amber-700 border-amber-600 text-amber-200 hover:scale-105'
                  }`}
                >
                  {t.opened ? (
                    t.isGem ? (
                      <>
                        <span>💎</span>
                        <span className="text-xs font-black">+{t.val}</span>
                      </>
                    ) : (
                      <span>💣</span>
                    )
                  ) : (
                    '❓'
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={bankTreasurePot}
              disabled={treasureGameOver || treasurePot === 0}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-40 text-white font-black text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              💰 BANK POT ({treasurePot} PTS)
            </button>
          </div>
        )}

        {/* 10. Dart Board */}
        {gameKey === 'darts' && (
          <div className="flex flex-col items-center gap-5">
            <h4 className="text-sm font-bold text-red-200 text-center">
              Tap anywhere inside the target circle to throw your dart!
            </h4>
            <div
              onClick={throwDart}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full shadow-2xl cursor-crosshair overflow-hidden border-4 border-white/30 flex items-center justify-center bg-slate-950"
            >
              <div className="absolute inset-0 rounded-full bg-slate-800 flex items-start justify-center text-[10px] text-white pt-1">10</div>
              <div className="absolute inset-[10%] rounded-full bg-blue-600 flex items-start justify-center text-[10px] text-white pt-1">20</div>
              <div className="absolute inset-[25%] rounded-full bg-emerald-600 flex items-start justify-center text-[10px] text-white pt-1">30</div>
              <div className="absolute inset-[40%] rounded-full bg-amber-500 flex items-start justify-center text-[10px] text-slate-950 font-bold pt-1">50</div>
              <div className="absolute inset-[44%] rounded-full bg-red-600 flex items-center justify-center text-xs font-black text-white shadow-md">100</div>

              {dartPos && (
                <div
                  className="absolute text-2xl -translate-x-1/2 -translate-y-1/2 drop-shadow-md pointer-events-none"
                  style={{ left: dartPos.x, top: dartPos.y }}
                >
                  📌
                </div>
              )}
            </div>
          </div>
        )}

        {/* 11. Coin Flip */}
        {gameKey === 'coin' && (
          <div className="flex flex-col items-center gap-6">
            <div className={`w-36 h-36 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-5xl font-black shadow-2xl border-4 border-amber-200 ${
              isFlippingCoin ? 'animate-coin' : ''
            }`}>
              {coinSide === 'H' ? '👑' : '🌿'}
            </div>

            <p className="text-xs text-amber-200">
              Correct: +{config.coin?.win || 50} pts • Wrong: +{config.coin?.lose || 10} pts
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => flipCoin('H')}
                disabled={isFlippingCoin}
                className="px-6 py-3 bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
              >
                👑 Call HEADS
              </button>
              <button
                onClick={() => flipCoin('T')}
                disabled={isFlippingCoin}
                className="px-6 py-3 bg-white hover:bg-slate-100 disabled:opacity-50 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
              >
                🌿 Call TAILS
              </button>
            </div>
          </div>
        )}

        {/* 12. Balloons */}
        {gameKey === 'balloons' && (
          <div className="relative w-full max-w-xl h-96 overflow-hidden rounded-2xl bg-black/20 border border-white/20 p-4">
            <h4 className="text-xs font-bold text-sky-200 text-center mb-2">
              Pop a floating balloon before it drifts away!
            </h4>
            <div className="relative w-full h-80">
              {balloons.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => popBalloon(idx)}
                  disabled={b.popped}
                  className={`absolute text-4xl cursor-pointer transition-transform ${
                    b.popped ? 'scale-125 opacity-90' : 'hover:scale-125'
                  }`}
                  style={{
                    left: `${b.x}%`,
                    bottom: b.popped ? '50%' : '15%',
                    filter: `hue-rotate(${b.hue}deg)`
                  }}
                >
                  {b.popped ? `💥 ${b.val >= 0 ? '+' : ''}${b.val}` : '🎈'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 13. Whack-a-Mole */}
        {gameKey === 'mole' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <div className="flex items-center justify-between w-full bg-black/40 px-4 py-2 rounded-xl border border-white/20">
              <span className="text-xs text-emerald-300 font-bold">Arcade Score: {moleScore} pts</span>
              {moleActive ? (
                <button
                  onClick={finishMole}
                  className="px-3 py-1 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold cursor-pointer"
                >
                  Claim Score
                </button>
              ) : (
                <button
                  onClick={startMole}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold cursor-pointer"
                >
                  Start Round
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
              {moleGrid.map((cell, idx) => (
                <div
                  key={idx}
                  onClick={() => hitMoleHole(idx)}
                  className="h-24 bg-stone-900 border-2 border-stone-700 rounded-2xl flex items-center justify-center text-4xl cursor-pointer select-none transition-transform active:scale-95 shadow-inner"
                >
                  {cell === 'mole' && <span className="animate-bounce">🐹</span>}
                  {cell === 'bomb' && <span className="animate-pulse">💣</span>}
                  {cell === 'empty' && <span className="text-stone-700 text-xs">🕳️</span>}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-emerald-200">Tap 🐹 for +10 pts! Avoid 💣 (-15 pts)!</p>
          </div>
        )}

        {/* 14. Higher or Lower */}
        {gameKey === 'higher' && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-28 h-36 rounded-2xl bg-white text-slate-900 flex flex-col items-center justify-center shadow-2xl border-4 border-amber-400">
                <span className="text-xs font-bold text-slate-400">CURRENT</span>
                <span className="text-5xl font-black">{hiloCurrent}</span>
              </div>
              <span className="text-2xl font-black text-amber-300">VS</span>
              <div className="w-28 h-36 rounded-2xl bg-indigo-950/80 border-2 border-dashed border-indigo-400 text-indigo-200 flex flex-col items-center justify-center shadow-xl">
                <span className="text-xs font-bold">NEXT</span>
                <span className="text-4xl font-black">{hiloNext !== null ? hiloNext : '?'}</span>
              </div>
            </div>

            <p className="text-xs text-amber-200">Current Streak: <strong className="text-white text-base">{hiloStreak}</strong></p>

            <div className="flex gap-4">
              <button
                onClick={() => guessHilo('higher')}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-sm shadow-lg cursor-pointer transition-all active:scale-95"
              >
                ▲ HIGHER
              </button>
              <button
                onClick={() => guessHilo('lower')}
                className="px-6 py-3 bg-rose-500 hover:bg-rose-400 text-slate-950 font-black rounded-xl text-sm shadow-lg cursor-pointer transition-all active:scale-95"
              >
                ▼ LOWER
              </button>
            </div>
          </div>
        )}

        {/* 15. Reaction Tap */}
        {gameKey === 'reaction' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <div
              onClick={handleReactionClick}
              className={`w-full h-64 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 cursor-pointer transition-all select-none ${
                reactionState === 'idle'
                  ? 'bg-stone-800 border-stone-600 text-stone-300'
                  : reactionState === 'waiting'
                    ? 'bg-rose-900 border-rose-500 text-rose-200'
                    : reactionState === 'ready'
                      ? 'bg-emerald-500 border-white text-slate-950 scale-105'
                      : 'bg-indigo-800 border-indigo-400 text-white'
              }`}
            >
              {reactionState === 'idle' && (
                <>
                  <span className="text-4xl mb-2">⚡</span>
                  <span className="text-sm font-bold">Tap Start to Begin</span>
                </>
              )}
              {reactionState === 'waiting' && (
                <>
                  <span className="text-3xl mb-1">🛑</span>
                  <span className="text-lg font-black">WAIT FOR GREEN...</span>
                  <span className="text-xs text-rose-300">(Don't click yet!)</span>
                </>
              )}
              {reactionState === 'ready' && (
                <>
                  <span className="text-5xl font-black mb-1">TAP NOW!!</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Lightning Fast!</span>
                </>
              )}
              {reactionState === 'clicked' && (
                <>
                  <span className="text-4xl font-black mb-1">{reactionTime} ms</span>
                  <span className="text-xs">Awesome reflexes!</span>
                </>
              )}
            </div>

            {reactionState === 'idle' && (
              <button
                onClick={startReaction}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm cursor-pointer shadow-lg"
              >
                Start Reaction Test
              </button>
            )}
          </div>
        )}

        {/* 16. Memory Pairs */}
        {gameKey === 'memory' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <h4 className="text-xs font-bold text-purple-200">Match all 4 emoji animal pairs!</h4>
            <div className="grid grid-cols-4 gap-3 w-full">
              {memoryCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => handleMemoryFlip(idx)}
                  disabled={card.matched}
                  className={`h-24 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg transition-all cursor-pointer border-2 ${
                    card.flipped || card.matched
                      ? 'bg-white text-slate-900 border-amber-400'
                      : 'bg-purple-900/60 hover:bg-purple-800 border-purple-400 text-white'
                  }`}
                >
                  {card.flipped || card.matched ? card.symbol : '❓'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 17. Chaos Wheel */}
        {gameKey === 'chaoswheel' && (
          <div className="flex flex-col items-center gap-6">
            <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-rose-600 via-amber-500 to-indigo-900 border-4 border-white flex items-center justify-center text-6xl shadow-2xl animate-pulse">
              🌪️
            </div>
            <p className="text-xs text-rose-300 text-center max-w-sm">
              Spins through extreme multipliers: Double, Triple, Lose Half, or complete BUST!
            </p>
            <button
              onClick={spinChaosWheel}
              className="px-8 py-3.5 bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              🌪️ UNLEASH CHAOS WHEEL!
            </button>
          </div>
        )}

        {/* 18. Heist */}
        {gameKey === 'heist' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <h4 className="text-xs font-bold text-zinc-300 text-center">
              Select vault target risk level to crack the combination:
            </h4>
            <div className="grid grid-cols-3 gap-3 w-full">
              <button
                onClick={() => executeHeist('sneaky')}
                className="p-3 bg-stone-800 hover:bg-stone-700 border border-stone-600 rounded-xl flex flex-col items-center gap-1 cursor-pointer transition-all active:scale-95"
              >
                <span className="text-2xl">🗝️</span>
                <span className="text-xs font-bold">Sneaky</span>
                <span className="text-[10px] text-emerald-400">75% Safe</span>
              </button>
              <button
                onClick={() => executeHeist('bold')}
                className="p-3 bg-stone-800 hover:bg-stone-700 border border-stone-600 rounded-xl flex flex-col items-center gap-1 cursor-pointer transition-all active:scale-95"
              >
                <span className="text-2xl">🔐</span>
                <span className="text-xs font-bold">Bold</span>
                <span className="text-[10px] text-amber-400">50% Risk</span>
              </button>
              <button
                onClick={() => executeHeist('reckless')}
                className="p-3 bg-stone-800 hover:bg-stone-700 border border-stone-600 rounded-xl flex flex-col items-center gap-1 cursor-pointer transition-all active:scale-95"
              >
                <span className="text-2xl">💣</span>
                <span className="text-xs font-bold">Reckless</span>
                <span className="text-[10px] text-rose-400">30% Jackpot</span>
              </button>
            </div>
          </div>
        )}

        {/* 19. Double or Nothing */}
        {gameKey === 'double' && (
          <div className="flex flex-col items-center gap-6">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 border-4 border-amber-300 flex items-center justify-center text-5xl shadow-2xl animate-bounce">
              💀
            </div>
            <p className="text-xs text-amber-200 text-center max-w-sm">
              50% chance to DOUBLE the active player's score; 50% chance to lose 50 points!
            </p>
            <button
              onClick={playDoubleOrNothing}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              🎲 FLIP GOLDEN SKULL!
            </button>
          </div>
        )}

        {/* 20. Robbery Roulette */}
        {gameKey === 'robbery' && (
          <div className="flex flex-col items-center gap-6">
            <div className="w-36 h-36 rounded-full bg-slate-900 border-4 border-red-500 flex items-center justify-center text-5xl shadow-2xl">
              🥷
            </div>
            <p className="text-xs text-red-200 text-center max-w-sm">
              Target a random competing player and siphon up to 30 points into your pouch!
            </p>
            <button
              onClick={playRobbery}
              className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-slate-800 text-white font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              🥷 COMMENCE ROBBERY!
            </button>
          </div>
        )}

        {/* 21. Point Thief Bags */}
        {gameKey === 'thief' && (
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <h4 className="text-xs font-bold text-stone-300 text-center">
              Pick one of the 3 loot bags! One is cursed, one is gold!
            </h4>
            <div className="grid grid-cols-3 gap-3 w-full">
              {[0, 1, 2].map(num => (
                <button
                  key={num}
                  onClick={() => pickThiefBag(num)}
                  disabled={resultPoints !== null}
                  className="h-28 bg-stone-800 hover:bg-stone-700 border-2 border-stone-600 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all active:scale-95"
                >
                  <span className="text-4xl">🎒</span>
                  <span className="text-xs font-black">Bag #{num + 1}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Outcome & Replay Banner */}
        {resultMsg && (
          <div className="mt-6 flex flex-col items-center gap-3 animate-fadeIn">
            <div className="text-base sm:text-lg font-black text-center text-amber-300 drop-shadow-md">
              {resultMsg}
            </div>
            <button
              onClick={initGame}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Play Again</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
