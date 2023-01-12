// Bài 1
const game = {
  team1: 'Bayen Munich',
  team2: 'Borrussia Dortmund',

  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function(...players) {
    console.log(`${players.length} goals were scored`);
    console.log(`${players}`);
  },
  scorers: {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2,
  }

};
//1
const [players1,players2]=game.players;
//2
const [gk,...fieldPlayers]=players1;
console.log(gk,fieldPlayers);
//3
const allPlayer=[...players1,...players2];
console.log(allPlayer);
//4
const player1Final=[...game.players[0],'Thiago','Coutinho','Perisic'];
//5
const {odds:{team1, x:draw, team2}} = game;
console.log(team1,draw,team2); 
//6
game.printGoals('Davies','Muller','Lewandowski','Kimmich');



// Bài 2:
//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
//2.
const odds = Object.values(game.odds);
let average =0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
//4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);





