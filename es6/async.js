// Asynchronous programming


// setTimeout - executes a function once the timer expires

console.log("Before timeout: " + new Date());
function f(){
	console.log("After timeout: " + new Date());
}
// One minute
setTimeout(f, 60*1000);
console.log("I happen after setTimeout!");
console.log("Me too!");
