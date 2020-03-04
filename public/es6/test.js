'use strict';

// es6 feature: block-scoped "let" declaration
const sentences = [
	{ subject: 'JavaScript', verb: 'is', object: 'great' },
	{ subject: 'Zvezda', verb: 'je', object: 'Sampion' },
];

// es6 feature: object destructuring
function sat({ subject, verb, object }){
	// es6 feature: template strings
	console.log(`${subject}${verb}${object}`);
}

// es6 features: for .. of
for (let s of sentences){
	say(s);
}