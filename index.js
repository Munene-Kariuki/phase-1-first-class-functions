function receivesAFunction(afterGreetingActivity) {
  sayHi();
  afterGreetingActivity()
}

function sayHi() {
  console.log("Hi billy")
}
function walk() {
  console.log("Let's go for a walk")
}
function swim() {
  console.log("Let's go swimming")
}

recievesAFunction(walk)

function returnsANamedFunction() {
  return function weights() {
    console.log("before all")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("number")
  }
}


