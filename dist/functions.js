"use strict";

// Destructuring
function getSentece(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  return "".concat(subject).concat(verb).concat(object);
} // Ellipsis operator


function addPrefix(prefix) {
  var prefixedWords = [];

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    prefixedWords[i] = prefix + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
  }

  return prefixedWords;
}

var o = {
  subject: "Ona ",
  verb: "to ",
  object: "zna"
};
console.log(getSentece(o));
console.log(addPrefix("Crvena", "Zvezda", "Jabuka"));