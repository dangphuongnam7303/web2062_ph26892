const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i, movement] of movements.entries()) {
    if(movement>0) {
        console.log(`Movement ${i+1}: You deposited ${movement}`);
    }else {
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('===FOREACH ===');
movements.forEach(function(movement, index, array) {
    if(movement>0) {
        console.log(`Movement ${i+1}: You deposited ${movement}`);
    }else{
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
    }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
