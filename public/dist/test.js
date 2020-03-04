'use strict'; // es6 feature: block-scoped "let" declaration

var sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Zvezda',
  verb: 'je',
  object: 'Sampion'
}]; // es6 feature: object destructuring

function sat(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  // es6 feature: template strings
  console.log("".concat(subject).concat(verb).concat(object));
} // es6 features: for .. of


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}