/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ESL Mastery Lab Comprehensive Curriculum & Arcade Data
 * Author & Creator: Fani
 * © 2026 Fani. All rights reserved.
 */

export interface Player {
  id: number;
  name: string;
  score: number;
  color: string;
}

export const AVATAR_COLORS = [
  '#e53935', '#1e88e5', '#43a047', '#fb8c00',
  '#8e24aa', '#00acc1', '#f4511e', '#3949ab', '#00897b'
];

export const DEFAULT_PLAYERS: Player[] = [
  { id: 1, name: 'Hoho', score: 0, color: '#e53935' },
  { id: 2, name: 'Chen', score: 0, color: '#1e88e5' },
  { id: 3, name: 'Yuki', score: 0, color: '#43a047' },
  { id: 4, name: 'Laura', score: 0, color: '#fb8c00' },
  { id: 5, name: 'Cici', score: 0, color: '#8e24aa' },
  { id: 6, name: 'Livi', score: 0, color: '#00acc1' },
  { id: 7, name: 'Shino', score: 0, color: '#f4511e' },
  { id: 8, name: 'Evan', score: 0, color: '#3949ab' },
  { id: 9, name: 'Lucy', score: 0, color: '#00897b' }
];

// Container Nouns
export const CONTAINER_PAIRS = [
  { l: '🥛 Milk', r: 'Carton of milk' },
  { l: '🍓 Jam', r: 'Jar of jam' },
  { l: '🍞 Bread', r: 'Loaf of bread' },
  { l: '🍲 Soup', r: 'Can of soup' },
  { l: '🍚 Rice', r: 'Bag of rice' },
  { l: '🍫 Chocolate', r: 'Bar of chocolate' },
  { l: '☕ Tea', r: 'Cup of tea' },
  { l: '🧂 Salt', r: 'Pinch of salt' }
];

// Collective Nouns
export const COLLECTIVE_PAIRS = [
  { l: '🦁 Pride', r: 'Lions' },
  { l: '🐑 Flock', r: 'Sheep / Birds' },
  { l: '🐘 Herd', r: 'Elephants / Cattle' },
  { l: '🐺 Pack', r: 'Wolves / Dogs' },
  { l: '🐝 Swarm', r: 'Bees' },
  { l: '🐟 School / Shoal', r: 'Fish' },
  { l: '🐬 Pod', r: 'Dolphins / Whales' },
  { l: '🦆 Gaggle', r: 'Ducks / Geese' },
  { l: '🦉 Parliament', r: 'Owls' },
  { l: '🐦 Murder', r: 'Crows' }
];

// Idioms Pairs
export const IDIOM_PAIRS = [
  { l: '🍰 Piece of cake', r: 'Very easy' },
  { l: '🍌 Go bananas', r: 'Become wildly excited or crazy' },
  { l: '🛋️ Couch potato', r: 'Lazy person who watches lots of TV' },
  { l: '🐺 Wolf down', r: 'Eat food very quickly' },
  { l: '🐔 Chicken out', r: 'Withdraw from doing something out of fear' },
  { l: '🐒 Monkey around', r: 'Play sillily or waste time' },
  { l: '🥚 Bad egg', r: 'Dishonest or unreliable person' },
  { l: '🐷 Pig out', r: 'Eat greedily in large amounts' },
  { l: '🦡 Ferret out', r: 'Search persistently until found' },
  { l: '🦆 Duck out', r: 'Leave quickly or quietly' }
];

// Animal Families Fill Data
export const ANIMAL_FILL_DATA = [
  { q: 'Horse baby: ______', ans: ['foal'], hint: 'Starts with F. Not cub.' },
  { q: 'Chicken female: ______', ans: ['hen'], hint: '3 letters, starts with H.' },
  { q: 'Cow baby: ______', ans: ['calf'], hint: 'Plural is calves.' },
  { q: 'Cat baby: ______', ans: ['kitten'], hint: '6 letters, starts with K.' },
  { q: 'Sheep baby: ______', ans: ['lamb'], hint: 'Silent final b.' },
  { q: 'Dog baby: ______', ans: ['pup', 'puppy'], hint: 'P.' },
  { q: 'Duck male: ______', ans: ['drake'], hint: 'Rhymes with lake.' },
  { q: 'Male bee: ______', ans: ['drone'], hint: 'Has no father; flies around.' },
  { q: 'Female cat: ______', ans: ['queen'], hint: 'Royal title for a female cat.' },
  { q: 'Female sheep: ______', ans: ['ewe'], hint: 'Sounds like the letter U.' }
];

// Short vs Long Vowels Items
export const VOWEL_ITEMS = [
  { w: 'Home', k: 'L' },
  { w: 'Cut', k: 'S' },
  { w: 'Bike', k: 'L' },
  { w: 'Pet', k: 'S' },
  { w: 'Rope', k: 'L' },
  { w: 'Cake', k: 'L' },
  { w: 'Sit', k: 'S' },
  { w: 'Night', k: 'L' },
  { w: 'Hop', k: 'S' },
  { w: 'Hope', k: 'L' },
  { w: 'Tub', k: 'S' },
  { w: 'Tube', k: 'L' }
];

// Magic 'e' Spell Data
export const SPELL_DATA = [
  { q: 'Home (Long) → H _ M _', ans: ['home'], hint: 'Magic silent e makes o long.' },
  { q: 'Cut (Short) → C _ T', ans: ['cut'], hint: 'Clipped short u vowel.' },
  { q: 'Bike (Long) → B _ K _', ans: ['bike'], hint: 'Silent e at end.' },
  { q: 'Pet (Short) → P _ T', ans: ['pet'], hint: 'Short e sound.' },
  { q: 'Rope (Long) → R _ P _', ans: ['rope'], hint: 'Magic e at end.' },
  { q: 'Cute (Long) → C _ T _', ans: ['cute'], hint: 'Opposite of cut.' }
];

// Countable vs Uncountable Items
export const CU_ITEMS = [
  { w: 'Egg', k: 'C' },
  { w: 'Cheese', k: 'U' },
  { w: 'Banana', k: 'C' },
  { w: 'Juice', k: 'U' },
  { w: 'Tomato', k: 'C' },
  { w: 'Bread', k: 'U' },
  { w: 'Carrot', k: 'C' },
  { w: 'Water', k: 'U' },
  { w: 'Apple', k: 'C' },
  { w: 'Meat', k: 'U' },
  { w: 'Information', k: 'U' },
  { w: 'Friend', k: 'C' },
  { w: 'Advice', k: 'U' },
  { w: 'Idea', k: 'C' },
  { w: 'Furniture', k: 'U' },
  { w: 'Coin', k: 'C' },
  { w: 'Money', k: 'U' }
];

// Comparative Form Fill Data
export const COMP_FILL_DATA = [
  { q: 'good → ______', ans: ['better'], hint: 'Irregular form.' },
  { q: 'bad → ______', ans: ['worse'], hint: 'Irregular form.' },
  { q: 'hot → ______', ans: ['hotter'], hint: 'CVC doubling with double t.' },
  { q: 'happy → ______', ans: ['happier'], hint: 'Change y to i and add -er.' },
  { q: 'beautiful → ______', ans: ['more beautiful'], hint: 'Long adjective takes more.' },
  { q: 'far → ______', ans: ['farther', 'further'], hint: 'Irregular distance comparative.' },
  { q: 'little → ______', ans: ['less'], hint: 'Used for uncountable amounts.' },
  { q: 'many → ______', ans: ['more'], hint: 'Irregular form.' },
  { q: 'large → ______', ans: ['larger'], hint: 'Ends in e, just add -r.' },
  { q: 'funny → ______', ans: ['funnier'], hint: 'Change y to i and add -er.' }
];

// Quantifiers Fill Data
export const QUANT_FILL_DATA = [
  { q: 'There are ______ apples on the table. (many / much)', ans: ['many'], hint: 'Apples are countable plural.' },
  { q: 'How ______ water do you drink every day? (many / much)', ans: ['much'], hint: 'Water is an uncountable liquid.' },
  { q: 'I need ______ sugar for the recipe. (some / any)', ans: ['some'], hint: 'Used in affirmative positive sentences.' },
  { q: 'There isn\'t ______ milk left in the fridge. (some / any)', ans: ['any'], hint: 'Used in negative sentences.' },
  { q: 'Would you like ______ tea? (some / any)', ans: ['some'], hint: 'Special rule: polite offers use some!' },
  { q: 'He bought a ______ of bread. (few / little)', ans: ['little'], hint: 'Bread is uncountable.' },
  { q: 'She boiled a ______ of eggs for breakfast. (few / little)', ans: ['few'], hint: 'Eggs are countable plural.' },
  { q: 'You have ______ money, but fewer coins. (less / fewer)', ans: ['less'], hint: 'Money is uncountable; coins are countable.' }
];

// Idiom Fill Data
export const IDIOM_FILL_DATA = [
  { q: 'The exam was so easy; it was a ______.', ans: ['piece of cake'], hint: 'Sweet bakery treat.' },
  { q: 'Stop ______ with your phone during class!', ans: ['monkeying around', 'monkey around'], hint: 'Playful primate idiom.' },
  { q: 'My brother spends all day watching TV; he is a total ______.', ans: ['couch potato'], hint: 'Furniture + vegetable.' },
  { q: 'When the rock band appeared, the crowd started to ______.', ans: ['go bananas'], hint: 'Yellow fruit madness.' },
  { q: 'He was starving, so he ______ two burgers in 2 minutes.', ans: ['wolfed down', 'wolf down'], hint: 'Predator eating style.' },
  { q: 'She wanted to bungee jump, but she ______ at the last minute.', ans: ['chickened out', 'chicken out'], hint: 'Bird of cowardice.' },
  { q: 'Never trust him with your wallet; he is a ______.', ans: ['bad egg'], hint: 'Rotten farm item.' },
  { q: 'Every holiday, we gather together and ______ on roast turkey.', ans: ['pig out'], hint: 'Greedy farm animal.' }
];

// MCQ Data
export const MCQ_DATA = [
  { q: '1. Which of the following is classified as a mammal?', opts: ['Eagle', 'Whale', 'Shark', 'Frog'], c: 1, hint: 'Breathes air and nurses young with milk.', exp: 'A whale is a marine mammal with lungs, not a fish.' },
  { q: '2. Which of the following is a true insect?', opts: ['Spider', 'Butterfly', 'Snake', 'Lizard'], c: 1, hint: 'Has exactly 6 legs and 3 body sections.', exp: 'Butterflies have 6 legs (insects). Spiders have 8 legs (arachnids).' },
  { q: '3. What does "ferret out" mean?', opts: ['Play roughly', 'Search until found', 'Eat quickly', 'Leave quietly'], c: 1, hint: 'Like hunting ferrets flushing rabbits from underground.', exp: 'Ferret out means to search persistently until discovered.' },
  { q: '4. Which animal is a flightless bird?', opts: ['Bat', 'Penguin', 'Dolphin', 'Bear'], c: 1, hint: 'Has feathers, wings modified into flippers, and lays eggs.', exp: 'Penguins are birds.' },
  { q: '5. Which adjective best describes a lion in academic prose?', opts: ['Gentle', 'Fierce', 'Tiny', 'Slimy'], c: 1, hint: 'Wild, powerful apex predator.', exp: 'Fierce is the classic describer.' },
  { q: '6. What is the correct comparative form of "good"?', opts: ['gooder', 'more good', 'better', 'best'], c: 2, hint: 'Irregular comparative.', exp: 'Good becomes better.' },
  { q: '7. What is the comparative form of "hot"?', opts: ['hoted', 'hotter', 'more hot', 'hottter'], c: 1, hint: 'CVC doubling rule applies.', exp: 'Double the t: hotter.' },
  { q: '8. Complete the equality structure: "My coffee is as ______ as yours."', opts: ['hotter', 'more hot', 'hot', 'most hot'], c: 2, hint: 'Equality comparisons with as...as use the base adjective.', exp: 'Base adjective hot.' },
  { q: '9. "The harder you work, the ______ you get."', opts: ['lucky', 'more lucky', 'luckier', 'luckiest'], c: 2, hint: 'Parallel comparative with y -> ier.', exp: 'Luckier.' },
  { q: '10. Which comparative construction contains an error?', opts: ['more beautiful', 'prettier than', 'more better', 'hotter than'], c: 2, hint: 'Double marking is grammatically incorrect.', exp: 'More better is a double comparative error; use better.' }
];

// True/False Data
export const TF_DATA = [
  { s: 'A "couch potato" is someone who exercises vigorously every day.', a: false, hint: 'A couch potato is lazy and watches TV.', exp: 'FALSE: Couch potato means inactive and sedentary.' },
  { s: 'Bread is a countable noun in English (*two breads*).', a: false, hint: 'Bread is an uncountable mass noun; use loaves of bread.', exp: 'FALSE: Bread is uncountable.' },
  { s: 'The male honeybee is called a drone.', a: true, hint: 'Drones develop from unfertilised eggs.', exp: 'TRUE: Male bees are drones.' },
  { s: '"Duck out" means to leave quietly without drawing attention.', a: true, hint: 'Like a duck diving quietly beneath the surface.', exp: 'TRUE.' },
  { s: 'Blue whales lay eggs on ocean beaches.', a: false, hint: 'Whales are mammals that give live birth.', exp: 'FALSE: Blue whales give birth to live calves.' },
  { s: '"Better" is the irregular comparative of "good".', a: true, hint: 'Good -> better -> best.', exp: 'TRUE.' },
  { s: 'In English, it is correct to say "more better".', a: false, hint: 'Double comparatives violate grammar rules.', exp: 'FALSE: Say better.' },
  { s: 'A penguin is classified biologically as a mammal.', a: false, hint: 'Penguins have feathers and lay hard-shelled eggs.', exp: 'FALSE: Penguins are birds.' },
  { s: 'A spider is an insect with six legs.', a: false, hint: 'Spiders have eight legs and belong to arachnids.', exp: 'FALSE: Spiders are arachnids.' },
  { s: '"The more you read, the more you know" is a parallel comparative structure.', a: true, hint: 'The + comparative, the + comparative pattern.', exp: 'TRUE.' }
];

// Error Hunt Data
export const ERR_DATA = [
  { s: 'My phone is more better than yours.', c: '✅ Correction: "My phone is better than yours." (Better is already comparative; never combine more + better).' },
  { s: 'Today is hoter than yesterday.', c: '✅ Correction: "Today is hotter than yesterday." (Short CVC word: double the final t).' },
  { s: 'She is prettier that her sister.', c: '✅ Correction: "She is prettier than her sister." (Use than for comparisons, not that).' },
  { s: 'He is as taller as his brother.', c: '✅ Correction: "He is as tall as his brother." (Equality comparisons as...as require the base adjective tall).' },
  { s: 'The more I practice, the more good I become.', c: '✅ Correction: "The more I practice, the better I become." (Good becomes better in parallel comparative structures).' }
];

// Reading Comprehension Data
export const READING_DATA = [
  { q: '1. What food containers and partitives are mentioned in the passage? (2 marks)', hint: 'Look in Paragraph 1.', model: 'A loaf of bread and a carton of juice.' },
  { q: '2. What does the idiom "wolfed down" mean in the context of lunch? (2 marks)', hint: 'Think of how a hungry animal eats.', model: 'It means they ate their sandwiches extremely quickly and ravenously.' },
  { q: '3. Inference: Why did the family feel like "couch potatoes" after eating? (4 marks)', hint: 'Connect the large meal to fatigue and relaxation.', model: 'Having eaten a large, heavy meal quickly, they felt very full, sluggish, and lazy, choosing to sit still on a bench and rest like people watching TV on a sofa.' },
  { q: '4. Identify ONE uncountable noun and ONE countable noun from the text. (4 marks)', hint: 'Mass vs countable object.', model: 'Uncountable: juice or bread. Countable: apples, monkey, lion, duck, sandwich, or bench.' },
  { q: '5. Opinion: Which animal would you add to the zoo tour and why? (8 marks)', hint: 'Use 4-5 sentences, an adjective describer, comparative reasoning, and a link back.', model: 'I would add an elephant because elephants are majestic, huge, and gentle creatures. They would be much larger and more impressive than the sleeping lion. My little sister would not be frightened because elephants are famous for being friendly and intelligent, creating a wonderful memory for the whole family.' }
];

// Game Show Questions (24 Questions)
export const GAME_QUESTIONS = [
  { cat: 'Vocab', q: 'What is the correct container noun for milk?', hint: 'Paper packaging invented in 1951.', a: 'Carton of milk', exp: 'Carton is the standard container unit.' },
  { cat: 'Vocab', q: 'What is the container word for baked bread?', hint: 'Old English word hlāf.', a: 'Loaf of bread', exp: 'Loaf defines the baked shape.' },
  { cat: 'Vocab', q: 'What is a baby horse called?', hint: 'Starts with F. Not cub.', a: 'Foal', exp: 'Stallion (male), mare (female), foal (baby).' },
  { cat: 'Vocab', q: 'What is a female sheep called?', hint: 'Sounds like the letter U.', a: 'Ewe', exp: 'Ram (male), ewe (female), lamb (baby).' },
  { cat: 'Vocab', q: 'In the word "Home", is the vowel sound short or long?', hint: 'Magic e makes it say its name.', a: 'Long vowel', exp: 'The silent e at the end makes o say its letter name.' },
  { cat: 'Grammar', q: 'Do we say "many apples" or "much apples"?', hint: 'Apples are countable plural.', a: 'many apples', exp: 'Many is used with countable plural nouns.' },
  { cat: 'Grammar', q: 'Do we say "much water" or "many water"?', hint: 'Water is a liquid mass.', a: 'much water', exp: 'Much is used with uncountable nouns.' },
  { cat: 'Grammar', q: 'In a negative sentence, do we use "some" or "any"?', hint: '"I do not have..."', a: 'any', exp: 'Negative statements take any (e.g., I don\'t have any sugar).' },
  { cat: 'Comparative', q: 'What is the comparative form of "good"?', hint: 'Irregular word.', a: 'better', exp: 'Good -> better (never more good).' },
  { cat: 'Comparative', q: 'What is the comparative form of "hot"?', hint: 'CVC doubling.', a: 'hotter', exp: 'Double the final consonant t.' },
  { cat: 'Comparative', q: 'What is the comparative form of "happy"?', hint: 'Two syllables ending in y.', a: 'happier', exp: 'Change y to i and add -er.' },
  { cat: 'Comparative', q: 'What is the comparative form of "beautiful"?', hint: 'Multisyllabic adjective.', a: 'more beautiful', exp: 'Long adjectives take more.' },
  { cat: 'Comparative', q: 'Complete the equality formula: "as hot ___ yours"', hint: 'Shows identical state.', a: 'as (as hot as)', exp: 'Structure is as + adjective + as.' },
  { cat: 'Idioms', q: 'Which idiom means "very easy"?', hint: 'Delicious dessert.', a: 'piece of cake', exp: 'Originates from 19th-century cake walk competitions.' },
  { cat: 'Idioms', q: 'Which idiom means "to eat very quickly"?', hint: 'Wild canine predator.', a: 'wolf down', exp: 'From the ravenous eating habits of wolves.' },
  { cat: 'Idioms', q: 'Which idiom describes a lazy person who watches TV all day?', hint: 'Living room furniture + vegetable.', a: 'couch potato', exp: 'Coined in 1976 by Tom Iacino.' },
  { cat: 'Idioms', q: 'Which idiom means "to leave quietly or sneak away"?', hint: 'Waterfowl diving underwater.', a: 'duck out', exp: 'Like a duck ducking under pond water.' },
  { cat: 'Animals', q: 'Is a blue whale classified as a fish or a mammal?', hint: 'Breathes air through blowholes and produces milk.', a: 'Mammal', exp: 'Whales are warm-blooded mammals.' },
  { cat: 'Animals', q: 'Is a spider classified as an insect?', hint: 'Count the legs: 8 legs vs 6 legs.', a: 'No, it is an arachnid', exp: 'Insects have 6 legs; arachnids have 8 legs.' },
  { cat: 'Animals', q: 'Is a penguin classified as a bird?', hint: 'Has feathers and lays hard-shelled eggs.', a: 'Yes, a flightless bird', exp: 'Penguins are birds whose wings evolved into swimming flippers.' },
  { cat: 'Reading', q: 'In the zoo reading passage, what were the monkeys doing in the trees?', hint: 'Primate idiom in text.', a: 'monkeying around', exp: 'Playing playfully and swinging from branches.' },
  { cat: 'Reading', q: 'What did the duck do when the dad tried to feed it?', hint: 'Pun idiom.', a: 'ducked out', exp: 'It ducked out and escaped into the pond.' },
  { cat: 'Writing', q: 'How do you politely order food in a restaurant?', hint: 'Formula with would like.', a: '"I would like the [item], please."', exp: 'Always use would like and please.' },
  { cat: 'Writing', q: 'What polite question does a waiter ask to offer dessert?', hint: 'Inversion question.', a: '"Would you like any dessert?"', exp: 'Polite inquiry formula.' }
];

// Game Configuration for All 21 Arcade & Chaos Games
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
  mole: { name: string; icon: string; values: number[]; duration: number };
  higher: { name: string; icon: string; values: number[] };
  reaction: { name: string; icon: string; zones: number[] };
  memory: { name: string; icon: string; values: number[] };
  chaoswheel: { name: string; icon: string };
  heist: { name: string; icon: string };
  double: { name: string; icon: string };
  robbery: { name: string; icon: string };
  thief: { name: string; icon: string };
}

export const DEFAULT_GAME_CONFIG: GameConfig = {
  wheel: { name: 'Wheel of Fortune', icon: '🎡', values: [5, 10, 15, 20, 25, -5, 50, 100] },
  dice: { name: 'Roll the Dice', icon: '🎲', values: [5, 10, 15, 20, 25, 50] },
  stopper: { name: 'Stopper', icon: '⏱️', zones: [100, 50, 25, 10] },
  mystery: { name: 'Mystery Box', icon: '🎁', values: [5, 10, 15, 20, 25, -5, 50, 100, 0, 75] },
  cards: { name: 'Pick a Card', icon: '🃏', values: [5, 10, 15, 20, 25, 30, 40, 50] },
  slots: { name: 'Slot Machine', icon: '🎰', values: [5, 10, 15, 20, 25, 50], jackpot: 100 },
  bottle: { name: 'Bottle Spinner', icon: '🍾', values: [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 100] },
  lucky: { name: 'Lucky Number', icon: '🔢', values: [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 90, 100] },
  treasure: { name: 'Treasure Hunt', icon: '💎', gems: [10, 20, 30, 40, 50, 60, 80], bombs: 2 },
  darts: { name: 'Dart Board', icon: '🎯', values: [100, 50, 30, 20, 10] },
  coin: { name: 'Coin Flip', icon: '🪙', win: 50, lose: 10 },
  balloons: { name: 'Balloon Pop', icon: '🎈', values: [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100, -5] },
  mole: { name: 'Whack-a-Mole', icon: '🐹', values: [5, 10, 15, 20, 25], duration: 20 },
  higher: { name: 'Higher or Lower', icon: '🂡', values: [10, 15, 20, 25, 30, 40, 50] },
  reaction: { name: 'Reaction Tap', icon: '⚡', zones: [100, 50, 25, 10] },
  memory: { name: 'Memory Pairs', icon: '🧠', values: [50, 40, 30, 20, 10] },
  chaoswheel: { name: 'Chaos Wheel', icon: '🌪️' },
  heist: { name: 'Heist', icon: '🦹' },
  double: { name: 'Double or Nothing', icon: '💰' },
  robbery: { name: 'Robbery Roulette', icon: '🥷' },
  thief: { name: 'Point Thief Bags', icon: '🎒' }
};
