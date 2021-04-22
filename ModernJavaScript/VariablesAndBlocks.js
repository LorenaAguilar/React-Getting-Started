{
  // Block Scope
  {
    //nasted block scope
    //We can protect our variables using let or const
    //variables defined as const can't be changed
    
  }
}

if (true) {
  // Block Scope
}

//Var defined on blocks can be accessed outside of the blocks.. we can solve this using "let"
for (let i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  //Var can't be accessed outside of the function
  var result = a + b;
}

sum(4 + 3);


/* We should always prefer const, and only use other if it is necessary */