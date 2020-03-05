"use strict";

// JS control flow demo
// Returns a random integer in the range [m,n] (inclusive)
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
} // Randomly returns a string representing one of the six 
// Crown and Anchor faces


function randFace() {
  // So the first array is an actual array created at the spot
  // and the second pair of [] represent the randomly chosen index
  // overal this will return one randomly chosen element
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
} // Starting conditions


var funds = 50;
var round = 0;

var _loop = function _loop() {
  round++;
  console.log("round ".concat(round, ":")); // \t for tab

  console.log("\tstarting funds: ".concat(funds, "p")); // Place bets

  var bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0
  };
  var totalBet = rand(1, funds);

  if (totalBet == 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    // Distribute total bet
    var remaining = totalBet;

    do {
      var bet = rand(1, remaining);
      var face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }

  funds = funds - totalBet; // This will run the function defined in map on every value associated 
  // with a key in the object, see here 
  // https://stackoverflow.com/a/14810722

  console.log('\tbets: ' + Object.keys(bets).map(function (face) {
    return "".concat(face, ": ").concat(bets[face], " pence");
  }).join(', ') + "(total: ".concat(totalBet, " pence)")); // Roll dice

  var hand = [];

  for (var roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }

  console.log("\thand: ".concat(hand.join(', '))); // Collect winnings

  var winnings = 0;

  for (var die = 0; die < hand.length; die++) {
    var _face = hand[die];
    if (bets[_face] > 0) winnings = winnings + bets[_face];
  }

  funds = funds + winnings;
  console.log("\twinnings: ".concat(winnings));
};

while (funds > 1 && funds < 100) {
  _loop();
}

console.log("\tending funs: ".concat(funds));