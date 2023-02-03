const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'YELLOW CARD'],
    [69, 'RED CARD'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [78, 'GOAL'],
    [92, 'YELLOW CARD'],
]);

//1
console.log(gameEvents.values);
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
//3.
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

//4
for (const[key,event] of gameEvents){
    console.log(`[${half} HALF] ${min}: ${event}`)
}