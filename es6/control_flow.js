// JS control flow demo

// Returns a random integer in the range [m,n] (inclusive)
function rand(m, n)
{
	return m + Math.floor((n - m + 1)*Math.random());
}

// Randomly returns a string representing one of the six 
// Crown and Anchor faces
function randFace()
{
	// So the first array is an actual array created at the spot
	// and the second pair of [] represent the randomly chosen index
	// overal this will return one randomly chosen element
	return ["crown", "anchor", "heart", "spade", "club", "diamond"]
				[rand(0,5)];
}

// Starting conditions
let funds = 50;
let round = 0;

while (funds > 1 && funds < 100)
{
	round++;
	console.log(`round ${round}:`);
	// \t for tab
	console.log(`\tstarting funds: ${funds}p`);

	// Place bets
	let bets = { crown:0, anchor: 0, heart: 0, 
					spade: 0, club:0, diamond: 0 };
	let totalBet = rand(1, funds);

	if (totalBet == 7){
		totalBet = funds;
		bets.heart = totalBet;
	} else {
		// Distribute total bet
		let remaining = totalBet;
		do {
			let bet = rand(1, remaining);
			let face = randFace();
			bets[face] = bets[face] + bet;
			remaining = remaining - bet;
		} while (remaining > 0)
	}
	funds = funds - totalBet;

	// This will run the function defined in map on every value associated 
	// with a key in the object, see here 
	// https://stackoverflow.com/a/14810722
	console.log('\tbets: '+
		Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
		`(total: ${totalBet} pence)`);

	// Roll dice
	const hand = [];
	for (let roll = 0; roll < 3; roll++){
		hand.push(randFace());
	}
	console.log(`\thand: ${hand.join(', ')}`);

	// Collect winnings
	let winnings = 0;
	for (let die = 0; die < hand.length; die++){
		let face = hand[die];
		if (bets[face] > 0) winnings = winnings + bets[face];
	}
	funds = funds + winnings;
	console.log(`\twinnings: ${winnings}`);			
}
console.log(`\tending funs: ${funds}`);










