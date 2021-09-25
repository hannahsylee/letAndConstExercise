var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
const PI = 3.14;
PI = 42; // This will cause error!

// What is the difference between var and let?
// Let can be reassigned, but NOT redeclared unlike var.
// Let is based on codeblock, var is based on function block.

//What is the difference between var and const?
// Const can NOT be reassigned or redeclared unlike var.
// Const is based on codeblock, var is based on function block.

// What is the difference between let and const? 
// Let can be reassigned but const CANNOT.


// What is hoisting?
// Hoisting is declaring a variable and it being recognized at the top of the scope. 
// When using var, you can access the variable with a value of undefined. You can not for let or const. 
