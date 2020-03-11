// Destructuring
function getSentece({subject, verb, object}){
	return `${subject}${verb}${object}`;
}

// Ellipsis operator
function addPrefix(prefix, ...words){
	const prefixedWords = [];
	for (let i=0; i<words.length; i++){
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}

const o = {
	subject: "Ona ",
	verb: "to ",
	object: "zna"
};

console.log(getSentece(o));
console.log(addPrefix("Crvena", "Zvezda", "Jabuka"));
